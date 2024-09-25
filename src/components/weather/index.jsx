import Search from "../search";
import { useEffect, useState } from "react";

function Weather() {
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useState(null);

  async function fetchWeatherData(getCountry) {
    try {
    } catch (error) {}
  }
  function handleClick() {}

  useEffect(() => {}, []);
  return (
    <div>
      <Search
        searchParams={searchParams}
        setSearchParams={setSearchParams}
        handleClick={handleClick}
      />
    </div>
  );
}

export default Weather;
