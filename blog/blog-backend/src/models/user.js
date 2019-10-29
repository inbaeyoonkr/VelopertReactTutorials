import mongoose, { Schema } from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const UserSchema = new Schema({
  username: String,
  hashedPassword: String
});

// 인스턴스 메서드 만들기
// setPassword
UserSchema.methods.setPassword = async function(password) {
  const hash = await bcrypt.hash(password, 10);
  this.hashedPassword = hash;
};
// checkPassword
UserSchema.methods.checkPassword = async function(password) {
  const result = await bcrypt.compare(password, this.hashedPassword);
  return result; // true / false
};
// serialize : 응답 데이터에 hashedPassword 필드 지움
UserSchema.methods.serialize = async function() {
  const data = this.toJSON();
  delete data.hashedPassword;
  return data;
};
// generateToken
UserSchema.methods.generateToken = function() {
  const token = jwt.sign(
    // 첫 번쨰 파라미터에는 토큰 안에 집어넣고 싶은 데이터를 넣는다.
    {
      _id: this.id,
      username: this.username
    },
    process.env.JWT_SECRET, // 두 번째 파라미터에는 JWT 암호를 넣는다.
    {
      expiresIn: '7d' // 7일 동안 유효함
    }
  );
  return token;
};

// 스태틱 메서드 만들기
UserSchema.statics.findByUsername = function(username) {
  return this.findOne({ username });
};

const User = mongoose.model('User', UserSchema);
export default User;
