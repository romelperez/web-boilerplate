import mongoose from 'mongoose';
import settings from 'server/settings';

if (!mongoose.connection.readyState) {
  mongoose.connect(settings.mongodb.url);
}

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  hash: {
    type: String,
    required: true,
  },
  active: Boolean,
  admin: Boolean,
});

const UserModel = mongoose.model('users', UserSchema);

export default UserModel;
