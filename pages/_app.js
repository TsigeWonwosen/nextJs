import React from "react";
import App from "next/app";
import NavBar from "../components/NavBar";
import "../css/app.css";
import "../css/navBar.css";

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <NavBar />
        <Component {...pageProps} />
      </>
    );
  }
}

export default MyApp;
