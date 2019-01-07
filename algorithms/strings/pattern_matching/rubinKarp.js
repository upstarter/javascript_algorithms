import polynomialHash from './cryptography/polynomialHash';

/**
 * @param {string} text - Text that may contain the searchable word.
 * @param {string} word - Word that is being searched in text.
 * @return {number} - Position of the word in text.
 */
export default function rabinKarp(text, word) {
  const hasher = new PolynomialHash();

  // Calculate word hash that we will use for comparison with other substring hashes.
  const w = hasher.hash(word);

  let pf = null;  // previous frame
  let cfh = null; // current frame hash
  let l = word.length;

  // Go through all substring of the text that may match.
  for (let i = 0; i <= (text.length - l); i += 1) {
    const cf = text.substring(i, i + l); // current frame

    // Calculate the hash of current substring.
    if (cfh === null) {
      cfh = hasher.hash(cf);
    } else {
      cfh = hasher.roll(cfh, pf, cf);
    }

    pf = cf;

    // Compare the hash of current substring and seeking string.
    // In case if hashes match let's make sure that substrings are equal.
    // In case of hash collision the strings may not be equal.
    if (
      w === cfh
      && text.substr(i, l) === word
    ) {
      return i;
    }
  }

  return -1;
}
