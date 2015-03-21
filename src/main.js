import _ from "lodash";
import fizzbuzz from "./lib/fizzbuzz";

let fizzbuzzed = _.range(1, 101).map(fizzbuzz);

// side effect
console.log(fizzbuzzed.join(", "));
