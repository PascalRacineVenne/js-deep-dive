// reducers - helps us manage app state.

// 2 arguments state + action  => new State

// const reducer = (state, action) {
//   newState
// }

// function counterReducer(state, action) {
//   switch (action.type) {
//     case 'INCREMENT':
//       return state + 1;
//     case 'DECREMENT':
//       return state - 1;
//     default:
//       return state;
//   }
// }

// // with action
// // {
// //   type: 'INCREMENT';
// // }
// // {
// //   type: 'DECREMENT';
// // }

// const result1 = counterReducer(0, { type: 'INCREMENT' });

// const result2 = counterReducer(1, { type: 'DECREMENT' });

// console.log(result1, result2);

// ******************************************** //
// State as objects

// function counterReducer(state, action) {
//   switch (action.type) {
//     case 'INCREMENT':
//       return { ...state, count: state.count + 1 };
//     case 'DECREMENT':
//       return { ...state, count: state.count - 1 };
//     default:
//       return state;
//   }
// }

// // with action
// // {
// //   type: 'INCREMENT';
// // }
// // {
// //   type: 'DECREMENT';
// // }

// const result1 = counterReducer(0, { type: 'INCREMENT' });

// const result2 = counterReducer(1, { type: 'DECREMENT' });

// console.log(result1);

// *************************** //

const initialUser = {
  name: 'Mark',
  email: 'mark@gmail.com',
};

const userReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE_NAME':
      return { ...state, name: action.payload.name };
    case 'CHANGE_EMAIL':
      return { ...state, email: action.payload.email };
    default:
      return state;
  }
};

const user1 = userReducer(initialUser, {
  type: 'CHANGE_NAME',
  payload: { name: 'Joe' },
});

const user2 = userReducer(initialUser, {
  type: 'CHANGE_EMAIL',
  payload: { email: 'joe@gmail.com' },
});

console.log(user1);
console.log(user2);
