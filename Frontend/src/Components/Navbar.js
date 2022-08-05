import React from 'react';

export default function Navbar() {
  return (
    <>
      <nav className="bg-purple-800 text-white flex justify-between">
        <div className="h-12 px-5 py-1 font-bold flex">
          <img className="h-14 px-5 pt-1 cursor-pointer" src="https://ouch-cdn2.icons8.com/u9GwxtA70GLTYEtNJmbYcEVsq2bihdJixxjnMCfYQpg/rs:fit:256:555/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvNDk2/LzQ1ZmU1YjZlLTIx/M2ItNDNmZC05YTEy/LTkxYTQzNjlhMTYx/OS5zdmc.png" alt="logo" />
          <p><span className="text-2xl">Phone</span><br /><span>Space</span></p>
        </div>
        <ul className="flex justify-end py-5 px-32 space-x-14">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">About</li>
          <li className="cursor-pointer">Catalogue</li>
          <li className="cursor-pointer">Contact</li>
        </ul>
      </nav>
      <div className="main bg-purple-300 flex justify-around">
        <div className="py-36 w-1/2 px-12">
          <div className="text-3xl">
            Welcome to Phone Space.
          </div>
          <p className="py-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti eum dolor inventore facere est voluptatem quasi eveniet, consectetur suscipit reprehenderit maxime consequatur corrupti?
          </p>
          <div className="buttons space-x-4">
            <button className="bg-purple-50 text-purple-800 px-3 py-2 rounded-3xl hover:bg-purple-800 hover:text-white">Add to cart</button>
            <button className="bg-purple-50 text-purple-800 px-3 py-2 rounded-3xl hover:bg-purple-800 hover:text-white">Buy now</button>
          </div>
        </div>
        <div className="flex items-center justify-center ">
          <img className="h-3/4 " src="https://ouch-cdn2.icons8.com/1ZMb94KNguvRrV3UVcP81-s09ROlyfGrvdHEGg3rc5M/rs:fit:417:456/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvMjE3/LzMyMjY1ODhiLTE0/OTgtNDA3OC1hNzM4/LThlYjhjN2IzNjU0/Zi5wbmc.png" alt="Man talking on phone" />
        </div>
      </div>
    </>
  )
}
