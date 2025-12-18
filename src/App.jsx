import { useState } from "react";
export default function Counter() {
    // Creating Variable for counter 
    const [count , setCount] = useState(0)
  //   For creating HTML structure write in inside return
  return (
      <div className="bg-fuchsia-400 p-12 m-2 md:ms-10 lg:ms-120 rounded-4xl text-center shadow-2xl font-Outfit">
        <h1 className="text-3xl font-bold mb-5 animate-bounce">Counter App by React</h1>
        <p className="text-black mb-5 text-xl">You clicked {count} times</p>
        <button className="bg-fuchsia-700 p-3 m-3 border-0 rounded-lg cursor-pointer
        animate-pulse hover:animate-bounce hover:bg-fuchsia-300 hover:text-fuchsia-800"
        onClick={() => setCount(count + 1)}>
          Increment (+)
        </button>
        <button className="bg-fuchsia-700 p-3 m-3 border-0 rounded-lg cursor-pointer
        animate-pulse hover:animate-bounce hover:bg-fuchsia-300 hover:text-fuchsia-800"
        onClick={() => setCount(count === 0)}>
          Reset
        </button>
        <button className="bg-fuchsia-700 p-3 m-3 border-0 rounded-lg cursor-pointer
        animate-pulse hover:animate-bounce hover:bg-fuchsia-300 hover:text-fuchsia-800"
        onClick={() => setCount(count - 1)}>
          Decrement (-)
        </button>
      </div>
  );
}
