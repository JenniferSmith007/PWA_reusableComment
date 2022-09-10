import { setDefaultHandler } from "workbox-routing";
import {precacheAndRoute} from "workbox-precaching";
import {offlineFallback, staticResourceCache,imageCache} from "workbox-recipes";
import {NetworkOnly} from "workbox-strategies";



setDefaultHandler(new NetworkOnly());

precacheAndRoute(self.__WB_MANIFEST);

staticResourceCache();
 imageCache();
 offlineFallback({
    pageFallback:'/offline.html'
 })