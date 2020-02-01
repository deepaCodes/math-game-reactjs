import React from "react";
import ReactDOMServer from "react-dom/server";

import App from "components/App";

export default async function serverRenderer() {
  const initialData = {
    appName: "Game",
  };

  const pageData = {
    title: `Math ${initialData.appName}`,
  };

  return Promise.resolve({
    initialData,
    initialMarkup: ReactDOMServer.renderToString(
      <App initialData={initialData} />
    ),
    pageData,
  });
}
