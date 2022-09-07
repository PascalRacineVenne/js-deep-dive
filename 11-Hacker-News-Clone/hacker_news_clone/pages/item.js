import view from '../utils/view.js';
import baseUrl from '../utils/baseUrl.js';

import Story from '../components/Story.js';
import Comment from '../components/Comment.js';

const Item = async () => {
  let story = null;
  let hasComments = false;
  let hasError = false;

  try {
    story = await getStory();
    hasComments = story.comments.length > 0;
  } catch (error) {
    hasError = true;
    console.error(error);
  }

  if (hasError) {
    view.innerHTML = `<div class="error">Error fetching story</div>`;
  }
  view.innerHTML = `
    <div>
      ${Story(story)}
    </div>
    <hr/>
    ${
      hasComments
        ? story.comments
            .map((story, index) => Comment({ ...story, index: index + 1 }))
            .join('')
        : 'No Comments'
    }`;
};

export default Item;

const getStory = async () => {
  const query = window.location.hash;
  const storyId = query.split('?id=')[1];
  const response = await fetch(`${baseUrl}/item/${storyId}`);
  const story = await response.json();
  return story;
};
