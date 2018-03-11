declare module 'jss-preset-default';

declare namespace NodeJS {
  export interface Global {
    __INIT_MATERIAL_UI__: any;
  }
  export interface Process {
    browser: boolean;
  }
}

interface StyleProps {
  classes: { [k: string]: string };
}
