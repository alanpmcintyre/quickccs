#!/usr/bin/env node
// Extracts base64 images from index.html to the images/ folder
// and replaces inline base64 with file paths.

const fs = require('fs');
const path = require('path');

let html = fs.readFileSync('index.html', 'utf8');

// Helper: camelCase or snake_case → kebab-case
function toKebab(s) {
  return s.replace(/([A-Z])/g, m => '-' + m.toLowerCase()).replace(/_/g, '-');
}

// Helper: extract and save a base64 image, return the file path
function saveImage(name, mimeType, b64) {
  const ext = mimeType === 'jpeg' ? 'jpg' : mimeType;
  const filename = toKebab(name) + '.' + ext;
  const filepath = path.join('images', filename);
  const buf = Buffer.from(b64, 'base64');
  fs.writeFileSync(filepath, buf);
  console.log('Wrote', filepath, '(' + buf.length + ' bytes)');
  return 'images/' + filename;
}

// ── 1. CCS logo <img src="data:image/..."> ────────────────────────────────
html = html.replace(
  /(<img\b[^>]*?)\bsrc="data:image\/([^;]+);base64,([^"]+)"([^>]*>)/g,
  (full, pre, mime, b64, post) => {
    // grab alt if present
    const altM = full.match(/alt="([^"]*)"/);
    const name = altM
      ? altM[1].replace(/[^a-zA-Z0-9 _-]/g, '').trim().replace(/\s+/g, '-').toLowerCase()
      : 'image';
    const filePath = saveImage(name, mime, b64);
    return pre + 'src="' + filePath + '"' + post;
  }
);

// ── 2. VISUALS object properties ──────────────────────────────────────────
// Pattern A: VISUALS.key = 'data:image/mime;base64,...';
html = html.replace(
  /VISUALS\.(\w+)\s*=\s*'data:image\/([^;]+);base64,([^']+)';/g,
  (full, key, mime, b64) => {
    const filePath = saveImage(key, mime, b64);
    return "VISUALS." + key + " = '" + filePath + "';";
  }
);

// Pattern B: VISUALS.key = "data:image/mime;base64,...",  (inside object literal, ends with ,)
html = html.replace(
  /VISUALS\s*=\s*\{([\s\S]*?)\};/,
  (full, body) => {
    const newBody = body.replace(
      /(\w+):\s*"data:image\/([^;]+);base64,([^"]+)"/g,
      (m, key, mime, b64) => {
        const filePath = saveImage(key, mime, b64);
        return key + ': "' + filePath + '"';
      }
    );
    return 'VISUALS = {' + newBody + '};';
  }
);

// ── 3. Remove fallback || 'data:image/...' lines (now unreachable) ────────
html = html.replace(
  /VISUALS\.\w+\s*=\s*VISUALS\.\w+\s*\|\|\s*'data:image\/[^']*';(\s*\n)?/g,
  ''
);

// ── 4. Remove SVG placeholder (it's just a grey rect — inline is fine, ────
//       but extract it too for consistency) ─────────────────────────────────
html = html.replace(
  /VISUALS\.(\w+)\s*=\s*'data:image\/svg\+xml,([^']+)';/g,
  (full, key, encoded) => {
    const svg = decodeURIComponent(encoded);
    const filename = 'images/' + toKebab(key) + '.svg';
    fs.writeFileSync(filename, svg);
    console.log('Wrote', filename);
    return "VISUALS." + key + " = '" + filename + "';";
  }
);

fs.writeFileSync('index.html', html);
console.log('\nDone. index.html updated.');
