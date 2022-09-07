// Modules - Allow us to share code between files
import getDate from './utils/date.js';

class App {
  constructor() {
    this.render();
  }

  render() {
    document.getElementById('root').innerHTML = `
      <div>Date: ${getDate().year}-${getDate().month}-${getDate().day}</div>
    `;
  }
}

new App();
