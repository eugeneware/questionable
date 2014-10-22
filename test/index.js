var it = require('tape'),
    questionable = require('..');

it('should be able to suggest some titles', function(t) {
  t.plan(2);
  questionable('productivity', function (err, titles) {
    if (err) throw err;
    t.assert(titles.length > 100);
  });
  questionable('dog training', function (err, titles) {
    if (err) throw err;
    t.assert(titles.length > 100);
  });
});
