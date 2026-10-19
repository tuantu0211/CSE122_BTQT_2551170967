let danhSach = document.getElementById("tasks");
let oNhap = document.getElementById("task");
let bieuMau = document.querySelector("form");

function demCongViec() {
  let soViec = danhSach.querySelectorAll('input:not(:checked)').length;
  document.getElementById("count").textContent = "Còn " + soViec + " việc chưa hoàn thành";
}

function themCongViec(noiDung, hoanThanh) {
  let dong = document.createElement("li");
  let nhan = document.createElement("label");
  let oChon = document.createElement("input");
  let chu = document.createElement("span");
  let nutXoa = document.createElement("button");
  oChon.type = "checkbox";
  oChon.checked = hoanThanh;
  chu.textContent = noiDung;
  nutXoa.textContent = "Xoá";
  nutXoa.setAttribute("aria-label", "Xoá " + noiDung);
  if (hoanThanh) dong.classList.add("done");
  nhan.appendChild(oChon);
  nhan.appendChild(chu);
  dong.appendChild(nhan);
  dong.appendChild(nutXoa);
  danhSach.appendChild(dong);
  oChon.addEventListener("change", function () {
    dong.classList.toggle("done", oChon.checked);
    demCongViec();
  });
  nutXoa.addEventListener("click", function () {
    dong.remove();
    demCongViec();
  });
  demCongViec();
}

bieuMau.addEventListener("submit", function (event) {
  event.preventDefault();
  let noiDung = oNhap.value.trim();
  if (noiDung === "") return;
  themCongViec(noiDung, false);
  oNhap.value = "";
  oNhap.focus();
});

themCongViec("Đọc chương HTML5 cơ bản", true);
themCongViec("Làm bài tập CSS Grid", false);
themCongViec("Ôn tập JavaScript", false);
