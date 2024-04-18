import { FaRegCopy } from "react-icons/fa";
import { useShrinkUrl } from "../hooks/useShrinkUrl";
import { BarLoader } from "react-spinners";
import { noData } from "../assets";

export default function ShrinkurlList() {
  const { isFetching, urlState, copyButtonHandler} = useShrinkUrl();
  return (
    <div className="flex flex-col gap-2 mb-20">
      {isFetching ? (
        <BarLoader />
      ) : urlState.length === 0 ? (
        <img className="self-center w-[300px]" src={noData.src} alt="" />
      ) : (
        <>
          {urlState.map((url) => (
            <div
              key={url.shrinkUrlId}
              className="flex bg-gray-100 border-2 border-white rounded-lg backdrop-blur-md bg-opacity-50 px-6 py-3"
            >
              <div className="flex-1">
                <p className="font-poppins">{url.actualUrl}</p>
                <p className="font-poppins text-primary">
                  {`${process.env.NEXT_PUBLIC_SERVER}/shrinkurl/${url.shrinkUrlId}`}
                </p>
              </div>
              <button onClick={copyButtonHandler.bind(null, url.shrinkUrlId)}>
                <FaRegCopy
                  className="hover:opacity-80 border-black"
                  size={20}
                />
              </button>
            </div>
          ))}
        </>
      )}
    </div>
  );
}
