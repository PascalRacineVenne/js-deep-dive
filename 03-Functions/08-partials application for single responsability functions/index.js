// *** Partial Application fo Single-Responsability Functions ***

// function handleLikePost(step) {
//   let likeCount = 0;
//   return function addLIke() {
//     likeCount += step;
//     return likeCount;
//   };
// }

// const doubleLike = handleLikePost(2);

// console.log(doubleLike());
// console.log(doubleLike());
// console.log(doubleLike());

const getData = (baseUrl) => {
  return (route) => {
    return (callback) => {
      fetch(`${baseUrl}${route}`)
        .then((response) => response.json())
        .then((data) => console.log(data));
    };
  };
};

const getSocialMediaData = getData('https://jsonplaceholder.typicode.com');

const getSocialMediaPosts = getSocialMediaData('/posts');
const getSocialMediaComments = getSocialMediaData('/posts');
// getData('https://jsonplaceholder.typicode.com', '/comments');

// getSocialMediaPosts((posts) => {
//   posts.forEach((post) => console.log(post.title));
// });

getSocialMediaComments((comments) => {
  comments.forEach((comment) => console.log(comment.body));
});

// reduce the number of arguments
