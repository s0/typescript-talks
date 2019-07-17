import { Broadcaster } from './broadcast';

export const notifications = new Broadcaster();

// some stuff

notifications.broadcastMessage({
  foo: 'bar'
})

// other stuff

notifications.broadcastMessage({
  goo: 'bar'
})

notifications.broadcastMessage()
