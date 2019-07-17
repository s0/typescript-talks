import { notifications } from '../../../model/notifications/model';

notifications.addListener(m => {
  console.log(m.foo);
})
