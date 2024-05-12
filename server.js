const express = require("express");
const fs = require("fs");
const path = require("path");
const { createServer: createViteServer } = require("vite");

async function createServer() {
  const app = express();

  const vite = await createViteServer({
    server: {
      middlewareMode: "ssr", //'ssr'
    },
  });
  app.use(vite.middlewares);
  app.use("*", async (req, res) => {
    const url = req.originalUrl;
    try {
      //__dirname 当前文件所在物理路径
      let template = fs.readFileSync(
        path.resolve(__dirname, "./index.html"),
        "utf-8"
      );
      template = await vite.transformIndexHtml(url, template); 
      const { render } = await vite.ssrLoadModule("/src/entry-server.js");
      const appHtml = await render(url);
      const html = template.replace("<!---ssr-output-->", appHtml);
      res
        .status(200)
        .set({
          "content-type": "text/html",
        })
        .end(html);
    } catch (e) {
        vite.ssrFixStacktrace(e)
        console.error(e)
        res.status(500).end(e.message)
    } 
  });
  app.listen(3000);
}
//执行 node server.js
createServer();
