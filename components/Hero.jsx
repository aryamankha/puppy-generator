import { useState } from "react";
import axios from "axios";

// Built with Vivid (https://vivid.lol) ⚡️

export const Hero = () => {
  const newPuppy = async (e) => {
    e.preventDefault();
    const puppyInfo = (await axios.get("/api/get-puppies")).data;
    setPuppyId(puppyInfo.id);
    setPuppyUrl(puppyInfo.puppy_urls);
    setPuppyName(puppyInfo.name);
  };

  const setName = async (e) => {
    setPuppyName(tempPuppyName);
    await axios.post("/api/set-puppy-name", { puppyId, tempPuppyName });
  };

  const [puppyUrl, setPuppyUrl] = useState(
    "https://www.greencrossvets.com.au/wp-content/uploads/2022/01/Dachshund-Dog-Breed-1-683x1024.jpg"
  );
  const [puppyId, setPuppyId] = useState(0);
  const [tempPuppyName, setTempPuppyName] = useState("");
  const [puppyName, setPuppyName] = useState("Brownie");

  return (
    <>
      <div className="flex flex-col gap-6 items-center justify-center h-screen m-4">
        <h1 className="text-4xl font-bold text-center">Cute Puppy Generator</h1>
        <p className="text-xl text-center">
          {puppyName == ""
            ? "I don't have a name yet 🥺"
            : "Hi 🐶 My name is " + puppyName + "!"}
        </p>
        <div className="h-1/2 overflow-y-scroll">
          <div className="relative overflow-hidden rounded-lg shadow-md flex justify-center items-center h-full w-full">
            <img
              src={puppyUrl}
              alt="puppy"
              className="mb-4 rounded-lg shadow-md"
            />
          </div>
        </div>
        {puppyName == "" ? (
          <div className="flex flex-row items-center w-full sm:w-1/2 justify-center m-4 shadow-md rounded-lg overflow-hidden">
            <input
              type="text"
              placeholder="Ex. Brownie"
              className="bg-gray-200 w-full p-4"
              onChange={(e) => {
                setTempPuppyName(e.target.value);
              }}
            />
            <button
              onClick={setName}
              className="bg-blue-500 w-1/2 sm:w-1/4 hover:bg-blue-700 text-white shadow-md font-bold p-4 "
            >
              Name me!
            </button>
          </div>
        ) : null}
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-md"
          onClick={newPuppy}
        >
          Puppy!
        </button>
      </div>
    </>
  );
};
