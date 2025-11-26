import type { GatsbyNode } from "gatsby";

export const createSchemaCustomization: GatsbyNode["createSchemaCustomization"] = ({
  actions
}) => {
  actions.createTypes(`
    type SiteSiteMetadata {
      title: String
      description: String
      siteUrl: String
      phone: String
      address: String
      email: String
      metrics: SiteMetadataMetrics
      social: SiteMetadataSocial
    }

    type SiteMetadataMetrics {
      emergencyCtaCtr: String
      formCompletion: String
      mobileBounce: String
    }

    type SiteMetadataSocial {
      facebook: String
      linkedin: String
    }
  `);
};

