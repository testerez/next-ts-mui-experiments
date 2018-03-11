declare module 'jss-preset-default';
declare module 'jss';

declare namespace NodeJS {
  export interface Global {
    __INIT_MATERIAL_UI__: any;
  }
  export interface Process {
    browser: boolean;
  }
}
