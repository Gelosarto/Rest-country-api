import Toggle from "./Toggle";

export const Navbar = () => {
  return (
    <div className="flex justify-between items-center w-full h-auto p-5 font-bold shadow-lg dark:bg-[#313946] dark:text-white bg-white text-black flex-wrap px-20">
      <div className="flex relative">
        <h1 className="text-[21px]">Where in the world?</h1>
      </div>
      <div className="flex relative">
        <Toggle />
      </div>
    </div>
  );
};
