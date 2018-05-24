const nth = 49;
const set = 6;

//Using the formulae P=n!/(n-k)!
let NumberOfArrangements = (n:number, k:number): number =>{
    let numberOfPossibleWays = Factorial(n)/Factorial(n-k); 
    return numberOfPossibleWays;
};

let Factorial = (num: number) :number => {
    if(num==0) return 1;
    return num*Factorial(num-1);
};

console.log(NumberOfArrangements(nth, set));