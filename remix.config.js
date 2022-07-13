/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  ...( process.env.NODE_ENV === 'production' && {serverBuildTarget:  "netlify"}),
  ...( process.env.NODE_ENV === 'production' && {server: "./server.js"}),
  ignoredRouteFiles: ["**/.*"],
  // appDirectory: "app",
  // assetsBuildDirectory: "public/build",
  // serverBuildPath: ".netlify/functions-internal/server.js",
  // publicPath: "/build/",
};
