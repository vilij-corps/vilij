/**
 * Talisman tokenizers/ngrams
 * ===========================
 *
 * Functions related to ngrams' computation.
 *
 * [Reference]: https://en.wikipedia.org/wiki/N-gram
 */
H.Namespace.set(H, 'Talisman.NGrams');
H.Talisman.NGrams = function() {

/**
 * Function taking a sequence and computing its ngrams.
 *
 * @param  {number}   n         - Nb of elements in the subsequence.
 * @param  {mixed}    sequence  - The sequence to process.
 * @return {array}              - The array of resulting ngrams.
 *
 * @throws {Error} The function expects a positive n > 0.
 */
function ngrams(n, sequence) {
  if (n < 1)
    throw Error('talisman/tokenizers/ngrams: first argument should be a positive integer > 0.');

  const isString = typeof sequence === 'string';

  const subsequences = [];

  for (let i = 0, l = sequence.length; i < l - n + 1; i++) {
    const subsequence = [];

    for (let j = 0; j < n; j++)
      subsequence.push(sequence[i + j]);

    subsequences.push(isString ? subsequence.join('') : subsequence);
  }

  return subsequences;
}

var bigrams = function(s) {

  return ngrams(2, s);

}

var trigrams = function(s) {

  return ngrams(3, s);

}

var quadrigrams = function(s) {

  return ngrams(4, s);

}

var xgrams = function(n, s) {

  return ngrams(n, s);

}

return {
  bigrams : bigrams,
  trigrams : trigrams,
  quadrigrams : quadrigrams,
  xgrams : xgrams
};

}();