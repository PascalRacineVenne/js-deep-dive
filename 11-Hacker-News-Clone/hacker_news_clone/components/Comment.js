export default function Comment(comment) {
  const { comments, content, user, time_ago, level } = comment;
  const hasNestedComments = comments.length > 0;

  return `
    <div class="nested-comments-${level}">
      <p class="comment-header">
        ${user} | ${time_ago}
      </p>
      ${content}
      ${
        hasNestedComments
          ? comments.map((comment) => Comment(comment)).join('')
          : ''
      }
    </div>
  `;
}
