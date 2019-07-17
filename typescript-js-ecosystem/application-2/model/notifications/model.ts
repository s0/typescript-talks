import { Broadcaster } from './broadcast';

export const notifications = new Broadcaster<{
  foo: string;
  /**
   * bar is a thing
   */
  bar: number;
}>();

// some stuff

notifications.broadcastMessage({
  foo: 'bar',
  bar: 123
})