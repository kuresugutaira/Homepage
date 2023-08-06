// numOfDigitsの桁数に合わせてvalをゼロパディングする
// ZeroPadding(28, 4) -> "0028"
export function ZeroPadding(val: number, numOfDigits: number): string {
  return val.toString().padStart(numOfDigits, '0');
}

// DBからもってきたDateの情報をyyyy-MM-ddの形にする
export function SimplifyDate(date_str: string): string {
  const date = new Date(date_str);
  return [ZeroPadding(date.getFullYear(), 4), ZeroPadding(date.getMonth() + 1, 2), ZeroPadding(date.getDate(), 2)].join(
    '-',
  );
}

// 画像のファイル名からその画像にアクセスするためのパスを返す
export function ImageFileNameToURL(imageFileName: string): string {
  return `/images/${imageFileName}`;
}
