/**
 * Talisman tokenizers/words/treebank
 * ===================================
 *
 * Implementation of the Treebank word tokenizer.
 *
 * [Original script]:
 * http://www.cis.upenn.edu/~treebank/tokenizer.sed
 */
 var tokenize_words_treebank = function() {

/**
 * Contractions.
 */
const CONTRACTIONS2 = [
  /\b(can)(not)\b/gi,
  /\b(d)('ye)\b/gi,
  /\b(gim)(me)\b/gi,
  /\b(gon)(na)\b/gi,
  /\b(got)(ta)\b/gi,
  /\b(lem)(me)\b/gi,
  /\b(mor)('n)\b/gi,
  /\b(wan)(na) "/gi
];

const CONTRACTIONS3 = [
  / ('t)(is)\b/gi,
  / ('t)(was)\b/gi
];

const CONTRACTIONS4 = [
  /\b(whad)(dd)(ya)\b/gi,
  /\b(wha)(t)(cha)\b/gi
];

function applyContractions(contractions, replacement, text) {
  for (let i = 0, l = contractions.length; i < l; i++)
    text = text.replace(contractions[i], replacement);
  return text;
}

/**
 * Rules.
 */
const STARTING_QUOTES = [
  [/^"/g, '``'],
  [/(``)/g, ' $1 '],
  [/([ (\[{<])"/g, '$1 `` ']
];

const PONCTUATION = [
  [/([:,])([^\d])/g, ' $1 $2'],
  [/([:,]$)/g, ' $1 '],
  [/\.\.\./g, ' ... '],
  [/([;@#$%&])/g, ' $1 '],
  [/([^\.])(\.)([\]\)}>"']*)\s*$/g, '$1 $2$3 '],
  [/([?!])/g, ' $1 '],
  [/([^'])' /g, '$1 \' ']
];

const PARENS_BRACKETS = [
  [/([\]\[\(\)\{\}\<\>])/g, ' $1 '],
  [/--/g, ' -- ']
];

const ENDING_QUOTES = [
  [/"/g, ' \'\' '],
  [/(\S)('')/g, '$1 $2 '],
  [/([^' ])('[sS]|'[mM]|'[dD]|') /g, '$1 $2 '],
  [/([^' ])('ll|'LL|'re|'RE|'ve|'VE|n't|N'T) /g, '$1 $2 ']
];

function applyRules(rules, text) {
  for (let i = 0, l = rules.length; i < l; i++)
    text = text.replace(rules[i][0], rules[i][1]);
  return text;
}

/**
 * Function tokenizing raw sentences into words.
 *
 * @param  {string} text       - The text to tokenize.
 * @return {array}             - The tokens.
 */
function tokenize(text) {

  //-- 1) Applying rules
  text = applyRules(STARTING_QUOTES, text);
  text = applyRules(PONCTUATION, text);
  text = applyRules(PARENS_BRACKETS, text);

  text = ' ' + text + ' ';

  text = applyRules(ENDING_QUOTES, text);

  //-- 2) Applying contractions
  text = applyContractions(CONTRACTIONS2, ' $1 $2 ', text);
  text = applyContractions(CONTRACTIONS3, ' $1 $2 ', text);
  text = applyContractions(CONTRACTIONS4, ' $1 $2 $3 ', text);

  const tokens = text
    .split(/\s+/)
    .map(token => token.trim())
    .filter(token => token);

  return tokens;
}

var exec = function(text) {

  return tokenize(text);

}

return {
    exec : exec
};

}();