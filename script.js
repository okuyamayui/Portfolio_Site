// ギャラリーセクションを取得
const gallery = document.querySelector(".gallery");

// 仮のギャラリー枠を生成する数
const placeholderCount = 8;

// 枠線のみのギャラリーを生成
for (let i = 0; i < placeholderCount; i++) {
  const placeholder = document.createElement("div"); // 枠を生成
  gallery.appendChild(placeholder); // ギャラリーセクションに追加
}

// 注目画像が設定されているかチェック
const featuredImageContainer = document.querySelector(".featured");
const featuredImageAvailable = false; // 画像がある場合はtrueに設定

if (!featuredImageAvailable) {
  // 画像がない場合、"Coming Soon" が既に表示されているため、特に追加の処理は不要
} else {
  // 画像がある場合の処理（将来的に画像を追加する場合用）
  // const img = document.createElement("img");
  // img.src = "path-to-your-featured-image.jpg"; // 実際の画像パス
  // featuredImageContainer.innerHTML = ""; // "Coming Soon" を削除
  // featuredImageContainer.appendChild(img); // 画像を追加
}
