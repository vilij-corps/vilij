/**
 * Talisman metrics/distance/length
 * =================================
 *
 * Length distance/similarity. Basically just the ratio of the shorter length
 * over the longer length.
 *
 * [Tags]: metric, string metric.
 */
H.Namespace.set(H, 'Talisman.Length');

var similarity_length = function() {

/**
 * Length similarity.
 *
 * @param  {array|string} a - First sequence.
 * @param  {array|string} b - Second sequence.
 */
function similarity(a, b) {
  if (a === b)
    return 1;

  const la = a.length,
        lb = b.length;

  if (!la || !lb)
    return 0;

  if (la < lb)
    return la / lb;

  return lb / la;
}

/**
 * Length distance.
 *
 * @param  {array|string} a - First sequence.
 * @param  {array|string} b - Second sequence.
 */
var exec = function(a, b) {
  let distance = 1 - similarity(a, b);
  return similarity(a, b);

}

return {
    exec : exec
};

}();
