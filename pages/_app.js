/* pages/_app.js */
import "../styles/globals.css";
import Link from "next/link";
import "./connect_wallet";

function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-gradient-to-r bg-gradient-to-r from-black via-sky-900 to-black">
      <nav className="border-b p-6">
        <p className="text-white text-4xl font-bold">NFT Marketplace</p>
        <div className="text-center mt-4 mb-4 font-bold	;">
          <Link href="/">
            <a className="mr-4 text-white">Home</a>
          </Link>
          <Link href="/create-nft">
            <a className="mr-6 text-white">Sell NFT</a>
          </Link>
          <Link href="/my-nfts">
            <a className="mr-6 text-white">My NFTs</a>
          </Link>
          <Link href="/dashboard">
            <a className="mr-6 text-white">Dashboard</a>
          </Link>
          <Link href="/connect_wallet">
            <button
              type="button"
              className="text-white bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 p-2 rounded-lg"
            >
              Connect To Wallet
            </button>
          </Link>
        </div>
      </nav>
      <Component {...pageProps} />

      <div className="border-b p-6 bg-gradient-to-r from-black via-black to-black grid grid-cols-4 ml-10 gap-x-5 gap-y-4">
        <div className="mt-4 mb-4 text-white mr-2;">
          When you buy NFT art, you’re buying into the story of a person. What
          they’ve experienced and how they’ve grown—the reason they’re who they
          are today.
        </div>

        <div className=" mt-4 mb-4 ;">
          <div>
            <Link href="/">
              <a className="mr-4 text-white font-bold text-xl">Community</a>
            </Link>
          </div>
          <div>
            <Link href="/">
              <a className="mr-4 text-white">Help Center</a>
            </Link>
          </div>

          <div>
            <Link href="/">
              <a className="mr-4 text-white">Partners</a>
            </Link>
          </div>
          <div>
            <Link href="/">
              <a className="mr-4 text-white">Suggestions</a>
            </Link>
          </div>
          <div>
            <Link href="/">
              <a className="mr-4 text-white">Blog</a>
            </Link>
          </div>
          <div>
            <Link href="/">
              <a className="mr-4 text-white">Newsletter</a>
            </Link>
          </div>
          <div>
            <Link href="https://faucet.polygon.technology/">
              <a className="mr-4 text-white">Polygon Faucet</a>
            </Link>
          </div>
        </div>
        <div>
          <div className=" mt-4 mb-4 font-bold text-xl ;">
            <Link href="/">
              <a className="mr-4 text-white font-bold text-xl">Useful Links</a>
            </Link>
          </div>
          <div>
            <Link href="/">
              <a className="mr-4 text-white">All NFTs</a>
            </Link>
          </div>

          <div>
            <Link href="/">
              <a className="mr-4 text-white">How It Works</a>
            </Link>
          </div>
          <div>
            <Link href="/">
              <a className="mr-4 text-white">Create</a>
            </Link>
          </div>
          <div>
            <Link href="https://mumbai.polygonscan.com/">
              <a className="mr-4 text-white">Polygon TestNet Scan</a>
            </Link>
          </div>
          <div>
            <Link href="/">
              <a className="mr-4 text-white">Privacy & Terms</a>
            </Link>
          </div>
        </div>

        <div className=" mt-4 mb-4 font-bold text-xl	;">
          <Link href="/">
            <a className="mr-4 text-white">Subscribe Us</a>
          </Link>
        </div>
      </div>

      <div className="border-b p-6 bg-gradient-to-r from-black via-black to-black grid grid-cols-2 ml-10 gap-x-5 gap-y-4">
        <div className="mr-4  text-white">
          ©2022 BreakThrough, All Rights Reserved.
        </div>
        <div className="mr-4 text-right text-white">
          Developed by Team BreakThrough
        </div>
      </div>
    </div>
  );
}

export default MyApp;
