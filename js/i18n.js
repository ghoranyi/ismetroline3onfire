TRANSLATIONS = {
  hu: {
    aliases: ['hu', 'hu-HU'],
    map: {
      'Not yet': 'Még nem',
      'Yes': 'Igen',
      'Yes!': 'Igen!',
      'Not anymore': 'Már nem'
    }
  }
};

$(function() {
  var translation = null;

  for (var l in TRANSLATIONS) {
    var idx = Math.max.apply(Math, TRANSLATIONS[l].aliases.map(function(x) { return navigator.languages.indexOf(x); }));

    if (idx >= 0) {
      translation = TRANSLATIONS[l].map;
    }
  }

  if (!translation) {
    return;
  }

  $('*').each(function(i, element) {
    for (var i in element.childNodes) {
      var child = element.childNodes[i];

      if (child.nodeType == Node.TEXT_NODE) {
        var value = child.nodeValue.trim();

        if (value.length > 0 && translation.hasOwnProperty(value)) {
          child.nodeValue = translation[value];
        }
      }
    }
  });
});
