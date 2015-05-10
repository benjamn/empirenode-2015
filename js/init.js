Reveal.addEventListener("ready", function() {
  var codes = document.querySelectorAll("code.javascript");
  Array.prototype.forEach.call(codes, function (block) {
    hljs.highlightBlock(block);
  });
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
