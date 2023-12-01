"use strict";

export const pubnubKey = {
  publishKey: import.meta.env.VITE_APP_PUB_KEY as string,
  subscribeKey: import.meta.env.VITE_APP_SUB_KEY as string,
}