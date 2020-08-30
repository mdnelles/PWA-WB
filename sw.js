if (!self.define) {
   const e = (e) => {
         "require" !== e && (e += ".js");
         let r = Promise.resolve();
         return (
            i[e] ||
               (r = new Promise(async (r) => {
                  if ("document" in self) {
                     const i = document.createElement("script");
                     (i.src = e), document.head.appendChild(i), (i.onload = r);
                  } else importScripts(e), r();
               })),
            r.then(() => {
               if (!i[e])
                  throw new Error(`Module ${e} didn’t register its module`);
               return i[e];
            })
         );
      },
      r = (r, i) => {
         Promise.all(r.map(e)).then((e) => i(1 === e.length ? e[0] : e));
      },
      i = { require: Promise.resolve(r) };
   self.define = (r, s, c) => {
      i[r] ||
         (i[r] = Promise.resolve().then(() => {
            let i = {};
            const n = { uri: location.origin + r.slice(1) };
            return Promise.all(
               s.map((r) => {
                  switch (r) {
                     case "exports":
                        return i;
                     case "module":
                        return n;
                     default:
                        return e(r);
                  }
               })
            ).then((e) => {
               const r = c(...e);
               return i.default || (i.default = r), i;
            });
         }));
   };
}
define("./sw.js", ["./workbox-8b4b545e"], function (e) {
   "use strict";
   self.addEventListener("message", (e) => {
      e.data && "SKIP_WAITING" === e.data.type && self.skipWaiting();
   }),
      e.precacheAndRoute(
         [
            { url: "app.js", revision: "6f16aa4e0a1e2ccb7725fb6e872caccd" },
            {
               url: "css/styles.css",
               revision: "68b329da9893e34099c7d8ad5cb9c940",
            },
            {
               url: "favicon.ico",
               revision: "6ec893cfe5988632cc1d411bd0caf8fc",
            },
            {
               url: "img/fav.png",
               revision: "6ec893cfe5988632cc1d411bd0caf8fc",
            },
            {
               url: "img/favw.png",
               revision: "0b651353dd705723e6bfd15f642c343d",
            },
            {
               url: "img/favw512.png",
               revision: "3defca7014326e8620a91a05928ae22c",
            },
            {
               url: "img/loading.svg",
               revision: "a75903f6d108d77173334b70a3a9c9a7",
            },
            { url: "index.html", revision: "f7f2bca818fbbbf7fe8d149952878a31" },
            {
               url: "js/scripts.js",
               revision: "d41d8cd98f00b204e9800998ecf8427e",
            },
            {
               url: "offline.html",
               revision: "16e4d4abc88105bedf5f3fc9e60e7150",
            },
            {
               url: "package-lock.json",
               revision: "c40ae04769ab65bd606ad11375767fc3",
            },
            {
               url: "package.json",
               revision: "fcb9f310ee699d1da1b396a2b5e9fc32",
            },
         ],
         {}
      );
});
//# sourceMappingURL=sw.js.map
