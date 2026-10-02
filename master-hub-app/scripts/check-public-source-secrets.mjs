import fs from 'node:fs';
import path from 'node:path';

const roots = ['src', 'public'];
const skippedExtensions = new Set(['.png','.jpg','.jpeg','.gif','.webp','.ico','.pdf','.zip','.woff','.woff2','.ttf']);
const skippedNames = new Set(['node_modules','.next','.git']);

const checks = [
  ['private key', /-----BEGIN (?:RSA |EC |OPENSSH |DSA )?PRIVATE KEY-----/g],
  ['GitHub token', /\bgh[pousr]_[A-Za-z0-9_]{20,}\b/g],
  ['OpenAI key', /\bsk-(?:proj-)?[A-Za-z0-9_-]{20,}\b/g],
  ['AWS access key', /\bAKIA[0-9A-Z]{16}\b/g],
  ['AWS secret assignment', /AWS_SECRET_ACCESS_KEY\s*[:=]\s*['\"][^'\"\n]{16,}['\"]/g],
  ['service-role secret assignment', /(?:SUPABASE_)?SERVICE_ROLE(?:_KEY)?\s*[:=]\s*['\"][^'\"\n]{16,}['\"]/gi],
  ['plaintext password assignment', /(?:password|passwd|pwd)\s*[:=]\s*['\"][^'\"\n]{12,}['\"]/gi],
];

function walk(dir, out = []) {
  if (!fs.existsSync(dir)) return out;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (skippedNames.has(entry.name)) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, out);
    else if (!skippedExtensions.has(path.extname(entry.name).toLowerCase())) out.push(full);
  }
  return out;
}

const hits = [];
for (const root of roots) {
  for (const file of walk(path.resolve(process.cwd(), root))) {
    let text;
    try { text = fs.readFileSync(file, 'utf8'); } catch { continue; }
    for (const [label, regex] of checks) {
      regex.lastIndex = 0;
      let match;
      while ((match = regex.exec(text))) {
        const line = text.slice(0, match.index).split(/\r?\n/).length;
        hits.push(`${path.relative(process.cwd(), file)}:${line} — ${label}`);
      }
    }
  }
}

if (hits.length) {
  console.error('Potential secret material detected in public application source:');
  for (const hit of hits) console.error(`- ${hit}`);
  console.error('Remove the secret or explicitly redesign the check; do not whitelist real credentials.');
  process.exit(1);
}

console.log('Public-source secret pattern scan passed.');
