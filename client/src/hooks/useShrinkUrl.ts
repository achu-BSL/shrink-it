import { useEffect, useRef, useState } from "react";
import { useUserStore } from "../store/useUserStore";
import toast from "react-hot-toast";
import {
  createShrinkurlRequest,
  fetchShrinkUrls,
  validate,
} from "../helper/ShrinkurlHelper";

interface IShrinkUrl {
  actualUrl: string;
  shrinkUrlId: string;
}

export const useShrinkUrl = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const user = useUserStore((state) => state.user);
  const updateUser = useUserStore((state) => state.updateUser);
  const [isFetching, setIsFetching] = useState(false);
  const [isCreating, setIsCreating] = useState(false);

  const [urlState, setUrlState] = useState<IShrinkUrl[]>([]);

  const fetchData = async () => {
    try {
      setIsFetching(true);
      const res = await fetchShrinkUrls(user!.token);
      setIsFetching(false);
      if (res.ok) {
        const data = (await res.json()) as IShrinkUrl[];
        setUrlState(data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const shrinkButtonHandler = async () => {
    const url = inputRef.current!.value;
    const isValid = validate(url);
    if (!isValid) return;
    try {
      setIsCreating(true);
      const res = await createShrinkurlRequest(user!.token, url);
      setIsCreating(false);
      if (res.ok) onSuccessCreateShrinkUrl(res);
    } catch (err) {
      console.log(err);
    }
  };

  const copyButtonHandler = (shrinkUrlId: string) => {
    const url = `http://192.168.49.2:31500/shrinkurl/${shrinkUrlId}`;
    navigator.clipboard.writeText(url);
    toast("Copied to clipboard");
  };

  const onKeyUpInputHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if(e.key === "Enter") {
        shrinkButtonHandler();
    }
  }

  const logoutHandler = () => {
    updateUser(null);
  };

  useEffect(() => {
    fetchData();
  }, []);

  async function onSuccessCreateShrinkUrl(res: Response) {
    const data = (await res.json()) as IShrinkUrl;
    setUrlState((prev) => [...prev, data]);
    inputRef.current!.value = "";
  }

  return {
    urlState,
    inputRef,
    isFetching,
    isCreating,
    shrinkButtonHandler,
    copyButtonHandler,
    logoutHandler,
    onKeyUpInputHandler
  };
};
