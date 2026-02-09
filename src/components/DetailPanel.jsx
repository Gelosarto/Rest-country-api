const DetailPanel = ({ onClick, country }) => {
  let borders = country.borders || [];

  return (
    <div className="p-4 md:p-10 max-w-7xl mx-auto">
      <button
        className="flex items-center gap-2 px-6 py-2 mb-10 rounded-md shadow-[0_0_7px_rgba(0,0,0,0.3)] hover:opacity-80 transition-all bg-white dark:bg-(--theme-bg)"
        onClick={onClick}
      >
        <svg
          xmlns="http://www.w3.org"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
          />
        </svg>
        <span>Back</span>
      </button>
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-24">
        <div className="w-full lg:w-1/2">
          <img
            src={country.flags.png}
            alt={`${country.name.common} flag`}
            className="w-full h-auto shadow-md rounded-sm"
          />
        </div>
        <div className="w-full lg:w-1/2 flex flex-col py-4">
          <h2 className="text-3xl font-extrabold mb-6">
            {country.name.common}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-8 mb-10">
            <div className="space-y-3">
              <p className="font-semibold text-sm">
                Native Name:{" "}
                <span className="font-normal opacity-70 ml-1">
                  {Object.values(country.name.nativeName)[0]?.common}
                </span>
              </p>
              <p className="font-semibold text-sm">
                Population:{" "}
                <span className="font-normal opacity-70 ml-1">
                  {country.population.toLocaleString()}
                </span>
              </p>
              <p className="font-semibold text-sm">
                Region:{" "}
                <span className="font-normal opacity-70 ml-1">
                  {country.region}
                </span>
              </p>
              <p className="font-semibold text-sm">
                Sub Region:{" "}
                <span className="font-normal opacity-70 ml-1">
                  {country.subregion}
                </span>
              </p>
              <p className="font-semibold text-sm">
                Capital:{" "}
                <span className="font-normal opacity-70 ml-1">
                  {country.capital?.[0] ?? "N/A"}
                </span>
              </p>
            </div>

            <div className="space-y-3 mt-8 md:mt-0">
              <p className="font-semibold text-sm">
                Currencies:{" "}
                <span className="font-normal opacity-70 ml-1">
                  {country.currencies
                    ? Object.values(country.currencies)
                        .map((c) => c.name)
                        .join(", ")
                    : "N/A"}
                </span>
              </p>
              <p className="font-semibold text-sm">
                Languages:{" "}
                <span className="font-normal opacity-70 ml-1">
                  {country.languages
                    ? Object.values(country.languages).join(", ")
                    : "N/A"}
                </span>
              </p>
            </div>
          </div>
          {borders.length > 0 && (
            <div className="flex flex-col md:flex-row md:items-center gap-4 mt-auto">
              <p className="font-semibold text-sm whitespace-nowrap">
                Border Countries:
              </p>
              <div className="flex flex-wrap gap-2">
                {borders.map((border) => (
                  <span
                    key={border}
                    className="px-6 py-1 text-xs rounded-sm shadow-[0_0_3px_rgba(0,0,0,0.2)] bg-white dark:bg-(--theme-bg)"
                  >
                    {border}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DetailPanel;
