import { notifications } from './model';

notifications.addListener(m => {
  console.log(m.foo);
})
