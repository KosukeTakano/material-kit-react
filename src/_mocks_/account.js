// ----------------------------------------------------------------------
import { auth } from '../firebase';

const user = auth.currentUser;

const account = {
  displayName: user.displayName,
  email: user.email,
  photoURL: '/static/mock-images/avatars/avatar_default.jpg'
};

export default account;
