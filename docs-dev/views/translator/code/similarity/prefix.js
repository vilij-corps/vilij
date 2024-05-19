/**
 * Talisman metrics/distance/prefix
 * =================================
 *
 * Function computing the Prefix distance/similarity. This is basically the
 * ratio of the length of the common prefix to the length of the shortest
 * sequence.
 *
 * [Tags]: metric, string metric.
 */
var similarity_prefix = function() {

/**
 * Prefix similarity.
 *
 * @param  {array|string} a - First sequence.
 * @param  {array|string} b - Second sequence.
 * @param  {number}         - Similarity between 0 & 1.
 */
function prefix(a, b) {
  if (a === b)
    return 1;

  if (!a.length || !b.length)
    return 0;

  if (a.length > b.length)
    [a, b] = [b, a];

  let i = 0;

  const l = a.length;

  for (; i < l; i++) {
    if (a[i] !== b[i])
      break;
  }

  return i / l;
}

/**
 * Prefix distance.
 *
 * @param  {array|string} a - First sequence.
 * @param  {array|string} b - Second sequence.
 * @param  {number}         - Distance between 0 & 1.
 */
var distance = function(a, b) {

  return 1 - prefix(a, b);

}

var similarity = function(a, b) {

  return prefix(a, b);

}

return {
    distance : distance,
    similarity : similarity
};

}();