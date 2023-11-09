import { useEffect, useState } from "react";
import axios from "axios";
import { useStore } from "../components/NavBar";
import ConfettiExplosion from 'react-confetti-explosion';

// Built with Vivid (https://vivid.lol) ⚡️

export const Hero = (props) => {
  const { puppyData, originalMaxStreak } = props;
  const [puppyUrl, setPuppyUrl] = useState(
    "https://www.greencrossvets.com.au/wp-content/uploads/2022/01/Dachshund-Dog-Breed-1-683x1024.jpg"
  );
  const [puppyId, setPuppyId] = useState(0);
  const [puppyName, setPuppyName] = useState("Brownie");
  const [gameState, setGameState] = useStore((state) => [
    state.gameState,
    state.setGameState,
  ]);
  const [successState, setSuccessState] = useStore((state) => [
    state.successState,
    state.setSuccessState,
  ]);
  const [failureState, setFailureState] = useStore((state) => [
    state.failureState,
    state.setFailureState,
  ]);
  const [nameJustSet, setNameJustSet] = useState(false);

  const [setMaxStreak]  = useStore((state) => [
    state.setMaxStreak,
  ]);

  const newPuppy = async (e) => {
    e.preventDefault();
    const index = Math.floor(Math.random() * puppyData.length);
    const puppyInfo = puppyData[index];
    setPuppyId(puppyInfo.id);
    setPuppyUrl(puppyInfo.puppy_urls);
    setPuppyName(puppyInfo.name);
    setSuccessState(false);
    setFailureState(false);
    setNameJustSet(false);
  };

  const GameInput = () => {
      const [tempPuppyName, setTempPuppyName] = useState("");
      const [numTries, setNumTries] = useState(0);
      const [setSuccessState] = useStore((state) => [
        state.setSuccessState,
      ]);
      const [streak, setStreak] = useStore((state) => [
        state.streak,
        state.setStreak,
      ]);
      const [maxStreak, setMaxStreak] = useStore((state) => [ 
        state.maxStreak,
        state.setMaxStreak,
      ]);

      const checkName = async (e) => {
        e.preventDefault();
        if (puppyName.trim().toLowerCase() == tempPuppyName.trim().toLowerCase()){
            setSuccessState(true);
            if ((streak + 1) > maxStreak) {
                await axios.post("/api/set-max-streak", { streak: streak + 1, id: "streak"});
                setMaxStreak(streak + 1);
            }
            setStreak(streak + 1);
        } else {
            setNumTries(numTries + 1);
            if (numTries == 1){
                setFailureState(true);
                setStreak(0);
            }
        }
        setTempPuppyName("");
      };

      return (
        <>
          <form onSubmit={checkName} className="flex flex-row items-center w-full sm:w-1/2 justify-center m-4 shadow-md rounded-lg overflow-hidden">
            <input
              type="text"
              placeholder="Ex. Brownie"
              className="bg-gray-200 w-full p-4 text-black rounded-l-lg"
              value = {tempPuppyName}
              onChange={(e) => {
                setTempPuppyName(e.target.value);
              }}
            />
            <button
              type="submit"
              className="bg-blue-500 w-1/2 sm:w-1/4 hover:bg-blue-700 text-white shadow-md font-bold p-4 rounded-r-lg "
            >
              Guess!
            </button>
          </form>
          {numTries == 1 && (
            <p>Hint: It starts with {puppyName[0]}</p>
          )}
        </>
      )
  }

  const NamingInput = () => {
    const [tempPuppyName, setTempPuppyName] = useState("");

    const setName = async (e) => {
      e.preventDefault();
      setNameJustSet(true);
      setPuppyName(tempPuppyName);
      await axios.post("/api/set-puppy-name", { puppyId, tempPuppyName });
    };

    return (
      puppyName == "" ? (
          <form className="flex flex-row items-center w-full sm:w-1/2 justify-center m-4 shadow-md rounded-lg overflow-hidden">
            <input
              type="text"
              placeholder="Ex. Brownie"
              className="bg-gray-200 w-full p-4 text-black rounded-l-lg"
              value={tempPuppyName}
              onChange={(e) => {
                setTempPuppyName(e.target.value);
              }}
            />
            <button
              onClick={setName}
              className="bg-blue-500 w-1/2 sm:w-1/4 hover:bg-blue-700 text-white shadow-md font-bold p-4 rounded-r-lg "
            >
              Name me!
            </button>
          </form>
          ) : null
      )
  }

  useEffect(() => {
    setMaxStreak(originalMaxStreak);
  }
  , []);

  return (
    <>
      <div className="flex flex-col gap-6 items-center justify-center h-screen m-4 mt-0 sm:mt-4 overflow-hidden">
        {successState && <ConfettiExplosion height = "200vh"/>}
        <h1 className="text-4xl font-bold text-center">Cute Puppy Generator</h1>
        {(!gameState ||
          successState ||
          failureState ||
          puppyName === "" ||
          nameJustSet) && (
          <p className="text-xl text-center">
            {puppyName == ""
              ? "I don't have a name yet 🥺"
              : "Hi 🐶 My name is " + puppyName + "!"}
          </p>
        )}
        <div className="h-1/2 overflow-y-scroll">
          <div className="relative overflow-hidden rounded-lg shadow-md flex justify-center items-center h-full w-full">
            <img src={puppyUrl} alt="puppy" className="mb-4 rounded-lg shadow-md" />
          </div>
        </div>
        {gameState && puppyName != "" && !nameJustSet ? (
          successState ? (
            <p className="text-3xl">You got it right! 😍 </p>
          ) : failureState ? (
            <p className="text-3xl">Better luck next time 😔 </p>
          ) : (
            <GameInput />
          )
        ) : (
          <NamingInput />
        )}
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
