/**
 * Talisman metrics/distance/lig
 * ==============================
 *
 * LIG2 & LIG3 distances.
 *
 * Note that the LIG1 distance is not implemented here because it's deemed
 * less useful by the paper's authors and because they seem to use a different
 * definition of the Guth distance function that the widely accepted one (as
 * hinted in another paper).
 *
 * [Article]:
 * An Interface for Mining Genealogical Nominal Data Using the Concept of
 * linkage and a Hybrid Name Matching Algorithm.
 * Chakkrit Snae, Bernard Diaz
 * Department of Computer Science, The University of Liverpool
 * Peach Street, Liverpool, UK, L69 7ZF
 */
var similarity_lig = function() {

/**
 * LIG2 similarity metric.
 *
 * @param  {string|array} a - First sequence.
 * @param  {string|array} b - Second sequence.
 * @return {number}
 */
function lig2(a, b) {
  if (a === b)
    return 1;

  let tmp;

  // Swapping so that a is the shortest
  if (a.length > b.length) {
    tmp = a;
    a = b;
    b = tmp;
  }

  const C = H.Talisman.Levenshtein.exec(a, b),
        I = b.length - C;

  return I / (I + C);
}

/**
 * LIG3 similarity metric.
 *
 * @param  {string|array} a - First sequence.
 * @param  {string|array} b - Second sequence.
 * @return {number}
 */
function lig3(a, b) {
  if (a === b)
    return 1;

  let tmp;

  // Swapping so that a is the shortest
  if (a.length > b.length) {
    tmp = a;
    a = b;
    b = tmp;
  }

  const C = H.Talisman.Levenshtein.exec(a, b),
        I = b.length - C;

  return 2 * I / (2 * I + C);
}

var two = function(a, b) {

  return lig2(a, b);

}

var three = function(a, b) {

  return lig3(a, b);

}

return {
    two : two,
    three : three
};

}();