# Vietnam Office · People Site

Trang nội bộ cho nhân viên TrueCommerce Vietnam. Page tự đọc folder `events/` để build mục **Office life** — đăng event mới chỉ cần upload folder ảnh.

---

## Cách thêm 1 event mới (cho HR / admin)

Toàn bộ làm trên github.com — **không cần dev, không cần Git**.

### Bước 1: Vào repo
Mở `https://github.com/YOUR_GITHUB_USER/YOUR_GITHUB_REPO/tree/main/events`

### Bước 2: Tạo folder mới + upload ảnh
1. Click **"Add file"** → **"Upload files"**
2. **Quan trọng:** trong ô **"Add files via upload"**, gõ tên folder + slash trước khi drag ảnh, vd:
   ```
   2026-05 Happy Hour/
   ```
   Sau đó drag tất cả ảnh vào — GitHub tự cho ảnh vào folder đó.
3. Click **"Commit changes"** ở dưới.

### Bước 3: Đợi 1 phút
Page sẽ tự thấy event mới khi bạn truy cập lần sau. Để force refresh ngay:
- Mở DevTools (F12) → Application → Local Storage → xoá key bắt đầu bằng `tc-events-`
- Reload page

---

## Quy ước đặt tên folder

| Format | Year | Title |
|---|---|---|
| `2026-05 Happy Hour` | 2026 | Happy Hour |
| `2026-04 Badminton Tournament` | 2026 | Badminton Tournament |
| `2025-12 Year End Party` | 2025 | Year End Party |
| `2025-10 Vietnamese Womens Day` | 2025 | Vietnamese Womens Day |

- 4 chữ số đầu = năm → page dùng để chia tab
- 2 chữ số sau dấu `-` = tháng (dùng để sort newest-first trong cùng năm)
- Phần còn lại = title hiển thị

---

## Files trong folder event

```
2026-05 Happy Hour/
  ├── cover.jpg        ← (tuỳ chọn) thumbnail. Không có thì page dùng ảnh đầu tiên.
  ├── 01.jpg
  ├── 02.jpg
  ├── 03.jpg
  ├── 04.jpg
  └── recap.mp4        ← (tuỳ chọn) video — tile sẽ hiện icon play
```

**Quy tắc:**
- **Bao nhiêu ảnh cũng được** — không giới hạn
- Ảnh: `.jpg`, `.jpeg`, `.png`, `.webp`
- Video: `.mp4`, `.mov`, `.webm` (chỉ cần 1 file là đủ)
- Khuyến nghị resize ảnh xuống ~1600px để load nhanh

---

## Setup ban đầu (chỉ làm 1 lần)

1. **Tạo repo GitHub** (public). Vd: `truecommerce-vn/office-page`
2. Trong file `Vietnam Office Self-Services.html`, tìm dòng:
   ```js
   const GITHUB_USER   = 'YOUR_GITHUB_USER';
   const GITHUB_REPO   = 'YOUR_GITHUB_REPO';
   ```
   Đổi thành username + repo name của bạn.
3. Enable **GitHub Pages**: Repo settings → Pages → Source: `main` branch → root
4. Trong SharePoint, dùng **Embed web part** với URL: `https://YOUR_GITHUB_USER.github.io/YOUR_GITHUB_REPO/Vietnam%20Office%20Self-Services.html`

---

## Các phần tự update khác

Page tự compute mỗi lần load:
- **Next public holiday** — list ngày lễ VN ở trong file HTML, edit 1 lần/năm
- **Birthdays this week** — từ array `TEAM`
- **New joiners this month** — từ array `TEAM`

Edit list `TEAM` trong file HTML khi có nhân viên mới hoặc nghỉ.

---

## Câu hỏi?

Ping People team — hr.vn@truecommerce.com
