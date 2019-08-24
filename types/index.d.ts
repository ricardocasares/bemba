declare module 'next-redux-saga' {
  const withSagas: (x: any) => any;
  export default withSagas;
}

declare module 'slug' {
  export type Slug = (s: string) => string;
  const slug: Slug;
  export default slug;
}

interface Window {
  readonly __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
}

declare module 'langs' {
  export type Language = {
    name: string;
  };

  export class Langs {
    where(k: string, lang: string): Language;
  }

  const lang: Langs;

  export default lang;
}
