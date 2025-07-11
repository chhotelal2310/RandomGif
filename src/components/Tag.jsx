import { useState } from "react";
import { useGif } from "../hooks/useGif,";
import Spinner from "../Spinner/Spinner";

const Tag = () => {
  const [tag, setTag] = useState("");
  const { gif, loading, fetchData } = useGif();
  return (
    <>
      <div className="w-full rounded-lg flex flex-col  items-center py-3 border border-gray-500 px-2">
        <div className="w-full text-center">
          <h2 className="font-bold underline">RANDOM GIF</h2>
        </div>

        <div className="w-full   max-w-sm h-50 md:h-70 my-3 object-fill rounded-md border border-gray-500 flex justify-center items-center">
          {loading && <Spinner />}
          {!loading && (
            <img src={gif} alt="Image" className="w-full h-full rounded-md" />
          )}
        </div>

        <div className="w-full  py-1.5 rounded-lg cursor-pointer text-center flex flex-col justify-center items-center space-y-3">
          <input
            placeholder="Enter the gif name."
            className="text-lg font-semibold  w-full max-w-[75%] bg-white py-1.5 rounded-lg  text-center placeholder:text-gray-700"
            value={tag}
            onChange={(e) => setTag(e.target.value)}
          />

          <button
            className="text-lg font-semibold  w-full max-w-[75%] bg-blue-700 py-1.5 rounded-lg cursor-pointer text-center text-white"
            onClick={() => fetchData(tag)}
          >
            GENERATE
          </button>
        </div>
      </div>
    </>
  );
};

export default Tag;
