import Image from "next/image";
import LeftSideContainer from "./components/containers/LeftSideContainer";
import RightSideContainer from "./components/containers/RightSideContainer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center lg:justify-between p-24 lg:flex-row">
      <div className="lg:flex lg:justify-between w-full">
        <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
          <LeftSideContainer />
        </header>
        <main className="pt-24 lg:w-1/2 lg:py-24">
          <RightSideContainer />
        </main>
      </div>
    </main>
  );
}
