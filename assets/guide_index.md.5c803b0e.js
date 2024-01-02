import{_ as a}from"./plugin-vue_export-helper.21dcd24c.js";import{o as n,b as e,aH as s}from"./framework.0718b91c.js";const g='{"title":"lemon \u26A1","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4ECB\u7ECD","slug":"\u4ECB\u7ECD"},{"level":2,"title":"Package","slug":"package"},{"level":2,"title":"\u5B89\u88C5","slug":"\u5B89\u88C5"},{"level":2,"title":"\u4F7F\u7528","slug":"\u4F7F\u7528"},{"level":3,"title":"\u5168\u91CF\u5F15\u5165\u529F\u80FD\u597D(\u63A8\u8350)","slug":"\u5168\u91CF\u5F15\u5165\u529F\u80FD\u597D-\u63A8\u8350"},{"level":3,"title":"\u6309\u9700\u5F15\u5165\u5DE5\u5177\u7C7B","slug":"\u6309\u9700\u5F15\u5165\u5DE5\u5177\u7C7B"}],"relativePath":"guide/index.md","lastUpdated":1704183906563}',t={},o=s(`<p align="center"><a href="https://wenghaoping.github.io/lemon-docs/" target="_blank" rel="noopener noreferrer"><img width="180" src="https://souche.oss-cn-hangzhou.aliyuncs.com/20230512/png/880716f761543148c157cb3e54328d1c.png" alt="Vite logo"></a></p><br><br><h1 id="lemon-\u26A1" tabindex="-1">lemon \u26A1 <a class="header-anchor" href="#lemon-\u26A1" aria-hidden="true">#</a></h1><h1 id="\u5FEB\u901F\u5F00\u59CB" tabindex="-1">\u5FEB\u901F\u5F00\u59CB <a class="header-anchor" href="#\u5FEB\u901F\u5F00\u59CB" aria-hidden="true">#</a></h1><h2 id="\u4ECB\u7ECD" tabindex="-1">\u4ECB\u7ECD <a class="header-anchor" href="#\u4ECB\u7ECD" aria-hidden="true">#</a></h2><p>\u6781\u5927\u7684\u7B80\u5316\u4E86 css \u7684\u5199\u6CD5,\u4EE5\u540E\u518D\u4E5F\u4E0D\u7528\u5199 css \u5566.\u53EA\u5199 class \u5566,</p><p>A good helper to help you write css, let others be sour!</p><h2 id="package" tabindex="-1">Package <a class="header-anchor" href="#package" aria-hidden="true">#</a></h2><table><thead><tr><th>Package</th><th style="text-align:left;">\u8BF4\u660E</th></tr></thead><tbody><tr><td><a href="https://github.com/wenghaoping/lemon" target="_blank" rel="noopener noreferrer">git</a></td><td style="text-align:left;"><a href="./.html"></a></td></tr><tr><td><a href="https://wenghaoping.github.io/lemon-docs" target="_blank" rel="noopener noreferrer">\u6587\u6863</a></td><td style="text-align:left;"><a href="./.html"></a></td></tr><tr><td><a href="https://www.npmjs.com/package/@minij/lemon" target="_blank" rel="noopener noreferrer">NPM</a></td><td style="text-align:left;"><a href="https://www.npmjs.com/package/@minij/lemon" target="_blank" rel="noopener noreferrer">V0.0.3</a></td></tr></tbody></table><h2 id="\u5B89\u88C5" tabindex="-1">\u5B89\u88C5 <a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a></h2><p>\u901A\u8FC7 yarn \u5B89\u88C5</p><div class="language-bash"><pre><code><span class="token function">yarn</span> <span class="token function">add</span> @minij/lemon <span class="token parameter variable">-S</span>
</code></pre></div><h2 id="\u4F7F\u7528" tabindex="-1">\u4F7F\u7528 <a class="header-anchor" href="#\u4F7F\u7528" aria-hidden="true">#</a></h2><h3 id="\u5168\u91CF\u5F15\u5165\u529F\u80FD\u597D-\u63A8\u8350" tabindex="-1">\u5168\u91CF\u5F15\u5165\u529F\u80FD\u597D(\u63A8\u8350) <a class="header-anchor" href="#\u5168\u91CF\u5F15\u5165\u529F\u80FD\u597D-\u63A8\u8350" aria-hidden="true">#</a></h3><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token string">&quot;@minij/lemon&quot;</span><span class="token punctuation">;</span> <span class="token comment">// \u5F15\u5165\u5168\u91CF\u5DE5\u5177\u7C7B</span>
<span class="token keyword">import</span> <span class="token string">&quot;@minij/lemon/css/reset.css&quot;</span><span class="token punctuation">;</span> <span class="token comment">// \u91CD\u7F6E\u6587\u4EF6</span>
<span class="token keyword">import</span> <span class="token string">&quot;@minij/lemon/css/themes/default.css&quot;</span><span class="token punctuation">;</span> <span class="token comment">// \u9009\u62E9\u5BFC\u5165\u7684\u4E3B\u9898</span>
</code></pre></div><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token string">&quot;@minij/lemon/less/global.less&quot;</span><span class="token punctuation">;</span> <span class="token comment">// \u6DF7\u5408</span>
</code></pre></div><h3 id="\u6309\u9700\u5F15\u5165\u5DE5\u5177\u7C7B" tabindex="-1">\u6309\u9700\u5F15\u5165\u5DE5\u5177\u7C7B <a class="header-anchor" href="#\u6309\u9700\u5F15\u5165\u5DE5\u5177\u7C7B" aria-hidden="true">#</a></h3><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token string">&quot;@minij/lemon/css/color.css&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">&quot;@minij/lemon/css/font.css&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">&quot;@minij/lemon/css/layout.css&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">&quot;@minij/lemon/css/position.css&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">&quot;@minij/lemon/css/box.css&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">&quot;@minij/lemon/css/other.css&quot;</span><span class="token punctuation">;</span>
</code></pre></div>`,19),r=[o];function p(l,i,c,d,h,u){return n(),e("div",null,r)}var f=a(t,[["render",p]]);export{g as __pageData,f as default};