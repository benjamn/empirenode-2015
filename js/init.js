Reveal.addEventListener("ready", function() {
  var Ap = Array.prototype;
  var each = Ap.forEach;
  var slice = Ap.slice;

  var codes = document.querySelectorAll("code.javascript,code.xml");
  each.call(codes, function (block) {
    hljs.highlightBlock(block);
  });

  var blinkers = slice.call(document.querySelectorAll(".blink"));
  if (blinkers.length > 0) {
    var visible = true;
    function setVisibility(blinker) {
      blinker.style.visibility = visible ? "visible" : "hidden";
    }

    function go() {
      blinkers.forEach(setVisibility);
      setTimeout(go, visible ? 1000 : 500);
      visible = ! visible;
    }

    go();
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
