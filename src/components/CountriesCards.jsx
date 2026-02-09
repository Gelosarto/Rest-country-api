const CountryCard = ({ src, name, Population, Region, Capital, onClick }) => {
  return (
    <div
      className="flex flex-col w-64 shadow-lg overflow-hidden rounded-md dark:bg-(--theme-bg) dark:text-white bg-white text-black "
      onClick={onClick}
    >
      <img
        src={src}
        alt={`Flag of ${name}`}
        className="w-full h-32 object-cover"
      />
      <div className="flex flex-col p-4 space-y-1.5 pb-10">
        <h5 className="text-sm font-semibold">
          <strong>{name}</strong>
        </h5>
        <h6 className="flex items-center text-xs">
          Population:
          <div className="opacity-70 mx-2.5 font-medium">{Population}</div>
        </h6>
        <h6 className="flex items-center text-xs">
          Region:
          <div className="opacity-70 mx-2.5 font-medium">{Region}</div>
        </h6>
        <h6 className="flex items-center text-xs">
          Capital:
          <div className="opacity-70 mx-2.5 font-medium">{Capital}</div>
        </h6>
      </div>
    </div>
  );
};

export default CountryCard;
