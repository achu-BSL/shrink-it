"use client";
import { isAuth } from "../components/isAuth";
import Background from "../components/Background";
import Navbar from "../components/Navbar";
import ShrinkurlList from "../components/ShrikurlList";
import NewShrinkurl from "../components/NewShrink";

export default isAuth(Home);

function Home() {

  return (
    <div className="min-h-screen h-full bg-primary/20">
      <Background />
      <Navbar  />
      <div className="flex justify-center w-full px-12">
        <div className="w-full max-w-[1380px] ">
          <div className="pt-12 pb-6">
            <h6 className="text-2xl font-poppins font-semibold tracking-tight">
              Shrinked URLs
            </h6>
          </div>
          <ShrinkurlList />
          <NewShrinkurl />
        </div>
      </div>
    </div>
  );
}
