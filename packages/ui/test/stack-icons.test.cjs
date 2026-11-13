const assert = require('node:assert/strict');
const { test } = require('node:test');
const React = require('react');
const { renderToStaticMarkup } = require('react-dom/server');
const { getIconComponent, StackIcon, iconLibraries } = require('../dist/index.cjs');

test('Zustand와 VisActor는 공식 브랜드 이미지로 등록해 공통 StackIcon에서 렌더링한다', () => {
  for (const [name, icon] of [
    ['Zustand', 'PfZustand'],
    ['VisActor', 'PfVisactor'],
  ]) {
    assert.equal(typeof getIconComponent(icon), 'function');
    assert.equal(typeof iconLibraries.Pf[icon], 'function');
    const markup = renderToStaticMarkup(React.createElement(StackIcon, { name, icon, size: 24 }));
    assert.ok(markup.includes('<image'));
    assert.ok(markup.includes('data:image/'));
    assert.ok(markup.includes(`width="24"`));
    assert.ok(markup.includes(`<title>${name}</title>`));
    assert.ok(!markup.includes('bg-gray-200'));
  }
});

test('기존 React·Tailwind·Supabase·SWR·React Hook Form 아이콘을 재사용한다', () => {
  for (const icon of ['SiReact', 'SiTailwindcss', 'SiSupabase', 'SiSwr', 'SiReacthookform']) {
    assert.equal(typeof getIconComponent(icon), 'function');
  }
});

// 독립 이미지로 디코딩 가능한 형식이어야 브라우저의 SVG image에서도 표시됩니다.
test('VisActor SVG에는 독립 이미지로 읽기 위한 XML 네임스페이스가 있다', () => {
  const markup = renderToStaticMarkup(React.createElement(StackIcon, { name: 'VisActor', icon: 'PfVisactor' }));
  const href = /href="([^"]+)"/.exec(markup)?.[1];
  assert.ok(href?.startsWith('data:image/svg+xml'));
  const imageUrl = href
    .replace(/&quot;/g, '"')
    .replace(/&#x27;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&');
  const [format, payload] = imageUrl.split(',');
  const svg = format.endsWith(';base64')
    ? Buffer.from(payload, 'base64').toString('utf8')
    : decodeURIComponent(payload);
  assert.ok(svg.includes('xmlns="http://www.w3.org/2000/svg"'));
});
