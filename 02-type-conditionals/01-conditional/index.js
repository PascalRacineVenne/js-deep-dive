// if statement evaluate boolean value

// const preferDarkMode = false;
// const preferSolarizedMode = true;

// if (preferDarkMode) {
//   console.log(preferDarkMode);
//   document.body.style.background = 'black';
// } else if (preferSolarizedMode) {
//   console.log('preferSolarizedMode');
//   document.body.style.background = 'palegoldenrod';
// } else {
//   console.log('light mode set');
//   document.body.style.background = 'ghostwhite';
// }

// const colorMode = 'solarized';

// if (colorMode === 'solarized') {
//   console.log('preferSolarizedMode');
//   document.body.style.background = 'palegoldenrod';
// } else if (colorMode === 'dark') {
//   console.log('preferDarkMode');
//   document.body.style.background = 'black';
// } else {
//   console.log('light mode set');
//   document.body.style.background = 'ghostwhite';
// }

const colorMode = 'solarized';
switch (colorMode) {
  case 'solarized':
    console.log('preferSolarizedMode');
    document.body.style.background = 'palegoldenrod';
    break;
  case 'dark':
    console.log('preferDarkMode');
    document.body.style.background = 'black';
    break;
  default:
    console.log('light mode set');
    document.body.style.background = 'ghostwhite';
}
