import Head from "next/head";
import { withRouter } from "next/router";

import seoDescriptions from "../../lib/seo";
import { SFC } from "react";

interface SeoProps {
  title?: string;
  criteria?: any;
  description?: string;
  canonical?: string;
  router?: any;
}

export const Seo: SFC<SeoProps> = ({
  title = "Radio Bemba",
  description = "Listen local radios around the world",
  criteria,
  canonical,
  router
}) => {
  // @TODO: Set as env variable
  let { BASE_URL = "https://bemba.analogic.al" } = process.env;
  let current = [BASE_URL, router.asPath].join("");

  if (canonical) {
    canonical = [BASE_URL, canonical].join("");
  }

  // @TODO: COncatenate title with different things
  if (criteria) {
    let extend = seoDescriptions[criteria.name];
    if (extend) {
      description = extend(criteria.value);
    }
  }

  return (
    <Head>
      <title>{title}</title>
      <link rel="canonical" href={canonical || current} />
      <meta name="description" content={description} />
      <meta name="twitter:site" content="@bemba" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {/* @TODO: Check if meta has to be full */}
      <meta property="og:url" content={current} />
      <meta property="og:site_name" content="Bemba Radio" />
    </Head>
  );
};

export default withRouter(Seo);
