let cacNut = document.querySelectorAll("nav button");
let tieuDe = ["Bài tập HTML cơ bản", "Bài tập JavaScript", "Các đối tượng trong JavaScript", "CSS và bố cục hiện đại"];
let noiDung = ["Sử dụng thẻ ngữ nghĩa để tạo trang HTML rõ ràng.", "Xử lý sự kiện, cập nhật nội dung trang và kiểm tra biểu mẫu.", "Sử dụng Date để in lịch và xây dựng đồng hồ số.", "Tạo bố cục responsive bằng Grid, Flexbox và media query."];

for (let i = 0; i < cacNut.length; i++) {
  cacNut[i].addEventListener("click", function () {
    document.getElementById("topic").textContent = tieuDe[i];
    document.getElementById("lesson").textContent = noiDung[i];
    for (let j = 0; j < cacNut.length; j++) {
      cacNut[j].setAttribute("aria-pressed", i === j);
    }
  });
}
