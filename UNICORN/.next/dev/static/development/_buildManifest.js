self.__BUILD_MANIFEST = {
  "/": [
    "static/chunks/pages/index.js"
  ],
  "/404": [
    "static/chunks/pages/404.js"
  ],
  "__rewrites": {
    "afterFiles": [
      {
        "source": "/sitemap.xml",
        "destination": "/api/sitemap"
      }
    ],
    "beforeFiles": [],
    "fallback": []
  },
  "sortedPages": [
    "/",
    "/404",
    "/_app",
    "/_error",
    "/about-us",
    "/advertise-with-us",
    "/api/feed",
    "/api/sitemap",
    "/blogs",
    "/category/video-interviews",
    "/category/[slug]",
    "/coming-soon",
    "/contact",
    "/guest-post",
    "/industries",
    "/industries/[slug]",
    "/industry-post/[slug]",
    "/magazine/[slug]",
    "/magazines",
    "/post/[slug]",
    "/video/[slug]"
  ]
};self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB()