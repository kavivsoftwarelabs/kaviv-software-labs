Update `certificates.json` (Quick guide)

Purpose

This file explains how to safely add or update certificates in `src/data/certificates.json`. The application currently uses `-` in certificate IDs (example: `KVL-SIM-2025-A001`). Keep using `-`.

File location

`src/data/certificates.json`

Entry format

Each certificate is a simple object with three fields used by the verification UI:

```json
{
  "id": "KVL-SIM-2025-A001",
  "internName": "Alice Johnson",
  "issueDate": "2025-01-16"
}
```

Steps to add/update a certificate (manual)

1. Open `src/data/certificates.json` in your editor.
2. Add a new object to the array following the format above.
3. Save the file.
4. If running the dev server, the change will be picked up automatically. If in production, rebuild/deploy.

Quick validation (node)

Run this from the project root to ensure the JSON is valid and contains an `id` field for each entry:

```bash
node -e "const fs=require('fs');const a=JSON.parse(fs.readFileSync('src/data/certificates.json'));a.forEach((c,i)=>{if(!c.id)throw new Error('missing id at '+i)});console.log('OK')"
```

Quick add script (node)

Run this to append a new certificate (replace values inline):

```bash
node -e "const fs=require('fs');const p='src/data/certificates.json';const a=JSON.parse(fs.readFileSync(p));a.push({id:'KVL-SIM-2026-A002',internName:'New Name',issueDate:'2026-02-02'});fs.writeFileSync(p,JSON.stringify(a,null,2));console.log('added')"
```

Notes

- Keep using `-` in IDs to avoid URL/path encoding pitfalls.
- If you later want to accept `/` or other delimiters, update the lookup in `src/data/certificates.js` to normalize IDs before comparing (strip or replace delimiters and compare uppercase strings).

Commit & deploy

After editing, commit the change and push:

```bash
git add src/data/certificates.json
git commit -m "Add certificate KVL-SIM-..."
git push
```

If you host the app statically, run the build and deploy steps you already use.

Support

If you want a browser upload UI instead of editing the file, I can add a simple admin page that accepts a JSON or CSV and replaces `certificates.json` locally (no server).
