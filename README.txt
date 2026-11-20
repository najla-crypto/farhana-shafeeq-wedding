# Farhana & Shafeeq — Royal Emerald & Gold Wedding Website

This is a mobile-friendly, single-page wedding invitation website. It is intentionally prepared with editable placeholders because the wedding date, time, venue, map link and RSVP WhatsApp number have not been provided yet.

## Files
- `index.html` — page content
- `style.css` — emerald and gold design
- `script.js` — countdown, event details, map and WhatsApp RSVP
- `assets/music/` — place your chosen MP3 here as `wedding-music.mp3`
- `assets/photos/` — place your own gallery photos here (see below)

## Important: personalise the details
Open `script.js` and edit the `wedding` object at the top:
- `date`: use `YYYY-MM-DDTHH:MM:SS`, e.g. `2027-02-14T18:00:00` (use the local time for the venue). Do not leave it `null`.
- `dateText`: e.g. `Sunday, 14 February 2027`
- `timeText`: e.g. `6:00 PM`
- `venueName`: venue name
- `venueAddress`: full venue address
- `mapUrl`: paste the Google Maps share link
- `whatsappNumber`: country code + number, digits only (India example: `919876543210`)

## Add your photos
The gallery currently uses sample online photos. To use your own:
1. Upload three photos into `assets/photos/` named `photo-1.jpg`, `photo-2.jpg`, `photo-3.jpg`.
2. In `index.html`, replace the three Unsplash image URLs with:
   - `assets/photos/photo-1.jpg`
   - `assets/photos/photo-2.jpg`
   - `assets/photos/photo-3.jpg`

## Add background music
Add an MP3 you are allowed to use to `assets/music/` and name it `wedding-music.mp3`. Music starts only after a visitor taps Play music, because phones block autoplay.

## Publish from an Android phone
1. Extract this ZIP on your phone (Files app → Downloads → tap ZIP → Extract).
2. Open `https://github.com/` in Chrome and sign in or create an account.
3. Tap `+` → `New repository`. Name it `farhana-shafeeq-wedding`, set it to Public, and create it.
4. In the repository, use `Add file` → `Upload files`. Upload the extracted website files and folders. Ensure `index.html`, `style.css`, `script.js` are at the repository root (not buried inside another folder). Commit the upload.
5. Open `https://vercel.com/` in Chrome and sign in with GitHub.
6. Tap `Add New` → `Project`, import `farhana-shafeeq-wedding`, then tap `Deploy`.
7. Vercel will provide a public `*.vercel.app` URL.

If GitHub's mobile upload screen makes folder uploads difficult, upload the files using GitHub's browser desktop-site option in Chrome, or use Replit to upload/extract the ZIP and deploy via its Git integration.

## Before sharing
Test the site on your phone. Confirm date/countdown, map, RSVP WhatsApp number, photos and music. Do not publish private phone numbers unless you intend guests to contact that number.
