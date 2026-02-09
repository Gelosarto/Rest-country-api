import Toggle from "./Toggle";

export const Navbar = () => {
  return (
    <div className="flex content-between w-full h-20 items-center font-bold swadow-lg dark:bg-(--theme-bg) dark:text-white bg-white text-black">
      <h1 className="text-[21px] mx-20">Where in the word?</h1>
      <Toggle></Toggle>
    </div>
  );
};
