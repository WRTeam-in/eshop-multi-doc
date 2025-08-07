// File: src/pages/index.js
import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import '../css/custom.css';

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={`${siteConfig.title} - Buy Everything!`}
      description="eShop platform homepage"
    >
      <header className="hero hero--primary heroBanner">
        <div className="centered-content">
          <h1 className="hero__title">eShop Multi Vendor Documentation</h1>
          <p className="hero__subtitle">
            Complete guide to setting up, customizing, and deploying the eShop Multi Vendor platform for both Admin Panel and mobile apps.
          </p>
          <div className="buttons">
            <Link className="button button--primary button--lg" to="/docs/backend/installation">
              Get Started
            </Link>
            {/* <Link className="button button--secondary button--lg" to="/docs/flutter">
              Flutter Application
            </Link> */}
          </div>
          <section className="features">
            <div className="feature">
              <h2 className="feature__title">Admin Panel</h2>
              <p className="feature__description">
                Complete admin dashboard features:
                • Vendor management
                • Order processing
                • Product management
                • Analytics dashboard
                • User management
              </p>
              <div className="feature__links">
                <Link to="/docs/backend/installation">View Admin Guide →</Link>
              </div>
            </div>
            <div className="feature">
              <h2 className="feature__title">Mobile Application</h2>
              <p className="feature__description">
                Mobile app features and setup:
                • Customer app features
                • Vendor app features
                • Push notifications
                • Offline capabilities
                • Performance optimization
              </p>
              <div className="feature__links">
                <Link to="/docs/flutter/flutter-required-software">View Mobile Guide →</Link>
              </div>
            </div>
            {/* <div className="feature">
              <h2 className="feature__title">Features</h2>
              <p className="feature__description">
                Core platform features:
                • Multi-vendor marketplace
                • Real-time order tracking
                • Advanced search & filters
                • Rating & review system
                • Chat system
              </p>
              <div className="feature__links">
                <Link to="/docs/features">View Features →</Link>
              </div>
            </div> */}
            <div className="feature">
              <h2 className="feature__title">Changelog</h2>
              <p className="feature__description">
                Latest updates and changes:
                • Version history
                • New features
                • Bug fixes
                • Performance improvements
                • Security updates
              </p>
              <div className="feature__links">
                <Link to="/docs/changelog">View Changelog →</Link>
              </div>
            </div>
          </section>
        </div>
        <div className="copyright">
          Copyright © 2025 eShop Multi Vendor.
        </div>
      </header>
    </Layout>
  );
}
