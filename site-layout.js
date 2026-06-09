(function () {
  const NAV_ITEMS = [
    { key: "home", label: "首页", href: "index.html" },
    { key: "technology", label: "平台与技术", href: "technology.html" },
    { key: "solutions", label: "解决方案", href: "solutions.html" },
    { key: "industries", label: "成功案例", href: "industries.html" },
    { key: "about", label: "关于我们", href: "about.html" },
    { key: "contact", label: "联系我们", href: "contact.html" },
  ];

  const legacy = window.__SITE__ || {};
  const DEFAULT_CONFIG = {
    activeNav: legacy.active || "",
    headerCtaText: legacy.cta || "预约交流",
    headerCtaHref: legacy.ctaHref || "contact.html",
    footerBadge: "轻微科技 / Qwe Tech",
    footerDescription:
      "面向政府、高校、集团企业与科研机构，提供信息化平台建设、数据治理、系统集成和长期运维服务。",
    footerSectionTitle: "本页内容",
    footerLinks: [],
    footerNavClass: "",
  };

  function esc(text) {
    return String(text || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function desktopNavItem(item, activeKey) {
    const active = item.key === activeKey;
    const cls = active
      ? "px-4 py-2 rounded-full bg-slate-900 text-white"
      : "px-4 py-2 rounded-full hover:bg-slate-50 hover:text-slate-900 transition nav-item-pro btn-focus";
    return `<a class="${cls}" href="${item.href}"${
      active ? ' aria-current="page"' : ""
    }>${item.label}</a>`;
  }

  function mobileNavItem(item, activeKey) {
    const active = item.key === activeKey;
    const cls = active
      ? "flex items-center justify-between p-4 rounded-2xl border border-slate-200 bg-slate-50"
      : "flex items-center justify-between p-4 rounded-2xl border border-slate-200";
    return `<a class="${cls}" href="${item.href}"${
      active ? ' aria-current="page"' : ""
    }><span class="font-semibold text-slate-900">${item.label}</span><span class="text-slate-300">→</span></a>`;
  }

  function buildHeader(cfg) {
    return `
  <header class="sticky top-0 z-50 border-b border-slate-200/80 bg-white/75 backdrop-blur-xl relative">
    <div class="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/60 to-transparent"></div>
    <div class="max-w-[1400px] mx-auto px-6 h-20 flex items-center justify-between">
      <a href="index.html" class="flex items-center gap-4">
        <img src="tupian/logo.png" alt="轻微科技" class="h-16 w-auto object-contain" decoding="async" />
        <div class="leading-none">
          <div class="text-[22px] sm:text-2xl font-extrabold text-slate-900 tracking-[.10em]">轻微科技</div>
        </div>
      </a>
      <nav class="hidden lg:flex items-center gap-1 text-[15px] font-semibold text-slate-700">
        ${NAV_ITEMS.map((i) => desktopNavItem(i, cfg.activeNav)).join("\n        ")}
      </nav>
      <div class="flex items-center gap-4">
        ${
          cfg.headerCtaText
            ? `<a href="${esc(cfg.headerCtaHref)}" class="hidden sm:inline-flex items-center justify-center h-11 px-6 rounded-full bg-[#3ba341] text-white font-extrabold text-sm hover:bg-[#33923a] transition btn-primary-pro btn-focus">${esc(cfg.headerCtaText)}</a>`
            : ""
        }
        <button id="menuBtn" class="lg:hidden w-11 h-11 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 transition" type="button" aria-label="打开菜单">
          <svg class="w-5 h-5 mx-auto text-slate-700" viewBox="0 0 24 24" fill="currentColor"><path d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"/></svg>
        </button>
      </div>
    </div>
    <div id="mobileMenu" class="lg:hidden hidden border-t border-slate-200 bg-white">
      <div class="max-w-[1400px] mx-auto px-6 py-5 grid gap-4">
        <div class="text-xs font-bold text-slate-400 tracking-[.25em] uppercase">导航</div>
        ${NAV_ITEMS.map((i) => mobileNavItem(i, cfg.activeNav)).join("\n        ")}
      </div>
    </div>
  </header>`;
  }

  function buildFooter(cfg) {
    const footerLinksHtml = (cfg.footerLinks || [])
      .map(
        (item) =>
          `<a class="block hover:text-slate-900 ${cfg.footerNavClass || ""}" href="${item.href}">${esc(item.label)}</a>`
      )
      .join("\n          ");

    return `
  <footer class="relative border-t border-slate-200 bg-white/90 overflow-hidden footer-grid">
    <div class="max-w-[1400px] mx-auto px-6 py-10 grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
      <div>
        <div class="inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/70 px-3 py-1 text-[11px] font-bold text-slate-600 mono tech-outline">
          <span class="w-1.5 h-1.5 rounded-full bg-brand"></span> ${esc(cfg.footerBadge)}
        </div>
        <div class="mt-3 text-lg font-extrabold text-slate-900">轻微科技</div>
        <div class="mt-3 text-sm text-slate-500 leading-relaxed">${esc(cfg.footerDescription)}</div>
        <div class="mt-4 text-xs text-slate-400">© <span id="y"></span> Qwe Tech. All rights reserved.</div>
      </div>
      <div>
        <div class="text-sm font-extrabold text-slate-900">网站导航</div>
        <div class="mt-3 space-y-2 text-sm text-slate-500">
          <a class="block hover:text-slate-900" href="index.html">首页</a>
          <a class="block hover:text-slate-900" href="technology.html">平台与技术</a>
          <a class="block hover:text-slate-900" href="solutions.html">解决方案</a>
          <a class="block hover:text-slate-900" href="industries.html">成功案例</a>
        </div>
      </div>
      <div>
        <div class="text-sm font-extrabold text-slate-900">${esc(cfg.footerSectionTitle)}</div>
        <div class="mt-3 space-y-2 text-sm text-slate-500">${footerLinksHtml}</div>
      </div>
      <div>
        <div class="text-sm font-extrabold text-slate-900">联系</div>
        <div class="mt-3 space-y-2 text-sm text-slate-500">
          <div>地址：广州大学城青蓝街 22 号大学城科技园国家数字家庭基地 B-701</div>
          <div>邮箱：qwe@qwetec.com</div>
          <div>电话：13751885669</div>
          <div class="pt-2"><a href="contact.html" class="inline-flex items-center justify-center px-5 py-2 rounded-full bg-slate-900 text-white font-extrabold text-sm btn-focus">联系我们</a></div>
        </div>
      </div>
    </div>
  </footer>`;
  }

  function render() {
    const cfg = Object.assign({}, DEFAULT_CONFIG, window.__SITE_LAYOUT__ || {});
    const headerHost = document.getElementById("site-header");
    const footerHost = document.getElementById("site-footer");
    if (headerHost) headerHost.outerHTML = buildHeader(cfg);
    if (footerHost) footerHost.outerHTML = buildFooter(cfg);
    document.getElementById("menuBtn")?.addEventListener("click", () => {
      document.getElementById("mobileMenu")?.classList.toggle("hidden");
    });
    const y = document.getElementById("y");
    if (y) y.textContent = new Date().getFullYear();
  }

  render();
})();
