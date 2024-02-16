import { useEffect, useRef, useState } from "react";
import { useUserStore } from "../store/useUserStore";

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

  return (
    <div className="min-h-screen bg-slate-200">
      <div className="flex justify-center h-24 bg-primary">
        <div className="flex-1 flex justify-between h-full items-center max-w-[1380px]">
          <div>
            <h1 className="text-xl font-semibold">Shrink It</h1>
          </div>
          <div>
            <h5>Username</h5>
          </div>
        </div>
      </div>

      <div className="flex justify-center w-full">
        <div className="w-full max-w-[1380px] h-screen">
          <div className="py-4">
            <h6 className="text-lg">Shrinked URLs</h6>
          </div>
          <div className="flex flex-col gap-2">
            {urlState.map((url) => (
              <div
                key={url.shrinkUrlId}
                className="px-6 py-3 border-2 border-black w-full rounded-md"
              >
                <p>{url.actualUrl}</p>
                <p>http://192.168.49.2:31500/shrinkurl/{url.shrinkUrlId}</p>
                <button
                  onClick={() => navigator.clipboard.writeText(url.shrinkUrlId)}
                >
                  COPY
                </button>
              </div>
            ))}
            ;
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
