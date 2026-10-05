(function() {
  'use strict';

  var input = document.getElementById('search-input');
  var results = document.getElementById('search-results');
  if (!input || !results) return;

  var data = null;

  // Fetch search index
  fetch(window.searchJsonUrl || '/search.json')
    .then(function(r) { return r.json(); })
    .then(function(d) { data = d; })
    .catch(function() {
      results.innerHTML = '<p style="color: var(--accent-red); text-align: center;">搜索索引加载失败</p>';
    });

  // Search on input
  input.addEventListener('input', function() {
    var q = input.value.trim().toLowerCase();
    if (!q) {
      results.innerHTML = '<p style="color: var(--text-muted); text-align: center; padding: 2rem 0;">输入关键词开始搜索</p>';
      return;
    }
    if (!data) {
      results.innerHTML = '<p style="color: var(--text-muted); text-align: center;">加载中...</p>';
      return;
    }

    var hits = data.filter(function(item) {
      return (item.title && item.title.toLowerCase().indexOf(q) !== -1) ||
             (item.content && item.content.toLowerCase().indexOf(q) !== -1);
    }).slice(0, 20);

    if (hits.length === 0) {
      results.innerHTML = '<p style="color: var(--text-muted); text-align: center; padding: 2rem 0;">没有找到匹配结果</p>';
      return;
    }

    var html = '<ul style="list-style: none; padding: 0;">';
    hits.forEach(function(item) {
      html += '<li style="padding: 1rem 0; border-bottom: 1px solid var(--border);">';
      html += '<h3 style="font-size: 1rem; font-weight: 600; margin-bottom: 0.3rem;"><a href="' + item.url + '" style="color: var(--text);">' + item.title + '</a></h3>';
      html += '<div style="font-size: 0.75rem; color: var(--text-muted); margin-bottom: 0.3rem;">';
      if (item.date) html += '<span>' + item.date + '</span>';
      if (item.category) html += (item.date ? ' · ' : '') + '<span style="color: var(--accent);">' + item.category + '</span>';
      html += '</div>';
      if (item.content) html += '<p style="font-size: 0.85rem; color: var(--text-secondary); line-height: 1.6;">' + item.content + '</p>';
      html += '</li>';
    });
    html += '</ul>';
    results.innerHTML = html;
  });

  // Focus input on load
  input.focus();
})();
