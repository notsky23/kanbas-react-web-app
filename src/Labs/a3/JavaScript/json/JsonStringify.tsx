function JsonStringify() {
    const squares = [1, 4, 16, 25, 36];
    const text = '["Ford", "BMW", "Audi", "Fiat"]';
    return (
      <>
        <h3>JSON Stringify</h3>
        squares = {JSON.stringify(squares)} <br/>
        squares2 = {JSON.parse(JSON.stringify(squares))} <br/>
        squares3 = {squares} <br/>
      </>
    );
  }
  export default JsonStringify;