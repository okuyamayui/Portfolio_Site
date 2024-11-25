// ギャラリーセクションを取得
const gallery = document.querySelector(".gallery");

// 仮のギャラリー枠を生成する数
const placeholderCount = 8;

// 仮の画像URLリスト（画像がある場合はここに実際のパスを追加）
const galleryImages = []; // 空のままだと枠のみ表示されます

// ギャラリーを生成
if (galleryImages.length > 0) {
  // 実際の画像がある場合
  galleryImages.forEach((src) => {
    const img = document.createElement("img");
    img.src = src;
    img.alt = "ギャラリー画像";
    img.style.width = "100%";
    img.style.height = "auto";
    gallery.appendChild(img);
  });
} else {
  // 画像がない場合は枠線のみを表示
  for (let i = 0; i < placeholderCount; i++) {
    const placeholder = document.createElement("div");
    gallery.appendChild(placeholder);
  }
}
