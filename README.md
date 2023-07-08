# TodosV2
Warming: source chỉ phục vụ mục đích học tập nên chắc chắn sẽ còn nhiều thứ không tuyệt vời như sản phẩm thương mại.  
mục đích của việc share source của tác giả là share nguồn học liệu cho người mới  
Prj sử dụng Reactjs và call Api về Spring nên khi chạy cần chạy java và npm start trong cmd để chạy code reatjs   
Db được sử dụng là mySql image của Docker nếu muốn dùng thì chạy lệnh sau:  
Vậy nên ta cần chạy lệnh sau với docker trước khi run prj:
docker run --detach --env MYSQL_ROOT_PASSWORD=vickpassword --env MYSQL_USER=todos-user --env MYSQL_PASSWORD=vicktodos --env MYSQL_DATABASE=todos --name mysql --publish 3306:3306 mysql:8-oracle
Câu lệnh này sẽ tạo một container MySQL với tên là mysql và cấu hình mật khẩu cho tài khoản root và tài khoản MySQL mới với tên todos-user. Container này sẽ có một database mới với tên là todos, được sử dụng để lưu trữ các dữ liệu liên quan đến một ứng dụng Todos. Container sẽ được kết nối với port 3306 trên máy tính hoặc server của bạn để có thể tiếp cận và quản lý các database.  

Nếu gặp lỗi Docker load do mạng có thể dùg h2-database để thực hành project này  
Sau đó, chúng ta có thể connect với navicat bằng username password trên để quản lí db hoặc dùng lệnh \connect todos-user@localhost:3306
trên mysql shell.

ĐẶC BIỆT LƯU Ý: vì prj dùng mysql container với docker nên mỗi lần chạy prj cần vào docker chạy database của prj.
Hi vọng prj trên có thể làm nguồn tài liệu cho các bạn trong quá trình học tập Spring Framework.
Trân trọng!
Phạm Hồng Hiệu
