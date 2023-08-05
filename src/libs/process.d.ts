// 環境変数

declare namespace NodeJS {
  interface ProcessEnv {
    readonly API_KEY: string;
  }
}
