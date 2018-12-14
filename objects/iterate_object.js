  const tokens = {
    btc: "Bitcoin",
    eos: "EOSIO",
    eth: "Ethereum",
    ocn: "Ocean Protocol",
    nums: [1,2,3]
  }

console.log(Object.entries(tokens));

Object.entries(tokens).reduce( (acc, token) => {
  acc.push(token[1]);
  return acc;
}, []);

for (let [key, value] of Object.entries(tokens)) {
  console.log(key, value);
}

let toks = new Map(Object.entries(tokens))
console.log(toks.keys(), toks.values())
