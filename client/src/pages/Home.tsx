import { useEffect, useRef, useState } from "react";
import { useUserStore } from "../store/useUserStore";
import { FaRegCopy } from "react-icons/fa";

interface IShrinkUrl {
  actualUrl: string;
  shrinkUrlId: string;
}

const Home = () => {
  const user = useUserStore((state) => state.user);
  const inputRef = useRef<HTMLInputElement>(null);

  const [urlState, setUrlState] = useState<IShrinkUrl[]>([]);

  const fetchData = async () => {
    try {
      const res = await fetch("http://192.168.49.2:31500/shrinkurl", {
        headers: {
          authorization: user!.token,
        },
      });
      if (res.ok) {
        const data = (await res.json()) as IShrinkUrl[];
        console.log(data);
        setUrlState(data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const shrinkButtonHandler = async () => {
    const value = inputRef.current!.value;
    //validate value
    const body = { actualUrl: value };
    try {
      const res = await fetch("http://192.168.49.2:31500/shrinkurl", {
        method: "POST",
        headers: {
          authorization: user!.token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      console.log(res.status);
      if (res.ok) {
        const data = (await res.json()) as IShrinkUrl;
        console.log(data);
        setUrlState((prev) => [...prev, data]);
        inputRef.current!.value = "";
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const copyButtonHandler = (shrinkUrlId: string) => {
    const url = `http://192.168.49.2:31500/shrinkurl/${shrinkUrlId}`;
    navigator.clipboard.writeText(url);
  };

  return (
    <div className="min-h-screen bg-slate-200">
      <div className="flex justify-center px-12 h-24 bg-primary">
        <div className="flex-1 flex justify-between h-full items-center max-w-[1380px]">
          <div>
            <h1 className="text-xl font-semibold ">Shrink It</h1>
          </div>
          <div>
            <h5 className="font-poppins">Username</h5>
          </div>
        </div>
      </div>

      <div className="flex justify-center w-full px-12">
        <div className="absolute bg-purple-400 rounded-full w-32 h-32 top-28 -left-8 filter blur-2xl opacity-80"></div>

        <div className="w-full max-w-[1380px] h-screen">
          <div className="py-4">
            <h6 className="text-xl font-roboto font-semibold">Shrinked URLs</h6>
          </div>
          <div className="flex flex-col gap-2">
            {urlState.map((url) => (
              <div
                key={url.shrinkUrlId}
                className="flex bg-gray-100 border-2 border-white rounded-lg backdrop-blur-md bg-opacity-50 px-6 py-3"
              >
                <div className="flex-1">
                  <p className="font-poppins">{url.actualUrl}</p>
                  <p className="font-poppins">
                    http://192.168.49.2:31500/shrinkurl/{url.shrinkUrlId}
                  </p>
                </div>
                <button className="" onClick={copyButtonHandler.bind(null, url.shrinkUrlId)}>
                  <FaRegCopy className="hover:opacity-80 border-black" size={20}/>
                </button>
              </div>
            ))}
          </div>

          <div className="fixed max-w-[1320px] flex bottom-3 right-[50%] translate-x-[50%]">
            <input
              ref={inputRef}
              className="w-screen  h-[50px] rounded-s-lg text-lg px-4"
            />
            <button
              onClick={shrinkButtonHandler}
              className=" border-1 border-black bg-primary px-4 text-lg font-medium rounded-e-lg"
            >
              Shrink
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
