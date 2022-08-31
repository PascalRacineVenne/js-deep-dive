// function handleLikePost() {
//   let likeCount = 0;
//   likeCount++;
//   console.log('like count: ' + likeCount);
// }

// handleLikePost();
// handleLikePost();
// handleLikePost();

// Set to zero each time

// function handleLikePost() {
//   let likeCount = 0;
//   return function addLike() {
//     likeCount += 1;
//     return likeCount
//   }
//   addLike();
//   console.log('like count: ' + likeCount);
// }

// const like = handleLikePost();
// console.log(addLike());
// console.log(addLike());
// console.log(addLike());

function handleLikePost(step) {
  let likeCount = 0;
  return function addLike() {
    likeCount += step;
    return likeCount;
  };
  addLike();
  console.log('like count: ' + likeCount);
}

const doubleLike = handleLikePost(2);
console.log(doubleLike());
console.log(doubleLike());
console.log(doubleLike());

// 1) Closures are a property of JavaScript functions
// 2) Call function in different scope than where function was original defined
// CLOSURE ALLOW US TO REMEMBER VALUE, hold on to a value!
