import { useShrinkUrl } from "../hooks/useShrinkUrl";

export default function Navbar() {
  const { logoutHandler } = useShrinkUrl();
  return (
    <div className="flex justify-center px-12 h-24 bg-primary/80">
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
  );
}
