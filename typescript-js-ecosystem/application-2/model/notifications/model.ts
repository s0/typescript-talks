import { Broadcaster } from '../../util/core/broadcast';

export const notifications = new Broadcaster<{foo: string}>();

// some stuff

notifications.broadcastMessage({
  foo: 'bar'
})
 