import { useState } from "react";
import MainContent from "./MainContent";

function CountryForm() {
  const [country, setCountry] = useState("");

  const handleOnChange = (e) => {
    setCountry(e.target.value);
  };

  return (
    <>
      <h3>Country Form</h3>
      <p>
        <label htmlFor="countries">Country: </label>
        <select name="countries" value={country} onChange={handleOnChange}>
          <option value="Turkey">Turkey</option>
          <option value="Russia">Russia</option>
          <option value="France">France</option>
          <option value="Netherlands">Netherlands</option>
        </select>
      </p>
      <MainContent country={country}></MainContent>
    </>
  );
}

export default CountryForm;
