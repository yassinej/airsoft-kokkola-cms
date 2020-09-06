import React from "react";

import Layout from "../../components/Layout";
import BlogRoll from "../../components/BlogRoll";

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div
          className="half-width-image-container margin-top-0"
          style={{
            backgroundImage: `url('/img/kentta.jpg')`,
          }}
        >
          <h1
            className="has-text-weight-bold is-size-1 has-background-black"
            style={{
              color: "white",
              padding: "1rem",
            }}
          >
            Latest Stories
          </h1>
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <BlogRoll />
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
