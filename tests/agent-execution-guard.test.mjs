import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const read = p => readFileSync(p,'utf8');
test('the user task is not assigned to a fixed assistant',()=>{
 assert.match(read('AGENTS.md'), /توجيه التنفيذ/);
 assert.match(read('CLAUDE.md'), /@AGENTS\.md/);
 assert.doesNotMatch(read('CLAUDE.md'), /For the first session: perform a read-only audit/);
});
test('Arabic educational test instructions and review checks persist',()=>{
 const html=read('index.html');
 assert.match(html, /<html[^>]+dir=["']rtl["']/i);
 assert.match(html, /مهارات فهم النص النبوي/);
 assert.match(read('docs/ENGINEERING_PLAYBOOK.md'), /بوابات الجودة بحسب الخطر/);
 assert.match(read('.github/PULL_REQUEST_TEMPLATE.md'), /بوابة جودة/);
});