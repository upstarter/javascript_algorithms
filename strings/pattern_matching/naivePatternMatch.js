const naivePatternMatch = (pat, txt ) =>  {
  const m = pat.length
  const n = txt.length

  // A loop to slide pat[] one by one
  let i = 0;
  for (i; i < (n-m); i++) {
      // For current index i, check for pattern match */
      let j = 0
      while(j < m) {
          if (txt[i + j] != pat[j]) {
            break
          }
          j += 1
      }

      // if pat[0...m-1] = txt[i, i+1, ...i+M-1])
      if (j == m) {
           console.log("Pattern found at index %d \n", i)
      }
  }
}

const txt = "AABAACAADAABAABAA"
const pat = "AABA"
naivePatternMatch(pat, txt)
