export class Broadcaster<T> {

  private listeners: ((m: T) => void)[];

  constructor() {
    this.listeners = [];
  }

  public broadcastMessage(message: T) {
    this.listeners.forEach(l => l(message));
  }

  public addListener(listener: (m: T) => void) {
    this.listeners.push(listener);
  }

}
