import { useGif } from "../hooks/useGif,";
import Spinner from "../Spinner/Spinner";

const Random = () => {
  const { gif, loading, fetchData } = useGif();
  return (
    <>
      <div className="w-full rounded-lg  flex flex-col items-center py-3 border border-gray-500 px-2">
        <div className="w-full text-center ">
          <h2 className="font-bold underline">A RANDOM GIF</h2>
        </div>

        <div className="w-full max-w-sm h-50 md:h-70 my-3 object-fill rounded-md border border-gray-500 flex justify-center items-center">
          {loading && <Spinner />}
          {!loading && (
            <img src={gif} alt="Image" className="w-full h-full rounded-md" />
          )}
        </div>

        <div className="w-full max-w-[75%] bg-blue-700 hover:bg-blue-600 py-1.5 rounded-lg cursor-pointer text-center">
          <button
            className="text-lg font-semibold cursor-pointer w-full text-white"
            onClick={() => fetchData()}
          >
            GENERATE
          </button>
        </div>
      </div>
    </>
  );
};

export default Random;
