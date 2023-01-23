/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  ignoredRouteFiles: ["**/.*"],
  // appDirectory: "app",
  // assetsBuildDirectory: "public/build",
  serverDependenciesToBundle:['ui'],
  watchPaths: ['../../packages/ui']  // serverBuildPath: "build/index.js",
  // publicPath: "/build/",
};
