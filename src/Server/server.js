const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const bcrypt = require("bcryptjs");

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// Kết nối MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("✅ Đã kết nối MongoDB"))
.catch(err => console.error("❌ Lỗi kết nối MongoDB:", err));

// Định nghĩa schema người dùng
const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  username: { type: String, unique: true },
  email: { type: String, unique: true },
  password: String // sẽ lưu bản hash
});

const User = mongoose.model("User", userSchema);

// API đăng ký
app.post("/api/register", async (req, res) => {
  const { firstName, lastName, username, email, password } = req.body;

  try {
    // Kiểm tra email hoặc username đã tồn tại
    const existing = await User.findOne({ $or: [{ email }, { username }] });
    if (existing) {
      return res.json({ success: false, message: "Email hoặc tên đăng nhập đã tồn tại" });
    }

    // Hash mật khẩu
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      firstName,
      lastName,
      username,
      email,
      password: hashedPassword
    });

    await user.save();

    // Trả về thông tin người dùng trừ password
    const { password: _, ...userSafe } = user.toObject();

    return res.json({ success: true, user: userSafe });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: "Lỗi máy chủ" });
  }
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`🚀 Server chạy tại http://localhost:${PORT}`));
