'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "b7d0c74b7b0220a4fb981a696493752a",
".git/config": "92c9c475bbf1e9afc3b7129fc4e3d39c",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "91f3e667c276c192c0fb9976e10d1ac7",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "05b4a5a46bc545889c9ef0d3ba802b7d",
".git/logs/refs/heads/master": "05b4a5a46bc545889c9ef0d3ba802b7d",
".git/logs/refs/remotes/origin/master": "ecee81d62d5fea750ab5416ee9c3697b",
".git/objects/0b/3c99801261a44d583eb69c4b020a2901357740": "ede1336cc0168361c6f7dc4db9829eca",
".git/objects/16/5da67191b73406e15fc3e6cf7cda3c195dc735": "86cfac30d97fb45bba2f4417782645d6",
".git/objects/1a/abe85a3d706d7a4931b42ccf528b00ed392541": "e206fd016a14b8c30bf486d830640df2",
".git/objects/1e/25fb4841dbfcbc6e4fa75d9417a4113ba250bc": "e91280155bc02e320c2a664e7fefc7b5",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/32/264aff570411fd22671a560a9aa916c7f58251": "c085efa9244dc5497f5d1ec80caf09f2",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/35/1463e2afb35943ec2f24995c699a27e8bb249e": "ac0b1b9d1598cae6b0bd8a002f6f9a56",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/objects/5d/15fadf1864d70c7184fca7d3efde79cdf68af5": "79a44d8578cc18e3add64aa6a97f0da0",
".git/objects/6a/63b25c7a5d7cbc7f3a4e15b50456eff8a61207": "94dfc72f7c718cad89630ced7849d815",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/76/cf105fe4b59ff0460dfd75cb39f5e5ff295667": "5e0e2388b6d678b90862e219aa79405d",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/95/c66ea35ea0b98baf0e0e034d3bdce00b965ce4": "ffde9bc0bd228c539d94a3d7aa844712",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/9b/7d4b7f75d8cddcc0c921866f570e798fc26437": "2aa03d81048be64e7333bf4c22440f0c",
".git/objects/a2/c2c501d92cade4609fbff2a20d058036a0f07d": "5799cad65f96fe00122233a5625d5041",
".git/objects/a5/3efdf92300d180241adcd14d81d15a734c4e08": "cdce04155deb291d95d5b2a8a45a186e",
".git/objects/a7/846cfefff436e2b5cdfd685a7c0ae3a4e06ac1": "26e4a2ecd47bd8a7af35ec6d1e74ca3b",
".git/objects/ad/1c6fd1e9047d6d75476979f32ec7bb91d81fa6": "7b04275564a84001da11e442ee9cc478",
".git/objects/b6/ff4edc6f43f2c3e60db1993c94e969e61e99c8": "9cfc07a7b7f1286f92cf6e4b16d0d1de",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/76c38967170fe8852bb8cd10ecb2c2ae5dc696": "bae311957fefe8d0923c26e362adf72e",
".git/objects/be/3bf4f3657e26641019167ce51bb740b3e5d06b": "5d8805c3b55b53147675bfee64040391",
".git/objects/c1/55dfca903b9e55ff576b5d2e46d86b35f9d9aa": "a600bf218b2b6cf0d3fd29b3b524f024",
".git/objects/c2/80cee1eb47ad08d2581166b689bc5d5ecae92c": "3834d1ce79f61ec7f53cf72d54c88d6d",
".git/objects/c9/c5b7d063e02b67c48bcdfa5dfb89e34691e15f": "aa34f101a9d94bb5fbd1b919f4ccb814",
".git/objects/cf/cce5a7ecc0ad2200399e2c2342325c6d6ccf5b": "48f01026e63a1c7f303b824b925f10f9",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e7/139bd43244e0e285ce5cd8a23bacc259b87279": "ffe6a3f7aff9f3c1e71c8715d441e28e",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/010cda95492006dae3638dfb01a8d0822a1e6a": "04eb9fcdf209b67f396e5ab84cb956e2",
".git/refs/heads/master": "f1b9cc3311584c77071df32aa1380e09",
".git/refs/remotes/origin/master": "f1b9cc3311584c77071df32aa1380e09",
"assets/AssetManifest.bin": "2d87f93e6b369f37e1ee3682308d6d03",
"assets/AssetManifest.bin.json": "109301b68222edd1735ca1932377e384",
"assets/AssetManifest.json": "d9bbda57a6f020fe817be6dec15c0626",
"assets/assets/2fb106ce-1ec8-4634-897a-5eb1c21f9f41%2520(1).jpg": "1b9ea27a039546361f38c2684cf886ff",
"assets/assets/47154c5e": "ba7b5d9aae996de9a1ebc14fd79f346e",
"assets/assets/549ee552-4163-430f-871e-ddd5b29ea4ea.jpg": "ba7b5d9aae996de9a1ebc14fd79f346e",
"assets/assets/6a79f83d": "ba7b5d9aae996de9a1ebc14fd79f346e",
"assets/assets/722cc4df": "1b9ea27a039546361f38c2684cf886ff",
"assets/assets/77c25417-d11e-4797-b199-55dbc447b0ee.jpg": "f2220f09a2b4a94aa24072b407708328",
"assets/assets/8f0f82ee": "1b9ea27a039546361f38c2684cf886ff",
"assets/assets/9b744bc9": "ba7b5d9aae996de9a1ebc14fd79f346e",
"assets/assets/ad800456": "ba7b5d9aae996de9a1ebc14fd79f346e",
"assets/assets/aeac0f8d": "ba7b5d9aae996de9a1ebc14fd79f346e",
"assets/assets/cd3fed65": "ba7b5d9aae996de9a1ebc14fd79f346e",
"assets/assets/cfb7283": "ba7b5d9aae996de9a1ebc14fd79f346e",
"assets/assets/d4f79e9a": "ba7b5d9aae996de9a1ebc14fd79f346e",
"assets/assets/dd21bcda": "1b9ea27a039546361f38c2684cf886ff",
"assets/assets/e911d4dd": "ba7b5d9aae996de9a1ebc14fd79f346e",
"assets/assets/f4afecac": "ba7b5d9aae996de9a1ebc14fd79f346e",
"assets/assets/HeroSectioinImage.jpg": "3b6438c9247e37a2459b72f9d3132e2b",
"assets/assets/WhatsApp%2520Image%25202024-11-18%2520at%252015.21.23.jpeg": "d79d476120e7b747983208dc05c1560e",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "52c3c7c0d83fe57cced21293282b106d",
"assets/NOTICES": "d2d6a2c2caa54493d6fc483c30062ace",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "4ffe1999632305282fecff260d80e591",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "496461092dbfefada73fc23c8f3508d9",
"/": "496461092dbfefada73fc23c8f3508d9",
"Kc50uGq80-5f1V59.mp4": "b5d67b7ab88d7dddca7a3839c0e8ee1f",
"main.dart.js": "02d81a9f130c0dd6b56aef3d8c1f2494",
"manifest.json": "484bcfaee7dda26c8934b6f0a1f7c1c1",
"robots.txt": "c4ce7554d98a26b94c6f2a87cac1db5b",
"sitemap.xml": "7eb515321e6bbe22984e04282de7e376",
"version.json": "200a3fb98b2aa2a89a6e38ea144db3e0"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
