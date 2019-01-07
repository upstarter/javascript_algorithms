const head = ([x]) => x
const tail = ([, ...xs]) => xs
const def = x => typeof x !== 'undefined'
const undef = x => !def(x)
const first = ([x, ...xs], n = 1) => def(x) && n ? [x, ...first(xs, n - 1)] : []
const last = (xs, n = 1) => reverse(first(reverse(xs), n))
// const flatten = ([x, ...xs]) => def(x)
//     ? isArray(x) ? [...flatten(x), ...flatten(xs)] : [x, ...flatten(xs)]
//     : []

const map = ([x, ...xs], fn) => {
  if (undef(x)) return []
  return [fn(x), ...map(xs, fn)]
}

const filter = ([x, ...xs], fn) => def(x)
    ? fn(x)
        ? [x, ...filter(xs, fn)] : [...filter(xs, fn)]
    : []

const reject = ([x, ...xs], fn) => {
  if (undef(x)) return []
  if (!fn(x)) {
    return [x, ...reject(xs, fn)]
  } else {
    return [...reject(xs, fn)]
  }
}

const partition = (xs, fn) => [filter(xs, fn), reject(xs, fn)]

const reduce = ([x, ...xs], fn, memo, i = 0) => def(x)
    ? reduce(xs, fn, fn(memo, x, i), i + 1) : memo
