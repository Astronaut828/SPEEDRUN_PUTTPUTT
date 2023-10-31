import Link from "next/link";
import type { NextPage } from "next";
import { MetaHeader } from "~~/components/MetaHeader";
import { Instructions } from "~~/components/Instructions";

const Home: NextPage = () => {
  return (
    <>
      <MetaHeader />
      <div className="flex items-center flex-col flex-grow pt-8">
        <div className="px-5">
          <h1 className="text-center mb-8">
            <span className="block text-2xl mb-2">Welcome to</span>
            <img src="/PUTTPUTT-LOGO-UI.png" alt="PuttPutt Logo" className="h-80" />
          </h1>
          </div>
          <div>
          <p className="text-center text-lg">
          Embark on an adventure through the virtual greens of the Ethereum network!<br /> 
          SpeedRun_PuttPutt powered by 🏗 Scaffold-ETH 2 is not just any ordinary putt-putt game;<br /> 
          It’s a fun dive into the world of Smart Contracts where each putt represents an Ethereum transaction. Get acquainted with essential tools and links,<br /> 
          compile and deploy contracts using 👷‍♀️ HardHat, and engage with Ethereum components in a React environment.<br />  
          Whether you're an Ethereum novice or a seasoned dApp developer, this game is crafted to sharpen your skills and test your blockchain knowledge.<br /> 
          Grab your virtual putter and may your putts be precise and your gas fees low!{" "}
          </p>
          <p className="text-center text-lg">
            What we will explore in this game:{" "}
          </p>
        </div>

        <div className="flex-grow bg-base-300 w-full mt-8 px-8 py-12">
          <div className="flex justify-center items-center gap-12 flex-col sm:flex-row">
            <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
              <p className="block text-4xl font-bold">
                 👀{" "}
              </p>
              <p>
                Learn and experience the essential elements of Ethereum by engaging with smart contracts, deploying them, and interacting with them just as you would on a block explorer.{" "}
              </p>
            </div>
            <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
              <p className="block text-4xl font-bold">
                 🤿{" "}
              </p>
              <p>
                Dive deep into the essential tools of Ethereum development, from HardHat for compiling and deploying to understanding the workings of gas, burner wallets, and transactions.{" "}
              </p>
            </div>
            <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
              <p className="block text-4xl font-bold">
                🧭{" "}
              </p>
              <p>
                Enhance your learning journey with valuable video content and links, uncovering clues, understanding the Ethereum ecosystem and discovering best practices in the space.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <Instructions />  
    </>
  );
};

export default Home;
