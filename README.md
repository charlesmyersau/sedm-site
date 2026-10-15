# SEDM local website

This is the local-development version of the website for Soetkin, Elizabeth and Doutzen Myers.

## Run it locally

From the folder containing this README:

```bash
python3 -m http.server 8080 --bind 0.0.0.0
```

Then visit:

- On the server: `http://localhost:8080`
- From another device on your home network: `http://YOUR-SERVER-IP:8080`

If a firewall is enabled, you may need to allow TCP port 8080 on your local network.

## Important: search engines are currently blocked

This draft intentionally includes:

```html
<meta name="robots" content="noindex,nofollow">
```

and `robots.txt` contains:

```text
User-agent: *
Disallow: /
```

Do **not** remove these until you are ready for the public site to be discoverable.

## Adding photos

Folders already exist:

- `images/soetkin/`
- `images/elizabeth/`
- `images/doutzen/`
- `images/family/`

Before publishing photos publicly, remove GPS/EXIF metadata. On Linux with ExifTool:

```bash
exiftool -all= photo.jpg
```

Keep a backup first, because this edits the image file.

The HTML currently uses visual placeholders. Replace a placeholder with something like:

```html
<img src="../images/soetkin/photo-01.jpg" alt="A family photograph of Soetkin">
```

## Contact form

The form is intentionally disabled in this local version. When the domain is registered we can connect it securely using a form service or a small server-side endpoint without displaying your email address publicly.

## Before going live

1. Finalize the wording on all four main pages.
2. Add and optimize photographs.
3. Connect the contact form.
4. Register the domain.
5. Replace `noindex,nofollow` with `index,follow`.
6. Change `robots.txt` to allow crawling.
7. Add canonical URLs and Open Graph metadata using the final domain.
8. Create `sitemap.xml`.
9. Enable HTTPS.
10. Submit the site to Google Search Console.

