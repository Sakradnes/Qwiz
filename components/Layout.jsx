const React = require('react');

module.exports = function Layout({ title, children }) {
  return (
    <html lang="en">
      <head>
        <title>{title}</title>
        {/* <link rel="stylesheet" href="/styles/product.css" /> */}
        <script defer src="/scripts/questionScript.js" /> 
        <script defer src="/scripts/answerScript.js" /> 
      </head>
      <body>{children}</body>
    </html>
  );
};
