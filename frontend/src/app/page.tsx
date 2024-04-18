"use client";
import { FaRegCopy } from "react-icons/fa";
import { BarLoader } from "react-spinners";
import { useShrinkUrl } from "../hooks/useShrinkUrl";
import { isAuth } from "../components/isAuth";
import { noData } from "../assets";
import Background from "../components/Background";

export default isAuth(Home);

function Home() {
  const {
    inputRef,
    urlState,
    isFetching,
    isCreating,
    shrinkButtonHandler,
    copyButtonHandler,
    logoutHandler,
    onKeyUpInputHandler,
  } = useShrinkUrl();

  return (
    <div className="min-h-screen h-full bg-primary/20">
      <Background />
      <div className="flex justify-center px-12 h-24 bg-primary">
        <div className="flex-1 flex justify-between h-full items-center max-w-[1380px]">
          <div>
            <h1 className="text-xl font-semibold font-lora">Shrink-It</h1>
          </div>
          <div>
            <button
              onClick={logoutHandler}
              className="font-poppins font-medium hover:opacity-45"
            >
              Logout
            </button>
          </div>
        </div>
      </div>

      <div className="flex justify-center w-full px-12">
        <div className="w-full max-w-[1380px] ">
          <div className="pt-12 pb-6">
            <h6 className="text-2xl font-poppins font-semibold tracking-tight">
              Shrinked URLs
            </h6>
          </div>
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
                    <button
                      onClick={copyButtonHandler.bind(null, url.shrinkUrlId)}
                    >
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

          <div className="fixed max-w-[1120px] flex bottom-3 right-[50%] translate-x-[50%]">
            <input
              onKeyUp={onKeyUpInputHandler}
              ref={inputRef}
              className="w-screen  h-[50px] rounded-s-lg text-lg px-4"
            />
            <button
              onClick={shrinkButtonHandler}
              className=" border-1 border-black bg-primary px-4 text-lg font-medium rounded-e-lg"
              disabled={isCreating}
            >
              Shrink
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
