/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "package-lock.json",
    "revision": "7174eb93b2ddf6ff61c38ffb37f4e2eb"
  },
  {
    "url": "package.json",
    "revision": "16684fc231b2016a15df3e72eeba68a2"
  },
  {
    "url": "public/favicon.ico",
    "revision": "c92b85a5b907c70211f4ec25e29a8c4a"
  },
  {
    "url": "public/index.html",
    "revision": "65afa122a3a29100bf1fe70b53a7b2f0"
  },
  {
    "url": "public/logo192.png",
    "revision": "33dbdd0177549353eeeb785d02c294af"
  },
  {
    "url": "public/logo512.png",
    "revision": "917515db74ea8d1aee6a246cfbcc0b45"
  },
  {
    "url": "public/manifest.json",
    "revision": "197a58822bbfeb45c1dfc668e9d6fe26"
  },
  {
    "url": "public/robots.txt",
    "revision": "3ad0652bd17ff826a31fa29366021cfd"
  },
  {
    "url": "README.md",
    "revision": "ec5e351d35d9ca34d77f43572929e6b3"
  },
  {
    "url": "src/App.css",
    "revision": "00b9bb9d8170f95c4159499f086e8c15"
  },
  {
    "url": "src/App.js",
    "revision": "9bc087d4e1b03d615bdfb62863ab94b7"
  },
  {
    "url": "src/App.test.js",
    "revision": "076aa265faa2c720d7c3339398e14e1d"
  },
  {
    "url": "src/index.css",
    "revision": "ecc6b93d69838d171cad9fc5ad62496f"
  },
  {
    "url": "src/index.js",
    "revision": "427cf94d0164c279d0e8bcc9b484bfcf"
  },
  {
    "url": "src/serviceWorker.js",
    "revision": "5c29580e10e1026c45f93e83970ee6f9"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
