export default function Story(story) {
  return `
    <div className="story">
      <div className="">
        <span class="gray">${story.index || ''}</span>
        <span class="upvote">▲</span>
        <a href="${story.url}">${story.title}</a>
        <span ">${story.domain}</span>
        </div>
        <div class="gray">
        ${story.points} points by ${story.user} ${story.time_ago}
        |
        <a href="#/item?id=${story.id}">${story.comments_count} comments</a>
        |           
        <span class="favorite">
          <img class='heart' src="../images/heart.png">
          Add to Favorites
        </span>
      </div> 
    </div>
  `;
}