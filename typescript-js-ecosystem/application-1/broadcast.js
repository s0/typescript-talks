export class Broadcaster {

  constructor() {
    this.listeners = [];
  }

  broadcastMessage(message) {
    this.listeners.forEach(l => l(message));
  }

  addListener(listener) {
    this.listeners.push(listener);
  }

}
