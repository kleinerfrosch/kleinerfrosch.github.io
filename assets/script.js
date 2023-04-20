let nav = document.querySelector("#nav_area")
let btn = document.querySelector(".toggle_btn")
let mask = document.querySelector("#mask")

btn.onclick = () => {
    nav.classList.toggle("open");
}

mask.onclick  = () => {
    nav.classList.toggle("open");
}

// ナビゲーションのリンク要素にクリックイベントを追加
var navLinks = document.querySelectorAll('nav a');
for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener('click', function() {
    // ナビゲーション要素からopenクラスを削除
    nav.classList.remove('open');
  });
}

