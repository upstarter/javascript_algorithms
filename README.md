# javascript_algorithms
Javascript Algorithms

Dynamic Property Names
ES6 adds the ability to create or add properties with dynamically assigned keys.

let  city= 'sheffield_'
let a = {    [ city + 'population' ]: 350000}
a[ city + 'county' ] = 'South Yorkshire'
console.log(a)
// {sheffield_population: 350000, sheffield_county: 'South Yorkshire' }
