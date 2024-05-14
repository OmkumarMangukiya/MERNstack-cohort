console.log(+[])
console.log(+!![])
console.log(![])
console.log(!![])
function  toNumber(value){
    console.log(Number(value));
}
toNumber([]);
toNumber(+[]);
toNumber(![]);
NaN == NaN  //Four mutually exclusive relations are possible: less than, equal, greater than, and unordered. The
// last case arises when at least one operand is NaN. Every NaN shall compare unordered with everything, including itself.
