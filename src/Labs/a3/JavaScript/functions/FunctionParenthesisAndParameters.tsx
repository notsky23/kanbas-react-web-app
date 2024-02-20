function FunctionParenthesisAndParameters() {
    const square  = (a: number) => a * a;
    const plusOne = (a: number) => a + 1;
    const twoSquared = square(2);
    const threePlusOne = plusOne(3);

    return (
        <>
            <h3>Function Parenthesis and Parameters</h3>
            twoSquared  = { twoSquared } <br />
            square(3)  = { square(3) } <br />
            threePlusOne  = { threePlusOne } <br />
            plusOne(5)  = { plusOne(5) } <br />
        </>
     )
 }

 export default FunctionParenthesisAndParameters