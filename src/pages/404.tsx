import React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";
import SEO from "../components/SEO";

const NotFoundPage = () => (
  <Layout>
    <SEO title="Page Not Found" />
    <section className="flex min-h-[60vh] flex-col items-center justify-center bg-cream px-6 py-20 text-center text-slate">
      <span className="badge bg-gold text-navy">404</span>
      <h1 className="mt-6 font-heading text-5xl text-navy">Page not found.</h1>
      <p className="mt-4 max-w-xl text-lg text-slate/80">
        The page you’re looking for has moved or no longer exists. Let’s guide
        you back to reliable service.
      </p>
      <Link to="/" className="btn-primary mt-6">
        Return Home
      </Link>
    </section>
  </Layout>
);

export default NotFoundPage;

