// import heart from '../images/heart.png';

export default function Story(story) {
  const {
    index,
    url,
    title,
    domain,
    points,
    user,
    time_ago,
    id,
    comments_count,
    isFavorite,
  } = story;

  return `
    <div class="story">
      <div class="">
        <span class="gray">${index || ''}</span>
        <span class="upvote">▲</span>
        <a href="${url}">${title}</a>
        <span ">${domain}</span>
        </div>
        <div class="gray">
        ${points} points by ${user} ${time_ago}
        |
        <a href="#/item?id=${id}">${comments_count} comments</a>
        |           
        <span class="favorite" data-story='${JSON.stringify(story)}'>
        <img class='heart' src="./images/heart_full.png" alt="heart" />
          ${isFavorite ? 'Remove From Favorites' : 'Add To Favorites'}
        </span>
      </div> 
    </div>
  `;
}
