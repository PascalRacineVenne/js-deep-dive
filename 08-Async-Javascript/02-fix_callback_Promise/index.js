// callbacks -> promises

// buzzer to tell me what happens

// pending
// fulfilled
// rejected

// Promises give us control

// default value : pending
// resolve is a function that set the status of the Promise to fulfilled
// reject is a function that set the status of the Promise to rejected

// const promise = new Promise((resolve, reject) => {
//   // setTimeout(() => resolve('done'), 2000);
//   setTimeout(() => reject(Error('Promise Failed MOFOS')), 2000);
// });

// instance of Promise created and initial status is <pending>
// it's not resolve...

// promise.then(<resolve>).catch(<reject>)

// promise
//   .then((value) => {
//     console.log(`success: ${value}`);
//   })
//   .catch((error) => {
//     console.error(error);
//   })
//   .finally(() => console.log('done'));

// const promise = new Promise((resolve, reject) => {
//   navigator.geolocation.getCurrentPosition(
//     (position) => {
//       resolve(position);
//     },
//     (error) => {
//       reject(error);
//     }
//   );
// });

const promise = new Promise((resolve, reject) => {
  navigator.geolocation.getCurrentPosition(resolve, reject);
});

// promise
//   .then((position) => {
//     console.log(position);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log('done');
//   });

// const pause = new Promise((resolve, reject) => {

// });
