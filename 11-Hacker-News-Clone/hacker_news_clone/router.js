const router = new Navigo(null, true, '#');
import Stories from './pages/stories.js';

class RouterHandler {
  constructor() {
    this.createRoutes();
  }

  createRoutes() {
    const routes = [{ path: '/', page: Stories() }];
  }
}
