import React from "react";
import nigelImg from "../assets/nigel.jpg";
import saberonImg from "../assets/saberon.jpg";
import markImg from "../assets/mark.jpg";
import magtubaImg from "../assets/magtuba.jpg";
import ansingImg from "../assets/ansing.jpg";
import justineImg from "../assets/justine.jpg";
import bertImg from "../assets/bert.jpg";
import barucImg from "../assets/baruc.jpg";
import photoImg from "../assets/photo.png";

function Feature() {
  return (
    <div name="feature">
      <div className="flex flex-col items-center justify-center text-center">
        <div className="flex flex-col p-2 m-2 max-w-7xl">
          <div className="text-xl md:text-3xl font-medium mb-4">
            SK Chairman and SK Councilors
          </div>

          <div className="flex items-center justify-center lg:flex-row flex-col space-x-4 space-y-4 p-2">
            <div className="flex-col px-6 py-2 w-full md:w-[50%] lg:w-1/4">
              <div className="h-32 w-32 border-2 border-black rounded-full overflow-hidden bg-gray-200">
                <img src={saberonImg} alt="Romeo Saberon" className="" />
              </div>

              <div className="text-md text-white cursor-pointer w-[50%] bg-black lg:mb-16 pr-4 pl-1 py-1">
                SK-Chairman
              </div>
              <a href="https://web.facebook.com/romeo.me143">
                <div className="text-lg font-medium text-stone-600 cursor-pointer hover:text-stone-400">
                  Romeo Saberon
                </div>
              </a>
              <div className="text-left m-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem deserunt, dolorum illo consequatur, natus aut,
                esse dignissimos rem facilis ipsa numquam
              </div>
            </div>
            <div className="flex-col px-6 py-2 w-full md:w-[50%] lg:w-1/4">
              <div className="h-32 w-32 border-2 border-red-700 rounded-full overflow-hidden bg-gray-200">
                <img
                  src={nigelImg}
                  alt="John Nigels Sipe aka Janjan"
                  className=""
                />
              </div>

              <div className="text-md text-white cursor-pointer w-[50%] bg-red-700 lg:mb-16 pr-4 pl-1 py-1">
                SK-Kagawad
              </div>
              <a href="https://web.facebook.com/nigel.sipe">
                <div className="text-lg font-medium text-stone-600 cursor-pointer hover:text-stone-400">
                  John Nigels Sipe
                </div>
              </a>
              <div className="text-left m-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem deserunt, dolorum illo consequatur, natus aut,
                esse dignissimos rem facilis ipsa numquam
              </div>
            </div>
            <div className="flex-col px-6 py-2 w-full md:w-[50%] lg:w-1/4">
              <div className="h-32 w-32 border-2 border-gray-400 rounded-full overflow-hidden bg-gray-200">
                <img src={barucImg} alt="Michael Baruc" className="" />
              </div>

              <div className="text-md text-white cursor-pointer w-[50%] bg-gray-400 lg:mb-16 pr-4 pl-1 py-1">
                SK-Kagawad
              </div>
              <a href="https://web.facebook.com/sagol.ihi2">
                <div className="text-lg font-medium text-stone-600 cursor-pointer hover:text-stone-400">
                  Michael Baruc
                </div>
              </a>

              <div className="text-left m-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem deserunt, dolorum illo consequatur, natus aut,
                esse dignissimos rem facilis ipsa numquam
              </div>
            </div>
            <div className="flex-col px-6 py-2 w-full md:w-[50%] lg:w-1/4">
              <div className="h-32 w-32 border-2 border-green-400 rounded-full overflow-hidden bg-gray-200">
                <img src={bertImg} alt="Roberto Encarnacion" className="" />
              </div>

              <div className="text-md text-white cursor-pointer w-[50%] bg-green-400 lg:mb-16 pr-4 pl-1 py-1">
                SK-Kagawad
              </div>
              <a href="https://web.facebook.com/Godknows.Berto">
                <div className="text-lg font-medium text-stone-600 cursor-pointer hover:text-stone-400">
                  Roberto Encarnacion
                </div>
              </a>

              <div className="text-left m-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem deserunt, dolorum illo consequatur, natus aut,
                esse dignissimos rem facilis ipsa numquam
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center lg:flex-row flex-col space-x-4 space-y-4 p-2">
            <div className="flex-col px-6 py-2 w-full md:w-[50%] lg:w-1/4 order-4">
              <div className="h-32 w-32 border-2 border-yellow-500 rounded-full overflow-hidden bg-gray-200">
                <img src={markImg} alt="Interia Bonaventura" className="" />
              </div>

              <div className="text-md text-white cursor-pointer w-[50%] bg-cyan-400 lg:mb-16 pr-4 pl-1 py-1">
                SK-Kagawad
              </div>
              <a href="https://web.facebook.com/markkevein.inte.3">
                <div className="text-lg font-medium text-stone-600 cursor-pointer hover:text-stone-400">
                  Mark Kevin Inte
                </div>
              </a>
              <div className="text-left m-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem deserunt, dolorum illo consequatur, natus aut,
                esse dignissimos rem facilis ipsa numquam
              </div>
            </div>
            <div className="flex-col px-6 py-2 w-full md:w-[50%] lg:w-1/4">
              <div className="h-32 w-32 border-2 border-yellow-400 rounded-full overflow-hidden bg-gray-200">
                <img src={ansingImg} alt="Jane Ansing" className="" />
              </div>

              <div className="text-md text-white cursor-pointer w-[50%] bg-yellow-400 lg:mb-16 pr-4 pl-1 py-1">
                SK-Kagawad
              </div>
              <a href="https://web.facebook.com/jane.ansing.3">
                <div className="text-lg font-medium text-stone-600 cursor-pointer hover:text-stone-400">
                  Jane Ansing
                </div>
              </a>
              <div className="text-left m-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem deserunt, dolorum illo consequatur, natus aut,
                esse dignissimos rem facilis ipsa numquam
              </div>
            </div>
            <div className="flex-col px-6 py-2 w-full md:w-[50%] lg:w-1/4">
              <div className="h-32 w-32 border-2 border-purple-400 rounded-full overflow-hidden bg-gray-200">
                <img src={magtubaImg} alt="Mary Claire Magtuba" className="" />
              </div>

              <div className="text-md text-white cursor-pointer w-[50%] bg-purple-400 lg:mb-16 pr-4 pl-1 py-1">
                SK-Kagawad
              </div>
              <a href="https://web.facebook.com/clang.clang.7965">
                <div className="text-lg font-medium text-stone-600 cursor-pointer hover:text-stone-400">
                  Claire Magtuba
                </div>
              </a>
              <div className="text-left m-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem deserunt, dolorum illo consequatur, natus aut,
                esse dignissimos rem facilis ipsa numquam
              </div>
            </div>
            <div className="flex-col px-6 py-2 w-full md:w-[50%] lg:w-1/4">
              <div className="h-32 w-32 border-2 border-pink-700 rounded-full overflow-hidden bg-gray-200">
                <img src={justineImg} alt="Paul Justine Bazan" className="" />
              </div>

              <div className="text-md text-white cursor-pointer w-[50%] bg-pink-700 lg:mb-16 pr-4 pl-1 py-1">
                SK-Kagawad
              </div>
              <a href="https://web.facebook.com/pauljustinursaiz.bazan">
                <div className="text-lg font-medium text-stone-600 cursor-pointer hover:text-stone-400">
                  Paul Bazan
                </div>
              </a>
              <div className="text-left m-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem deserunt, dolorum illo consequatur, natus aut,
                esse dignissimos rem facilis ipsa numquam
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center text-center">
        <div className="flex flex-col p-2 m-2 ">
          <div className="text-3xl font-medium">
            Barangay Captain and Councilors
          </div>
          <div className="text-sm mx-2 md:text-xl text-stone-500">
            Meet the candidates of BarangaY Makuguihon for this upcoming
            barangay-level election.
          </div>

          <div className="md:grid flex">
            <div className="flex items-center justify-center md:flex-row flex-col space-x-4  p-2">
              <div className="flex-col px-6 py-2  max-w-7xl">
                <div className="md:h-40 h-28 w-28 md:w-40 rounded-full overflow-hidden bg-gray-200">
                  <img src={photoImg} alt="" className="" />
                </div>

                <div className="text-lg font-medium text-stone-600 cursor-pointer hover:text-stone-400">
                  Michael S. Pabatao
                </div>
                <div className=" italic text-gray-500">Barangay Captain</div>
              </div>
              <div className="flex-col px-6 py-2  ">
                <div className="md:h-40 h-28 w-28 md:w-40 rounded-full overflow-hidden bg-gray-200">
                  <img src={photoImg} alt="" className="" />
                </div>

                <div className="text-lg font-medium text-stone-600 cursor-pointer hover:text-stone-400">
                  No Name
                </div>
                <div className=" italic text-gray-500">Barangay Secretary</div>
              </div>
              <div className="flex-col px-6 py-2 ">
                <div className="md:h-40 h-28 w-28 md:w-40 rounded-full overflow-hidden bg-gray-200">
                  <img src={photoImg} alt="" className="" />
                </div>

                <div className="text-lg font-medium text-stone-600 cursor-pointer hover:text-stone-400">
                  No Name
                </div>
                <div className=" italic text-gray-500">Barangay Treasurer</div>
              </div>
            </div>
            <div className="flex space-x-4  p-2 items-center justify-center md:flex-row flex-col ">
              <div className="flex-col px-6 py-2 ">
                <div className="md:h-40 h-28 w-28 md:w-40 rounded-full overflow-hidden bg-gray-200">
                  <img src={photoImg} alt="" className="" />
                </div>

                <div className="text-lg font-medium text-stone-600 cursor-pointer hover:text-stone-400">
                  No Name
                </div>
                <div className=" italic text-gray-500">Barangay Kagawad</div>
              </div>
              <div className="flex-col px-6 py-2 ">
                <div className="md:h-40 h-28 w-28 md:w-40 rounded-full overflow-hidden bg-gray-200">
                  <img src={photoImg} alt="" className="" />
                </div>

                <div className="text-lg font-medium text-stone-600 cursor-pointer hover:text-stone-400">
                  No Name
                </div>
                <div className=" italic text-gray-500">Barangay Kagawad</div>
              </div>
              <div className="flex-col px-6 py-2 ">
                <div className="md:h-40 h-28 w-28 md:w-40 rounded-full overflow-hidden bg-gray-200">
                  <img src={photoImg} alt="" className="" />
                </div>

                <div className="text-lg font-medium text-stone-600 cursor-pointer hover:text-stone-400">
                  No Name
                </div>
                <div className=" italic text-gray-500">Barangay Kagawad</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feature;
