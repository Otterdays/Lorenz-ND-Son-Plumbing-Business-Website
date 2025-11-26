import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import type { ReactNode } from "react";
import { Helmet } from "react-helmet";

type SeoProps = {
  title?: string;
  description?: string;
  children?: ReactNode;
};

export const SEO = ({ title, description, children }: SeoProps) => {
  const data = useStaticQuery(graphql`
    query SiteMetadataQuery {
      site {
        siteMetadata {
          title
          description
          siteUrl
        }
      }
    }
  `);

  const defaults =
    data?.site?.siteMetadata ?? {
      title: "Lorenz & Son Plumbing",
      description:
        "Full-service residential and commercial plumbing experts proudly serving the Greater Chicago area with 24/7 emergency response.",
      siteUrl: "https://staging.lorenzandson.com"
    };
  const seo = {
    title: title ? `${title} • ${defaults.title}` : defaults.title,
    description: description ?? defaults.description,
    url: defaults.siteUrl
  };

  return (
    <Helmet>
      <html lang="en" />
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      {children}
    </Helmet>
  );
};

export default SEO;

