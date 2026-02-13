import { useEffect, useState } from "react";
import CountriesCards from "./components/CountriesCards";
import { Navbar } from "./components/Navbar";
import { Search } from "./components/Search";
import { Filter } from "./components/Filter";
import DetailPanel from "./components/DetailPanel";

function App() {
  const [data, setData] = useState([]);
  const [region, setRegion] = useState("");
  const [search, setSearch] = useState("");
  const [detailPanel, setDetailPanel] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(null);

  const filteredData = data
    .filter((country) => (region ? country.region === region : true))
    .filter((country) =>
      country.name.common.toLowerCase().includes(search.toLowerCase()),
    );

  useEffect(() => {
    fetch(
      "https://restcountries.com/v3.1/all?fields=name,cca3,population,region,subregion,capital,currencies,languages,borders,flags",
    )
      .then((res) => {
        if (!res.ok) throw new Error("Errore API");
        return res.json();
      })
      .then((json) => setData(json))
      .catch((err) => console.error(err));
  }, []);

  if (detailPanel) {
    return (
      <>
        <Navbar></Navbar>
        <DetailPanel
          onClick={() => {
            setDetailPanel(false);
            setSelectedCountry(null);
          }}
          country={selectedCountry}
        ></DetailPanel>
      </>
    );
  } else {
    return (
      <>
        <Navbar></Navbar>
        <div className="flex items-center justify-center flex-wrap h-24 md:h-32 mt-5 gap-4">
          <Search value={search} onChange={setSearch} />
          <Filter value={region} onChange={setRegion} />
        </div>
        <div className="flex flex-row flex-wrap gap-0.5 items-center justify-center">
          {data.length === 0 && (
            <div className="flex justify-center items-center">
              <svg
                className="animate-spin h-8 w-8 text-white"
                xmlns="http://www.w3.org"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-20"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-90"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            </div>
          )}

          {filteredData.map((country) => (
            <div className="m-10">
              <CountriesCards
                key={country.cca3}
                src={country.flags.png}
                name={country.name.common}
                Population={country.population.toLocaleString()}
                Region={country.region}
                Capital={country.capital?.[0] ?? "N/A"}
                onClick={() => {
                  setSelectedCountry(country);
                  setDetailPanel(true);
                }}
              ></CountriesCards>
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default App;
