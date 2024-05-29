import { uploadPhoto, createUser } from './utils';

export default async function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()]).then((all) => {
    console.log(`${all[0].body} ${all[1].firstName} ${all[1].lastName}`);
  }).catch(() => console.log('Signup system offline'));
}
