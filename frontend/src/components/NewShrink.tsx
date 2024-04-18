import { useShrinkUrl } from "../hooks/useShrinkUrl";

export default function NewShrinkurl() {
  const { isCreating, inputRef, onKeyUpInputHandler, shrinkButtonHandler } =
    useShrinkUrl();
  return (
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
  );
}
