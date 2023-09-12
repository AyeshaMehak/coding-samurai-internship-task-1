import Image from "next/image";
import { useState } from "react";
import { FiDelete } from "react-icons/fi";
import { FaDivide } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import React from "react";

export default function Calculator() {
 const [displayValue, setDisplayValue] = useState("0");

 function handleButtonClick(value) {
  if (value === "C") {
   // Clear the whole input
   setDisplayValue("0");
  } else if (value === "D") {
   // Delete the previous character (backspace)
   setDisplayValue(displayValue.slice(0, -1));
  } else {
   // Append the clicked value
   if (displayValue === "0" && value !== "C") {
    setDisplayValue(value);
   } else {
    setDisplayValue(displayValue + value);
   }
  }
 }

 const calculateResult = () => {
  try {
   // Use JavaScript's eval to calculate the result
   const result = eval(displayValue);
   setDisplayValue(result.toString());
  } catch (error) {
   setDisplayValue("Invalid value");
  }
 };
 return (
  <>
   <section className="min-h-screen flex justify-center items-center">
    {/* calculator bg div */}
    <div className="shadow2 sm:w-[25rem] sm:h-[35rem] w-[20rem] bg-transparent border border-gray-600 rounded-3xl drop-shadow-2xl">
     {/* output div  */}
     <div className="flex justify-center">
      <input
       className="w-[19rem] h-[8rem] bg-transparent rounded-xl my-5 text-right text-white text-5xl font-semibold placeholder-[baseline] relative"
       value={displayValue}
       readOnly
      />
     </div>
     {/* buttons row1  */}
     <div className="flex items-center justify-center my-2">
      {/* Clear */}
      <button
       className="shadow1 bg-white mx-2 inline-flex p-5 rounded-full w-[4rem] h-[4rem] items-center text-center justify-center duration-200 text-orange-600  relative font-semibold text-lg"
       onClick={() => handleButtonClick("C")}
      >
       C
      </button>

      {/* delete x */}
      <button
       className="shadow1 bg-white mx-2 inline-flex p-5 rounded-full w-[4rem] h-[4rem] items-center text-center justify-center duration-200 text-orange-600  relative font-bold text-xl"
       onClick={() => handleButtonClick("D")}
      >
       <FiDelete className="" />
      </button>

      {/* divide /  */}
      <button
       className="shadow1 bg-white mx-2 inline-flex p-5 rounded-full w-[4rem] h-[4rem] items-center text-center justify-center duration-200 text-orange-600  relative font-thin"
       onClick={() => handleButtonClick("/")}
      >
       <FaDivide />
      </button>
      {/* multiply * */}
      <button className="shadow1 bg-white mx-2 inline-flex p-5 rounded-full w-[4rem] h-[4rem] items-center text-center justify-center duration-200 text-orange-600  relative">
       <RxCross2 className="text-lg" onClick={() => handleButtonClick("*")} />
      </button>
     </div>

     {/* buttons row-2  */}
     {/* 07 */}
     <div className="flex items-center justify-center my-2">
      <button
       className="shadow1 bg-gradient-to-br from-gray-300 via-gray-400 to-white relative mx-2 inline-flex p-5 rounded-full w-[4rem] h-[4rem] items-center text-center justify-center duration-200 text-gray-700 hover:text-black"
       onClick={() => handleButtonClick("7")}
      >
       7
      </button>
      {/* 08 */}
      <button
       className="shadow1 bg-gradient-to-br from-gray-300 via-gray-400 to-white relative mx-2 inline-flex p-5 rounded-full w-[4rem] h-[4rem] items-center text-center justify-center duration-200 text-gray-700 hover:text-black"
       onClick={() => handleButtonClick("8")}
      >
       8
      </button>
      {/* 09 */}
      <button
       className="shadow1 bg-gradient-to-br from-gray-300 via-gray-400 to-white relative mx-2 inline-flex p-5 rounded-full w-[4rem] h-[4rem] items-center text-center justify-center duration-200 text-gray-700 hover:text-black"
       onClick={() => handleButtonClick("9")}
      >
       9
      </button>
      {/* subtraction - */}
      <button
       className="shadow1 text-3xl bg-white mx-2 inline-flex p-5 rounded-full w-[4rem] h-[4rem] items-center text-center justify-center duration-200 text-orange-600  relative font-semibold "
       onClick={() => handleButtonClick("-")}
      >
       -
      </button>
      </div>

     {/* buttons row-3  */}
     {/* 04*/}
     <div className="flex items-center justify-center my-2">
      <button
       className="shadow1 bg-gradient-to-br from-gray-300 via-gray-400 to-white relative mx-2 inline-flex p-5 rounded-full w-[4rem] h-[4rem] items-center text-center justify-center duration-200 text-gray-700 hover:text-black"
       onClick={() => handleButtonClick("4")}
      >
       4
      </button>
      {/* 05 */}
      <button
       className="shadow1 bg-gradient-to-br from-gray-300 via-gray-400 to-white relative mx-2 inline-flex p-5 rounded-full w-[4rem] h-[4rem] items-center text-center justify-center duration-200 text-gray-700 hover:text-black"
       onClick={() => handleButtonClick("5")}
      >
       5
      </button>
      {/* 06 */}
      <button
       className="shadow1 bg-gradient-to-br from-gray-300 via-gray-400 to-white relative mx-2 inline-flex p-5 rounded-full w-[4rem] h-[4rem] items-center text-center justify-center duration-200 text-gray-700 hover:text-black"
       onClick={() => handleButtonClick("6")}
      >
       6
      </button>
      {/* addition + */}
      <button
       className="shadow1 bg-white mx-2 inline-flex p-5 rounded-full w-[4rem] h-[4rem] items-center text-center justify-center duration-200 text-orange-600  relative text-2xl"
       onClick={() => handleButtonClick("+")}
      >
       +
      </button>
     </div>

     {/* buttons row-4  */}
     {/* 01 */}
     <div className="flex items-center justify-center my-2">
      <button
       className="shadow1 bg-gradient-to-br from-gray-300 via-gray-400 to-white relative mx-2 inline-flex p-5 rounded-full w-[4rem] h-[4rem] items-center text-center justify-center duration-200 text-gray-700 hover:text-black"
       onClick={() => handleButtonClick("1")}
      >
       1
      </button>
      {/* 02 */}
      <button
       className="shadow1 bg-gradient-to-br from-gray-300 via-gray-400 to-white relative mx-2 inline-flex p-5 rounded-full w-[4rem] h-[4rem] items-center text-center justify-center duration-200 text-gray-700 hover:text-black"
       onClick={() => handleButtonClick("2")}
      >
       2
      </button>
      {/* 03 */}
      <button
       className="shadow1 bg-gradient-to-br from-gray-300 via-gray-400 to-white relative mx-2 inline-flex p-5 rounded-full w-[4rem] h-[4rem] items-center text-center justify-center duration-200 text-gray-700 hover:text-black"
       onClick={() => handleButtonClick("3")}
      >
       3
      </button>
       {/* decimal . */}
       <button
        className="shadow1 bg-gradient-to-br from-gray-300 via-gray-400 to-white relative mx-2 inline-flex p-5 rounded-full w-[4rem] h-[4rem] items-center text-center justify-center font-bold text-xl duration-200 text-gray-700 hover:text-black"
        onClick={() => handleButtonClick(".")}
       >
        .
       </button>
     </div>

     {/* buttons row-5  */}
     <div className="flex items-center justify-center my-2">
     {/* double zero 00 */}
       <button
        className="shadow1 bg-gradient-to-br from-gray-300 via-gray-400 to-white relative mx-2 inline-flex p-5 rounded-full w-[4rem] h-[4rem] items-center text-center justify-center duration-200 text-gray-700 hover:text-black"
        onClick={() => handleButtonClick("00")}
       >
        00
       </button>
       {/* zero 0 */}
       <button
        className="shadow1 bg-gradient-to-br from-gray-300 via-gray-400 to-white relative mx-2 inline-flex p-5 rounded-full w-[4rem] h-[4rem] items-center text-center justify-center duration-200 text-gray-700 hover:text-black"
        onClick={() => handleButtonClick("0")}
       >
        0
       </button>
       {/* equals = */}
       <button
        className="shadow1 bg-white mx-2 inline-flex p-5 rounded-full w-[9rem] h-[4rem] items-center text-center justify-center duration-200 text-orange-600  relative text-2xl font-bold"
        onClick={calculateResult}
       >
        =
       </button>
      </div>

     </div>
   </section>
   <Image
    src={require("../public/images/corner1.png")}
    className="absolute top-0 left-0 xl:w-[24rem] sm:w-[19rem] max-sm:hidden "
    width={400}
    height={400}
    alt="border"
   />
   <Image
    src={require("../public/images/corner1.png")}
    className="absolute bottom-0 right-0 rotate-180 xl:w-[24rem] sm:w-[19rem] max-sm:hidden "
    width={400}
    height={400}
    alt="border"
   />
  </>
 );
}
