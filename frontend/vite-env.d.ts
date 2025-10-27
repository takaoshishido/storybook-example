/// <reference types="vite/client" />
interface ViteTypeOptions {
  // ImportMetaEnv の型を厳密にし、不明なキーを許可しないようにする。
  strictImportMetaEnv: unknown;
}

interface ImportMetaEnv {
  // 設定したい環境変数の型定義をここに追加できる
  // 先頭に VITE_ を付ける必要がある。
  // 以下は例として、VITE_EXAMPLE_API_URL という環境変数を定義している。
  readonly VITE_EXAMPLE_API_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
