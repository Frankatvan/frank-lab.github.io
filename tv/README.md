# TV Hosting Files

Copy these files into the homepage project so they are served as:

- `https://frankzh.top/tv/version.json`
- `https://frankzh.top/tv/channels.json`
- `https://frankzh.top/tv/channels.m3u`
- `https://frankzh.top/tv/app-version.json`
- `https://frankzh.top/tv/mytv.apk`
- `https://frankzh.top/tv/player/`

For a Next.js or Vercel static site, place this folder's contents under:

```text
public/tv/
```

Update process:

1. Edit `channels.json`.
2. Keep `channels.m3u` in sync for other IPTV players.
3. Increment `version` in `version.json` and `channels.json`.
4. Redeploy `frankzh.top`.

The APK checks `version.json` automatically and downloads `channels.json` when the channel version increases.

APK update process:

1. Build a new APK with a higher `versionCode` in `android-tv-live-apk/app/build.gradle`.
2. Copy the APK to `public/tv/mytv.apk`.
3. Update `app-version.json` with the new `versionCode`, `versionName`, and SHA-256.
4. Redeploy `frankzh.top`.

On the TV box, press Menu from MyTV. If `app-version.json` has a newer `versionCode`, MyTV downloads `mytv.apk` and opens the Android installer for a confirmed overwrite install. If the app is current, the same action updates the channel list.

Web player:

- `player/index.html` reads `../channels.json` at runtime.
- Safari uses native HLS playback; Chrome and Edge use hls.js from jsDelivr.
- Some channels may not play in browsers if the source blocks browser CORS, even when the same stream works in the APK or IPTV player.
