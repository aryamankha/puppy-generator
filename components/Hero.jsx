import { useState } from "react";
import axios from "axios";

// Built with Vivid (https://vivid.lol) ⚡️

export const Hero = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    setPuppyUrl((await axios.get("/api/get-puppies")).data.puppy_urls);
  };

  const [puppyUrl, setPuppyUrl] = useState("");

  return (
    <>
      <div className="flex flex-col gap-10 items-center justify-center h-screen">
        <h1 className="text-4xl font-bold text-center">
          Shriya&apos;s Puppy Generator
        </h1>
        <div className="h-1/2">
          <img src={puppyUrl} alt="puppy" className="mb-4 h-full" />
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          onClick={handleSubmit}
        >
          Generate Puppy
        </button>
      </div>
    </>
  );
};
