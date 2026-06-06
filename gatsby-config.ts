import type { GatsbyConfig } from "gatsby";
import path from "path";

const config: GatsbyConfig = {
  siteMetadata: {
    title: "Lorenz & Son Plumbing",
    description:
      "Full-service residential and commercial plumbing experts proudly serving the Greater Chicago area with 24/7 emergency response.",
    siteUrl: "https://staging.lorenzandson.com",
    phone: "(312) 555-0125",
    address: "415 Oak Street, Aurora, IL 60502",
    email: "dispatch@lorenzandson.com",
    metrics: {
      emergencyCtaCtr: "15%+",
      formCompletion: "8%+",
      mobileBounce: "<40%"
    },
    social: {
      facebook: "https://facebook.com/lorenzandsonplumbing",
      linkedin: "https://linkedin.com/company/lorenzandsonplumbing"
    }
  },
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-image",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Lorenz & Son Plumbing",
        short_name: "Lorenz & Son",
        start_url: "/",
        background_color: "#F9F4EA",
        theme_color: "#0B1E3F",
        display: "standalone",
        icon: "static/logo.jpg"
      }
    },
    "gatsby-plugin-offline",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: path.resolve(process.cwd(), "static")
      }
    }
  ]
};

export default config;

