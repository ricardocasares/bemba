declare module "next-redux-saga" {
  const withSagas: (x: any) => any;
  export default withSagas;
}

interface Window {
  readonly __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
}
