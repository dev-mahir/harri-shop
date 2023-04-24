import { useState, useEffect } from "react";
import './price-range.css'

function PriceRangeSlider({ setPriceRange, mxPrice }) {
  const [minPrice, setMinPrice] = useState(2500);
  const [maxPrice, setMaxPrice] = useState(7500);
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(100000);
  const [rangeWidth, setRangeWidth] = useState(0);


  useEffect(() => {
    setRangeWidth(
      ((maxPrice - minValue) / (maxValue - minValue)) * 100 - ((minPrice - minValue) / (maxValue - minValue)) * 100
    );
    setPriceRange({
      min: minPrice,
      max: maxPrice
    })
  }, [minPrice, maxPrice, minValue, maxValue]);


  const handleMinRangeChange = (e) => {
    setMinPrice(parseInt(e.target.value));
  };

  const handleMaxRangeChange = (e) => {
    setMaxPrice(parseInt(e.target.value));
  };

  return (
    <>
      <div className='border-b border-b_gray'>
        <h3 className='text-[17px] text-primary !font-primary'>Price</h3>
      </div>
      <div className="wrapper _price-range">
        <div className="_slider">
          <div className="_progress" style={{ left: `${((minPrice - minValue) / (maxValue - minValue)) * 100}%`, width: `${rangeWidth}%` }}></div>
        </div>
        <div className="_range-input">
          <input type="range" className="_range-min" min={minValue} max={maxValue} value={minPrice} step="100" onChange={handleMinRangeChange} />
          <input type="range" className="_range-max" min={minValue} max={maxValue} value={maxPrice} step="100" onChange={handleMaxRangeChange} />
        </div>

        <div className="_price-input">
          <span>{minPrice}</span>
          <span>{maxPrice}</span>
        </div>
      </div>
    </>

  );
}

export default PriceRangeSlider;
