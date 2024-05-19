/**
 * Talisman metrics/distance/minhash
 * ==================================
 *
 * Function computing the similarity/distance between MinHash signatures.
 */
var similarity_minHash = function() {

/**
 * Function returning the similarity between two MinHash signatures.
 *
 * @param  {mixed}  a - The first signature.
 * @param  {mixed}  b - The second signature.
 * @return {number}   - The similarity between a & b.
 *
 * @throws {Error} The function expects signatures of same length.
 */
function minhash(a, b) {
  if (a.length !== b.length)
    throw Error('talisman/metrics/distance/minhash: the given signatures are not of same length.');

  const L = a.length;

  let s = 0;

  for (let i = 0; i < L; i++) {
    if (a[i] === b[i])
      s++;
  }

  return s / L;
}

/**
 * MinHash distance is simply 1 - similarity.
 */
var distance = function(a, b) {

  return 1 - minhash(a, b);

}

var similarity = function(a, b) {

  return minhash(a, b);

}

return {
    distance : distance,
    similarity : similarity
};

}();
