var mobilePattern = /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i;
Reveal.addEventListener("ready", function() {
  hljs.initHighlightingOnLoad();
  if (navigator.userAgent.match(mobilePattern)) {
    alert("Warning: this presentation is large and contains multitudes, so " +
          "mobile performance may be disappointing.");
  }
});

// Full list of configuration options available at:
// https://github.com/hakimel/reveal.js#configuration
Reveal.initialize({
  controls: true,
  progress: true,
  history: true,
  center: true,

  transition: 'none', // none/fade/slide/convex/concave/zoom

  // Optional reveal.js plugins
  dependencies: [{
    src: 'lib/js/classList.js',
    condition: function() {
      return !document.body.classList;
    }
  }, {
    src: 'plugin/markdown/marked.js',
    condition: function() {
      return !!document.querySelector( '[data-markdown]' );
    }
  }, {
    src: 'plugin/markdown/markdown.js',
    condition: function() {
      return !!document.querySelector( '[data-markdown]' );
    }
  }, {
    src: 'plugin/zoom-js/zoom.js',
    async: true
  }, {
    src: 'plugin/notes/notes.js',
    async: true
  }]
});
