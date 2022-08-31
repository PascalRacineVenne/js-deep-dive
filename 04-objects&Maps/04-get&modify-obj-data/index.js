// GET && Modify data

const color = 'green';
const hexCode = '#0f0';

const colors = {
  blue: '#00f',
  orange: '#f60',
  yellow: '#ff0',
  'pink color': '#e3f',
  gold: '#fc4',
  [color]: hexCode,
};

colors.red = 'potato';
// overwrite
colors.red = '#f00';

// if a string  || space...
colors['pink color'] = '';

// colors[color] = hexCode;

console.log(colors);

const getColor = (key) => {
  return colors[key];
};

console.log(getColor('blue'));

// DELETE A PROPERTY
delete colors['yellow'];
console.log(colors);
