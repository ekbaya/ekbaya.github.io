'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"main.dart.js": "9194a26374c6c0277af76760758414ad",
"version.json": "53a16540cbb3f9bc3e733ea7d7f4c2cb",
"assets/assets/jkuat-logo.png": "5d97df0a502aad1cbbb2b0c212b31235",
"assets/assets/students.png": "854cd2f90df5015e882f08106218ff9a",
"assets/assets/students-clearance-form.pdf": "d6a55086043b9e128d29363fa94a9180",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "4e20cb87b0d43808c49449ffd69b1a74",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "1f7cb220b3f5309130bd6d9ad87e0fc0",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "26f5af2d93473531f82ef5060f9c6d45",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/shaders/ink_sparkle.frag": "8bdf127fe4c1ccba3f5080c3ab98d793",
"assets/AssetManifest.json": "5d9ebd9d49be77b92b2718089d8df625",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/NOTICES": "06cd0444e46b91981bdb62162e8ed261",
"favicon.png": "a28b95716e81d73b931061ee56dad5a9",
"manifest.json": "4054d6c7d741db737c44fa425f78226e",
"index.html": "dba80defdd62b1c575a9a9fc1e92bb04",
"/": "dba80defdd62b1c575a9a9fc1e92bb04",
"icons/Icon-192.png": "3d773b3e27e514ba3d60dbd73d18f1b2",
"icons/Icon-512.png": "43ef760726c3f25d263cc7f28e840bc4",
"icons/Icon-maskable-512.png": "43ef760726c3f25d263cc7f28e840bc4",
"icons/Icon-maskable-192.png": "3d773b3e27e514ba3d60dbd73d18f1b2",
".git/hooks/applypatch-msg.sample": "4e33b997d7d5d5274c56bbf61f0c0bf9",
".git/hooks/commit-msg.sample": "89cb67435d2c1b9503e32d599d72713c",
".git/hooks/post-update.sample": "be48e56d8b9f9108aa4ecb32dd12d435",
".git/hooks/pre-applypatch.sample": "1f6a74774ee63312b4ad8a8c6ec7f2e8",
".git/hooks/pre-commit.sample": "3ba41bb5b6fe126be0c04c17ceb564ff",
".git/hooks/pre-merge-commit.sample": "f9d3ac247a941cf41ceb86048c699cfe",
".git/hooks/pre-push.sample": "a5a56d58c7133331b00b520ea5548074",
".git/hooks/pre-receive.sample": "c5e60ee055ef7b920a10b2871b1790a2",
".git/hooks/push-to-checkout.sample": "d8204d74ffd9ca215d1687eaca1e9e5b",
".git/hooks/update.sample": "edce28be0c66a0a19729dc76f8143916",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-rebase.sample": "0d4f0a0a63c6a1cbbf0a8b410b9e3c59",
".git/hooks/prepare-commit-msg.sample": "529551eb02ce07d5a84df03a8361e155",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/refs/heads/master": "c141f81db189bb223d089bd3fde0b1d0",
".git/refs/remotes/origin/master": "c141f81db189bb223d089bd3fde0b1d0",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/objects/19/5f54a3bf057f5ec97e6b7b1ec417ce2a6ee477": "ea3a59d45fff1816a5a88438cfa41a26",
".git/objects/de/035ef39c312114c67ccfd620ecd8f1e758ac7d": "18144ff32203a91e70be4b8b768fe0ce",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/de/e73c1ec4275a1a6e1eb8f240601d8c2b3d2a13": "5cf15c6494ed50991beab4f7f9d6fa9d",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/15/00e2a8383adf5e86790cba49479c360b3d49b9": "533c274ea2229e12c043524e9378dd77",
".git/objects/54/46d16ee059b89ce3cdfa8ad28cf06a699be6d0": "4f3b774aa1b15861cad13f2a49fa1260",
".git/objects/24/2cc951e3788a095bb41ef9d4c039d7e98d84de": "d244af6eeec8a476ba4050fe23efd253",
".git/objects/aa/95f8f64d233469cad0a0bbe610bfca1062ebae": "944d77530eb266afa2c25c8cb0acc692",
".git/objects/aa/4e11a569dc9d28bf8a34226675372a699b7ea5": "fed7ffa2d15ed16a9a4409d68f6aaa1f",
".git/objects/aa/1e782d07db099ff4755fe40d221020fa1791ee": "ebf95a4d556da99521129ecc521962c8",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/71/28e318c71a3c890191035a2e2d3d11a846965f": "e571130db50f4894bffae848cfa43bbf",
".git/objects/63/de0ca6b54aa744e08e67fb650a28090bd37981": "b4d32faf892a7431397f40ede6a1eb6f",
".git/objects/63/952ceb1ddb985e7a5802c227af4e8a74721258": "20677f71842562e3d2f67205e656dbc5",
".git/objects/f8/9fc9f854f31dfa1481d31d1b19c25816da4947": "6e21873c815076cd177381687146928c",
".git/objects/c1/74957211d7575d7d8fbc1b642ab3beefd9a9e1": "37f18d5c5c7305d73512a07a4c30e6e2",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/3f/7b4bc6defcef7dc09d4be0dcee521a8acf5ff5": "1264f2b2a7e1ead2f8f8a471be49042c",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/76/e8550520c9290fff94a382ae23f333920acd7d": "8741f7c0655015a881e506f0a4da132e",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/2b/e02711a8a743889e07141e4f9c2a659cde87ea": "3761864e8b9b22b6ac70f6d77c66cca0",
".git/objects/39/560ec30de49abcb7c276a67fe2e0ea8c4033a8": "6721f4ede92e68b0791c424f2e8927ea",
".git/objects/bc/7984baae573556d2f2698808eed4cb304ad9ec": "dc0f9899967dd2218604c20c7000a4af",
".git/objects/10/a4b0e79dbc59f0fe5fe5ddc65141f9c1fe1c04": "93274c83c64749ac176b43b332c2fa2e",
".git/objects/c3/30af32d71b8c92ab6338be4eeb994820175465": "4aafa49d22085a76c05d0a4a90de0e90",
".git/objects/78/f3fa56c84218bfe14fcd6a66aa8f46bf7c5816": "0b0d0ef03a1099882b5af133063911e0",
".git/objects/48/94c895966ab6dbb6696bbba4d62e745225a0b8": "71b6ac1240ed9463306d50447a0f8553",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/cd/6dcba2764236c6b1df551401271a2fe7de01e1": "1321bf2b5d98243e80ccedbe84c968af",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/47/818cc125f4b61ab58210edd3c06f8c437f90ba": "ce1161c7701ab241f737dc9b927be76d",
".git/objects/c4/dd984f88f7ebc199bb524f8a453f17e278c5d9": "384c234614fc2c5f1ca411c66341716c",
".git/objects/9d/2ad795459f75fc1b596cb086dd33726c6ff56e": "9aa1a5c07869866463f8d0b9ae522f61",
".git/objects/9d/fcc8fb588ce7684d69a002f658d4e15af25320": "8b8b2096948b769274e16b7753a58486",
".git/objects/22/db43513aadad04853713464e6555d93d8d46bb": "fd728bab3be1a1cbc0a235222861321c",
".git/objects/b4/e18b5bdd97eb68ff2c3aa2147f8da32da63e77": "ffe0a43fe091ec1d09f33fe17270bdf0",
".git/objects/9b/3f05b551729083caad4a1d6c4ed3f6c8007f4e": "c0427a068a360ce22bf3f39bed9e19a1",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/d6/6f6ebfce3b771e00b3008a9ef9540a1f2f3547": "bed7e734926742da754fac47885b2ff9",
".git/objects/ab/29dd865e93c76a28987bda7e286f23d2c8f40e": "ca9ad8074f5d9a24f2428c4b219b3875",
".git/objects/42/af38bd4a315f0c64a4ff8bc51da5d3a7a23d02": "b66e00f3477486c9579283a39a0a24ce",
".git/objects/1f/77d3c5972ba2364d9e0a136ef81e2dfcf05b31": "afc0ebe89430eb9c38809aaf33d5b786",
".git/objects/5d/24f5ad412850e2dd4b8ab6ed9dd1bc300af241": "d1db0ddd75835b9fc3e03fc5b8ef366b",
".git/objects/7d/e1eeb154e2942c2d76185cba8a3a6902256843": "12209134a58190ef19ae1db268ce6566",
".git/objects/0c/c471e63b56459dd79eaf44ac5ee2ab38a3329e": "b147a4d660a20b09b1c15ead3ae62b32",
".git/objects/0c/013d4cb8fe23c9182f5f288a881e89dcda065e": "acdf1a6c7364ade77fce10297f3456f7",
".git/objects/6e/dc6966ea4567df6cc0178c7003e72331468d39": "a9056867d7bedd39dfc4a3fbee21e5e2",
".git/objects/2e/c5ab3fe2c5aed31d553db3a9d88da08a3d66dd": "7ea0b9c091f408d970d9369bdf835912",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/ac/dff003233d90b91aebe67dcd38d5049aacda7b": "6fea100e06e06948e49143e92be1a8dd",
".git/objects/ac/72156f65beefee42d89582fd94d7617990da2f": "9d6d955a8ab764600dfa845692692e89",
".git/objects/3c/b3b53a24ee4712b8463133dca203ddd72fb43b": "c3066eae2c84f5465b93f0624f5ecfa6",
".git/objects/11/ebe0abf0e894a859e0fb58e7eae195cda45183": "a448adc1da0456db701dc50d773d932a",
".git/objects/74/135c9422f34099ce38a98dbc02c5434b7370dc": "a32e5c60ab4b7351813ac0123af7c47b",
".git/objects/57/1605c7ff2817f97bdb51afba4e1d1de4dca91e": "d007f3708d2b53b9273edc49e61a559f",
".git/objects/d5/6b659b19fa8cc8ea9a1c7f817eae0996988f2d": "7ecf8249003e849a888440456c90685a",
".git/objects/20/424b73eb6d0047d446acc3b85505be5c45a6c8": "051f0430e984185a291dfc8dc67c8075",
".git/objects/d4/7193975852f2a8c02df2f560fab55946ec82c5": "90ff24e6d9477726ba071f45f9b9db14",
".git/objects/d4/af512689d45abdf3d0d11d539cd029c3ee0688": "1a8c16ae871ffd46b364c6db4e59ac1c",
".git/objects/37/fcd20d17cc2e903eb3c91354254f242353aed7": "33e5571f08b76cd94a01d6a2b3ead138",
".git/objects/55/31968b94c754251bb7244f0315fd818e4aeeaa": "189cea7a81f13ee0a264ec8ea6ac222a",
".git/objects/f2/0725500aa09999f2e8c34e6d95f26da66e65b3": "edbe5d40afac39cecae3e4404cf769cb",
".git/objects/02/554e52d80e217ad5aacd2c4906d9d85364f78e": "0defc702f55ab173d60a5723ffe8e7a8",
".git/objects/70/10fcee0542640a95ba9592930b02d62f5ac030": "8b0ff9750dbfc12524ee3adf9f9afc93",
".git/objects/fd/9700c8adb2940e229431e20a1f566819871ada": "180cd24e5bc28cbbf2344b01628722f1",
".git/objects/62/92f89637365ea49e994bcfbd3be367ee718520": "ae689ffcca2f2b45650fc3ce56319cc6",
".git/objects/75/0e27d86550a9a62a771ffae5aa1d822969f728": "42b2c785fa635e312d6e31bae1fd1c09",
".git/objects/2a/b920fddebd622ceeb620b61e107ef06d117093": "baf29775ff02402dcbe100ce5dd6162f",
".git/objects/ae/cec5f11f69462ec7ad0482dc96635f365244df": "04b972bc7542d8e8476141ceb30883f1",
".git/objects/b1/9fc71aadf5cc6fad150a7231df43919f960e46": "564488df0e8da87b284af0a89301d490",
".git/objects/1b/aaa3ad2c595e6871ca3c520e6bbc45595cddbb": "0302782ad8654b390a883e9476c466e1",
".git/objects/0a/63df117d72ae903e36bda926e0a2f28a729b5a": "b3e3114c727dc9c89cd42f4c93897360",
".git/objects/e2/ece1589b4ce25ece1968d86a621735c23eeba1": "6b6746eadcb30d71b28af57cb1a73b09",
".git/objects/26/6c431812a6dac37d1be3897147a24825b7c6a1": "27c1f2eeb9f7d3df2e77f10357f00975",
".git/objects/66/ad9301687fdc088d6c4e8e0675bc536287db09": "fa75adf37723650ddb1252ce6cd48a01",
".git/objects/87/c17523c72ddee58f5982d789a44d1fbfe75907": "e6828bba888a17a1b01f86a5fbf81bcf",
".git/COMMIT_EDITMSG": "40841bbac1988a5e0aeed66271bd4adc",
".git/logs/HEAD": "dc8685020102dd8f4ffb0715e3ce9d2c",
".git/logs/refs/heads/master": "dc8685020102dd8f4ffb0715e3ce9d2c",
".git/logs/refs/remotes/origin/master": "2c2eacdb9c2fb0cb504a6086f8237ef0",
".git/config": "954419b5abdc0d32e3a1800ac1b46f99",
".git/index": "9f7a8b5df2bf8140290dbe9d8f4f253d"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
