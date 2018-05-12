import nProgress from "nprogress";
import Router from "next/router";

export default function configureProgressBar() {
  Router.onRouteChangeStart = () => nProgress.start();
  Router.onRouteChangeError = () => nProgress.done();
  Router.onRouteChangeComplete = () => nProgress.done();
}
