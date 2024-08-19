import React from 'react';

const CarList = () => {
  const cars = [
    { name: '2017 Toyota Highlander V4', location: '1944 Scrimba Ln\nYoungstown, OH 44481', price: '$17,400' },
    { name: '2012 Toyota Tundra 4x4', location: '301 Fantasy Dr\nBeverly Hills, CA 90210', price: '$23,900' },
    { name: '2004 Dodge Ram 4x4', location: '9104 Falsety Ave\nAnonyVille, FL 40440', price: '$7,998' },
    { name: '2021 Tesla Model 3', location: '993 Fiscal St\nBoulder, CO 93391', price: '$37,490' }
    // Add more car objects as needed
  ];

  const [heartedCars, setHeartedCars] = React.useState<string[]>([]);

  const changeHeart = (carName: string) => {
    console.log(`${carName} heart icon clicked`);
    // Example logic: toggle the car's liked status
    const isHearted = heartedCars.includes(carName);
    if (isHearted) {
      setHeartedCars(prevState => prevState.filter(name => name !== carName));
    } else {
      setHeartedCars(prevState => [...prevState, carName]);
    }
  };

  return (
    <div className="container">
      <header>
        <div className="headings">
          <h1>Available Cars</h1>
          <p>There are 15 cars that match your criteria</p>
        </div>
        <div className="options">
          <div className="icons">
            <input type="text" className="search" placeholder="Search..." />
            <img src="/menu.svg" className="menu" alt="Menu" />
          </div>
          <div className="filter">
            <div className="chk-container">
              <input type="checkbox" id="new" />
              <label htmlFor="new">New cars</label>
            </div>
            {/* Repeat similar divs for other filters */}
          </div>
        </div>
      </header>

      <main>
        <div className="labels">
          <p className="lbl-details">Car Details</p>
          <p className="lbl-location">Location</p>
          <p className="lbl-price">Price</p>
          <p className="lbl-action">Action</p>
        </div>

        {cars.map((car, index) => (
          <div key={index} className="cars">
            <button className="car-name">{car.name}</button>
            <p className="car-location">{car.location}</p>
            <div className="cols-2">
              <p className="car-price">{car.price}</p>
              <i onClick={() => changeHeart(car.name)} className="far fa-heart fa-lg"></i>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default CarList;
