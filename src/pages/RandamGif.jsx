import Random from "../components/Random";
import Tag from "../components/Tag";

const RandamGif = () => {
  return (
    <>
      <div className="w-screen min-h-screen bg-gray-400 pt-5 pb-5">
        <div className="w-full px-4 sm:px-12 flex flex-col justify-center items-center">
          <div className="bg-white text-center py-3 rounded-lg w-full">
            <h2 className="text-sm sm:text-lg font-extrabold">RANDOM GIF</h2>
          </div>
          <div className="w-full flex flex-col sm:flex-row  space-y-5 sm:space-y-0 sm:space-x-8 md:max-w-10/12 mt-5">
            <Random />
            <Tag />
          </div>
        </div>
      </div>
    </>
  );
};

export default RandamGif;
