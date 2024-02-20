 function ArrowFunctions() {
    const subtract = (a: number, b: number) => {
        return a - b;
      }
    const add = (a: number, b: number) => {
        return a + b;
      }
    const multiply = (a: number, b: number) => {
        return a * b;
      }
    const divide = (a: number, b: number) => {
        return a / b;
      }

    const threeMinusOne  = subtract(3, 1);
    console.log(threeMinusOne );

    const threePlusOne = add(3, 1);
    const threeTimesOne = multiply(3, 1);
    const threeDividedByOne = divide(3, 1);

    return (
        <>
            <h3>New ES6 arrow functions</h3>
            threeMinusOne  = { threeMinusOne  } <br />
            subtract(5, 2) = { subtract(5, 2) } <br />
            threePlusOne = { threePlusOne } <br />
            add(5, 2) = { add(5, 2) } <br />
            threeTimesOne = { threeTimesOne } <br />
            multiply(5, 2) = { multiply(5, 2) } <br />
            threeDividedByOne = { threeDividedByOne } <br />
            divide(5, 2) = { divide(5, 2) } <br />
        </>
     )
 }

 export default ArrowFunctions