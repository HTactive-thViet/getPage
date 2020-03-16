# Yêu cầu
- Viết chương trình chạy bằng nodejs để đọc n page từ các link nằm trong links.json (link là các trang nội dung được chia theo page, mình mới demo 1 link rồi, các bạn tự bỏ thêm vào 2,3 link nữa)
- và lưu nội dung vào thư mục theo cấu trúc ngày/link/page.html (VD 12_3_2020/viblo.asia/page2.html)
- số n được lấy từ terminal
  VD: node script.js 4 -> sẽ lấy 4 page đầu tiên của mỗi link
  
# Gợi ý
- Tìm hiểu cách sử dụng module fileSystem
- Cách cài và sử dụng module request hoặc node-fetch từ npm
- Cách đọc args -> học cách search google :))

# Chú ý:
- nên làm, commit và push code từng phần hơn là làm 1 lần cho xong
- nên refactor lại thành nhiều hàm util rồi tách module ra
