🔐 Secure Password Generator
ブラウザの window.crypto.getRandomValues() を使用して、暗号学的に安全なパスワードを生成するシンプルな関数です。
Math.random() を使った一般的な実装よりも安全で、実用的なパスワード生成に適しています。

✨ Features
暗号学的に安全な乱数を使用

任意の長さのパスワードを生成

英小文字・英大文字・数字・記号を含む

依存ライブラリなし、ブラウザ標準 API のみで動作

シンプルで読みやすいコード

📦 Usage
js
const generatePassword = (length = 16) => {
  const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
  const randomValues = new Uint32Array(length);
  window.crypto.getRandomValues(randomValues);

  return Array.from(randomValues)
    .map((x) => charset[x % charset.length])
    .join('');
};

console.log(generatePassword(20)); // 20桁のパスワードを生成
🧠 How It Works
1. 文字セットの定義
パスワードに使用する文字をまとめた文字列を用意します。

2. 暗号学的に安全な乱数を生成
Uint32Array に指定した長さ分の乱数を生成し、
window.crypto.getRandomValues() によって OS レベルの安全な乱数を取得します。

3. 乱数を文字に変換
各乱数を charset.length で割った余りを使って文字セットから1文字を選び、
すべて結合してパスワード文字列を作成します。

⚠️ Notes
% 演算子を使うため、理論上わずかな偏りはありますが、実用上は問題ありません

「必ず数字を含める」などのポリシーが必要な場合は追加ロジックが必要です

Node.js で使う場合は crypto.randomBytes() を使う別実装が必要です
