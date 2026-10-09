# 🚀 Đấu Trường Tin Học (CyberBrain Arena)

**Đấu Trường Tin Học** là một nền tảng trò chơi trắc nghiệm tương tác trực tiếp (Kahoot/Quizizz style) dành cho lớp học, được thiết kế đặc biệt để ôn tập môn **Tin học 10 (Bộ sách Kết nối tri thức)**. 

Trò chơi kết hợp giữa cơ chế trả lời câu hỏi với yếu tố **Sinh tồn (Battle Royale)**, **Combo nhịp độ** và **Gacha (Vòng lặp ngẫu nhiên)** nhằm mang lại trải nghiệm học tập bùng nổ, gay cấn và cực kỳ công bằng cho tất cả học sinh.

---

## ✨ Tính năng nổi bật

*   🎨 **Giao diện "Bento-grid" Hiện đại:** Tươi sáng, đáng yêu với các nút bấm 3D, hiệu ứng mượt mà (sử dụng Tailwind CSS). Tối ưu hóa hiển thị cực tốt trên màn hình máy chiếu (Projector).
*   ⚔️ **Chế độ Sinh tồn (Survival):** Mỗi đội bắt đầu với 5 mạng (❤️). Trả lời sai mất 1 mạng. Hết mạng sẽ bị loại khỏi cuộc chơi.
*   🔥 **Hệ thống Combo (Streak):** 
    *   Đúng 3 câu liên tiếp: Thưởng +5% điểm.
    *   Đúng 5 câu liên tiếp: Thưởng +10% điểm.
    *   Đúng 10 câu liên tiếp: Thưởng +15% điểm.
*   🃏 **Thuật toán "Chia bài" Cân bằng (Fair-play Deck Dealing):** Game tự động xáo trộn và chia đều câu hỏi cho các đội. Đảm bảo mọi đội đều nhận được số lượng câu Dễ, Trung bình, Khó và **chắc chắn đối mặt với ít nhất 1 câu Siêu Khó (Boss)**. Xáo trộn luôn cả vị trí 4 đáp án A, B, C, D để chống nhắc bài.
*   🎁 **Vòng Boss Đột biến:** Câu hỏi Siêu Khó sẽ ngẫu nhiên đính kèm 1 trong 5 hiệu ứng đặc biệt:
    *   🌟 **Lucky:** Trả lời đúng nhận thêm 50đ.
    *   💣 **Bomb:** Trả lời sai bị trừ 20đ.
    *   ⚡ **Speed:** Thời gian bị ép xuống còn 10 giây.
    *   💎 **Double:** Nhân đôi số điểm câu hỏi.
    *   💖 **Health:** Trả lời đúng được hồi 1 mạng.
*   🛟 **4 Quyền Trợ Giúp (Lifelines):** Mỗi đội có 1 lần sử dụng: *50/50, Thêm 15s, Bỏ qua câu hỏi, Hỏi ý kiến lớp*.
*   🏆 **Vinh danh bùng nổ (Podium):** Hiệu ứng xếp hạng bục 3-2-1 kết hợp bắn pháo hoa giấy (Confetti) y hệt Kahoot.

---

## 📂 Cấu trúc thư mục

Dự án này chạy hoàn toàn độc lập (Offline Local) trên trình duyệt, không cần cài đặt Node.js hay Database.

```text
dau-truong-tin-hoc/
 │
 ├── index.html       # File giao diện chính
 ├── style.css        # Hiệu ứng Animation và CSS tùy chỉnh
 ├── script.js        # Logic trò chơi (Bộ câu hỏi, Timer, Tính điểm)
 └── README.md        # Tài liệu hướng dẫn
