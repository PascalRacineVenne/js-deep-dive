import getUser from './utils/getUser.js';

class App {
  constructor() {
    this.render();
  }

  render() {
    const { name, company } = getUser();
    document.getElementById(
      'root'
    ).innerHTML = `<div>${name} works at ${company}</div>`;
  }
}

new App();
