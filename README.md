# All-In-One iOS Module (`LoganMai/dnsgold`)

Bộ cấu hình và script dành cho **Shadowrocket / Surge** đã được giải mã, làm sạch, xử lý xung đột và tối ưu hóa hiệu năng.

## Link cài đặt trực tiếp trên iOS

* **File Cấu hình (`.conf` - Dùng trong tab Cấu hình của Shadowrocket)**:
  ```text
  https://raw.githubusercontent.com/LoganMai/dnsgold/refs/heads/main/All_In_One.conf
  ```
* **File Module (`.sgmodule` - Dùng trong tab Mô-đun của Shadowrocket / Surge)**:
  ```text
  https://raw.githubusercontent.com/LoganMai/dnsgold/refs/heads/main/All_In_One.sgmodule
  ```
* **Hồ sơ DNS giữ Locket Gold (`LocketGold.mobileconfig` - Mở bằng Safari để cài cấu hình DNS)**:
  ```text
  https://raw.githubusercontent.com/LoganMai/dnsgold/refs/heads/main/LocketGold.mobileconfig
  ```

## Cấu trúc thư mục
- `All_In_One.conf`: File cấu hình đầy đủ cho Shadowrocket.
- `All_In_One.sgmodule`: File Module mở rộng cho Shadowrocket / Surge.
- `LocketGold.mobileconfig`: Hồ sơ DNS-over-HTTPS (NextDNS) chặn thu hồi Locket Gold & các ứng dụng RevenueCat.
- `js/`: Toàn bộ các tệp JavaScript xử lý dữ liệu đã được giải mã và bọc chống treo mạng (`try...catch`).
- `assets/img/shadowrocket.webp`: Icon hiển thị của Module.

## Hướng dẫn cài đặt trên iPhone (Shadowrocket)
1. Mở **Shadowrocket** -> **Cài đặt (Settings)** -> **Chứng chỉ (Certificate)** -> **Tạo chứng chỉ CA mới (Generate New CA)** -> Cài đặt hồ sơ và bật tin cậy chứng chỉ gốc trong **Cài đặt chung -> Giới thiệu -> Cài đặt tin cậy chứng chỉ** của iOS.
2. Dán một trong hai đường dẫn `.conf` hoặc `.sgmodule` ở trên vào Shadowrocket và bật kết nối.
