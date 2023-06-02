import { useState } from "react";
import axios from "axios";

// Built with Vivid (https://vivid.lol) ⚡️

export const Hero = () => {
  const [email, setEmail] = useState("");
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEmailSubmitted(true);
    const res = await axios.post("/api/waitlist", { email });
    setEmail("");
    window.alert(`Email "${res.data.email}" submitted!`);
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold text-center">
          Shriya's Puppy Generator
        </h1>
        <img src="puppy.jpg" alt="puppy" className="w-64 h-64 mb-4" />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
          Generate Puppy
        </button>
      </div>
    </>
  );
};
