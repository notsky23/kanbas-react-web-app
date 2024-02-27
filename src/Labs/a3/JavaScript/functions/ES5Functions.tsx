function add(a: number, b:number) {
    return a + b
 }
function subtract(a: number, b:number) {
    return a - b
 }
function multiply(a: number, b:number) {
    return a * b
 }
function divide(a: number, b:number) {
    return a / b
 }


 function ES5Functions() {
    const twoPlusFour = add(2, 4);
    console.log(twoPlusFour);

    const twoMinusFour = subtract(2, 4);
    const twoTimesFour = multiply(2, 4);
    const twoDividedByFour = divide(2, 4);

    return (
        <>
            <h3>Legacy ES5 Functions</h3>
            twoPlusFour = { twoPlusFour } <br />
            add(5, 4) = { add(5, 4) } <br />
            twoMinusFour = { twoMinusFour } <br />
            subtract(5, 4) = { subtract(5, 4) } <br />
            twoTimesFour = { twoTimesFour } <br />
            multiply(5, 4) = { multiply(5, 4) } <br />
            twoDividedByFour = { twoDividedByFour } <br />
            divide(5, 4) = { divide(5, 4) } <br />
        </>
     )
 }

 export default ES5Functions