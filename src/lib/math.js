import _ from "lodash";

let isMultipleOf = (n, possibleMultiple) => possibleMultiple % n === 0;
let isMultipleOfThree = _.partial(isMultipleOf, 3);
let isMultipleOfFive = _.partial(isMultipleOf, 5);
let isMultipleOfThreeAndFive = (n) => isMultipleOfThree(n) && isMultipleOfFive(n);

export { isMultipleOf, isMultipleOfThree, isMultipleOfFive, isMultipleOfThreeAndFive };