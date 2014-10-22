var after = require('after'),
    suggest = require('suggestion'),
    uniq = require('uniq');

module.exports = questionable;

var prefixes = [
  'why',
  'when',
  'do',
  'should',
  'which',
  'where',
  'how',
  'how to',
  'how can',
  'how much',
  'how would',
  'who',
  'what',
  'what should',
  'what can',
  'what would',
];

function questionable(keyword, cb) {
  var next = after(prefixes.length, done);
  var results = [];

  prefixes.forEach(function (prefix) {
    suggest(prefix + ' ' + keyword, { cp: prefix.length + 1 }, function (err, suggestions) {
      if (err) return next(err);
      results = results.concat(suggestions);
      next();
    });
  });

  function done(err) {
    if (err) return cb(err);
    cb(null, uniq(results));
  }
}
