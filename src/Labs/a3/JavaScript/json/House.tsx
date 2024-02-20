function House() {
    const house = {
      bedrooms: 4,
      bathrooms: 2.5,
      squareFeet: 2000,
      address: {
        street: "Via Roma",
        city: "Roma",
        state: "RM",
        zip: "00100",
        country: "Italy",
      },
      owners: ["Alice", "Bob"],
    };

    return (
      <div>
        <h3>House</h3>
        <h4>bedrooms</h4>
        {house.bedrooms}
        <h4>bathrooms</h4>
        {house.bathrooms}
        <h4>Data</h4>
        <pre>{JSON.stringify(house, null, 2)}</pre>
      </div>
    )
  }
  export default House;