let bieuMau = document.querySelector("form");
function hienLoi(id, noiDung) {
  let oNhap = document.getElementById(id);
  let thongBao = document.getElementById(id + "-error");
  if (noiDung !== "") {
    oNhap.className = "invalid";
    oNhap.setAttribute("aria-invalid", "true");
    thongBao.className = "";
    thongBao.textContent = noiDung;
    return false;
  }
  oNhap.className = "valid";
  oNhap.setAttribute("aria-invalid", "false");
  thongBao.className = "valid";
  thongBao.textContent = "✓ Hợp lệ";
  return true;
}

bieuMau.addEventListener("submit", function (event) {
  event.preventDefault();
  let hoTen = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let matKhau = document.getElementById("password").value;
  let xacNhan = document.getElementById("confirm").value;
  let mauEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let loiTen = "";
  let loiEmail = "";
  let loiMatKhau = "";
  let loiXacNhan = "";
  if (hoTen === "") loiTen = "Vui lòng nhập họ tên.";
  if (!mauEmail.test(email)) loiEmail = "Email không đúng định dạng.";
  if (matKhau.length < 6) loiMatKhau = "Mật khẩu phải có ít nhất 6 ký tự.";
  if (xacNhan === "" || xacNhan !== matKhau) loiXacNhan = "Xác nhận mật khẩu chưa khớp.";
  let dungTen = hienLoi("name", loiTen);
  let dungEmail = hienLoi("email", loiEmail);
  let dungMatKhau = hienLoi("password", loiMatKhau);
  let dungXacNhan = hienLoi("confirm", loiXacNhan);
  let thongBao = document.querySelector(".status");
  thongBao.textContent = "";
  if (dungTen && dungEmail && dungMatKhau && dungXacNhan) {
    thongBao.textContent = "Thông tin hợp lệ. Biểu mẫu thực hành chưa gửi dữ liệu đến máy chủ.";
  } else {
    document.querySelector(".invalid").focus();
  }
});
