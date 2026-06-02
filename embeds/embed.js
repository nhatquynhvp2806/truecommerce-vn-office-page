// =====================================================================
// TrueCommerce VN Office · Embed helper
// ---------------------------------------------------------------------
// • Posts {type:'tc-embed-resize', height, name} to parent so SharePoint/
//   portals that listen can auto-resize the iframe.
// • Falls back gracefully: if the host doesn't listen, the iframe just
//   keeps its fixed CSS height — no harm done.
// • Stamps the brand strip with the right link.
// =====================================================================

(function(){
  const name = document.documentElement.getAttribute('data-embed') || location.pathname.split('/').pop();

  function postHeight(){
    const h = Math.max(
      document.documentElement.scrollHeight,
      document.body.scrollHeight,
      document.body.offsetHeight
    );
    try {
      parent.postMessage({ type: 'tc-embed-resize', name, height: h }, '*');
    } catch(e){}
  }

  // initial + on load + on resize
  window.addEventListener('load', () => { postHeight(); setTimeout(postHeight, 300); });
  window.addEventListener('resize', postHeight);

  // observe body size changes (slide changes, gallery loads, etc.)
  if(typeof ResizeObserver !== 'undefined'){
    new ResizeObserver(postHeight).observe(document.body);
  }

  // expose for manual triggers
  window.tcEmbedNotifyHeight = postHeight;

  // ---------- CTA placeholder behavior ----------
  document.addEventListener('click', (e) => {
    const a = e.target.closest && e.target.closest('[data-link]');
    if(!a) return;
    if(a.getAttribute('href') === '#'){
      e.preventDefault();
      console.log('[TC embed] Link placeholder:', a.getAttribute('data-link'), '— replace href with the real URL.');
    }
  });
})();
