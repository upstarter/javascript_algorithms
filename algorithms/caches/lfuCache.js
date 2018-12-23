let LFUCache = (limit) => {
  const data = {};
  let capacity = 0;

  return {
    get(key) {
      if (!data[key]) { return -1 }

      data[key].freq++;
      return data[key].val;
    },

    removeLeastFrequent() {
      let lowestFreq;
      let lowestKey = '';

      for (const [k, d] of Object.entries(data)) {
        if (lowestFreq === undefined) {
          lowestFreq = d.freq;
          lowestKey = k;
        }

        if (d.freq < lowestFreq) {
          lowestFreq = d.freq;
          lowestKey = k;
        }
      }

      delete data[lowestKey];
      capacity--;
      return lowestKey
    },

    put(key, val) {
      if (capacity < limit) {
        if (!data[key]) {
          data[key] = {
            val,
            freq: 0
          }
        } else {
          data[key] = val;
        }

        capacity++;
        return `inserted ${key}`;
      }

      const lowestKey = this.removeLeastFrequent();
      this.put(key,val);
      return `evicted ${lowestKey}, inserted ${key}`
    }
  }
}

const cache = LFUCache(2);
console.log(cache.put(1, 1))
console.log(cache.put(2, 2))
console.log(cache.get(1))     // returns 1
console.log(cache.put(3, 3))  // evicts key 2
console.log(cache.get(2))     // returns -1 (not found)
console.log(cache.get(3))     // returns 3.
console.log(cache.put(4, 4))  // evicts key 1.
console.log(cache.get(1))     // returns -1 (not found)
console.log(cache.get(3))     // returns 3
console.log(cache.get(4))     // returns 4
