import view from '../utils/view.js';
import Story from '../components/Story.js';
import baseUrl from '../utils/baseUrl.js';
import store from '../store.js';
import checkFavorite from '../utils/checkFavorite.js';

export default async function Stories(path) {
  const { favorites } = store.getState();
  const stories = await getStories(path);
  const hasStories = stories.length > 0;

  view.innerHTML = `
    <div>
      ${
        hasStories
          ? stories
              .map((story, index) =>
                Story({
                  ...story,
                  index: index + 1,
                  isFavorite: checkFavorite(favorites, story),
                })
              )
              .join('')
          : 'No Stories'
      }
    </div>
  `;

  document.querySelectorAll('.favorite').forEach((favoriteButton) => {
    favoriteButton.addEventListener('click', async function () {
      const story = JSON.parse(this.dataset.story);
      const isFavorited = checkFavorite(favorites, story);

      store.dispath({
        type: isFavorited ? 'REMOVE_FAVORITE' : 'ADD_FAVORITE',
        payload: { favorite: story },
      });
      // re-render Stories Components with update
      await Stories(path);
    });
  });
}

async function getStories(path) {
  const isHomeRoute = path === '/';
  const isNewRoute = path === '/new';

  if (isHomeRoute) {
    path = '/news';
  } else if (isNewRoute) {
    path = '/newest';
  }

  const response = await fetch(`${baseUrl}${path}`);
  const stories = await response.json();
  return stories;
}

// ROUTES
// / (top) -> /news
// /new (New) -> newest
// /ask (Ask) -> /ask
// /show (Show) -> /show
