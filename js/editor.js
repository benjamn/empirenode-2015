function makeCodeMirror(sourceNodeOrId, /*optional:*/ targetNodeOrId, transform) {
  var doc = document;
  var head = doc.documentElement.firstChild;

  var sourceNode = typeof sourceNodeOrId === "string"
    ? doc.getElementById(sourceNodeOrId)
    : sourceNodeOrId;

  var targetNode = typeof targetNodeOrId === "string"
    ? doc.getElementById(targetNodeOrId)
    : targetNodeOrId;

  sourceNode.style.whiteSpace = "pre";
  var origValue = sourceNode.textContent;

  function delayedReplace(newNode, oldNode) {
    if (oldNode.className) {
      newNode.className += " " + oldNode.className;
    }
    document.body.appendChild(newNode);
    makeCodeMirror.initFns.push(function() {
      if (oldNode.parentNode) {
        oldNode.parentNode.replaceChild(newNode, oldNode);
      }
    });
  }

  var source = CodeMirror(function(source) {
    delayedReplace(source, sourceNode);
  }, {
    value: origValue,
    mode: sourceNode.getAttribute("data-language") || "javascript",
    indentUnit: 2,
    readOnly: !targetNode
  });

  sourceNode.removeAttribute("data-language");

  if (!targetNode) {
    return source;
  }

  // Default to an identity transform.
  transform = transform || function(input) { return input };

  var target = CodeMirror(function(target) {
    delayedReplace(target, targetNode);
  }, {
    value: transform(origValue),
    mode: targetNode.getAttribute("data-language") || "javascript",
    readOnly: true
  });

  sourceNode.removeAttribute("data-language");

  var delayTimer;
  var delayMS = 50;

  CodeMirror.on(source.doc, "change", function(source) {
    clearTimeout(delayTimer);
    delayTimer = setTimeout(function() {
      target.setValue(transform(source.getValue()));
    }, delayMS);
  });

  CodeMirror.on(doc, "keydown", function(event) {
    if (event.ctrlKey && event.which === 13) {
      event.preventDefault();
      var script = doc.createElement("script");
      script.appendChild(doc.createTextNode(target.getValue()));
      head.appendChild(script);
    }
  });

  return source;
}

makeCodeMirror.initFns = [];
makeCodeMirror.init = function() {
  makeCodeMirror.initFns.forEach(function(initFn) {
    initFn();
  });
};
