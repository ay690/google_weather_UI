"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { CiSearch } from "react-icons/ci";
import { HiMicrophone } from "react-icons/hi";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      router.push(`/search?query=${encodeURIComponent(searchTerm)}`);
    }
  };

  if (!isMounted) {
    return null;
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex h-96 flex-col items-center justify-center flex-grow w-[80%] sm:w-[90%]"
    >
      <Image
        src="/assets/Google Logo.png"
        className="w-225 md:w-300 md:h-100"
        width={225}
        height={75}
        alt="Google Logo"
      />
      <div className="flex w-full mt-5 hover:shadow focus-within:shadow max-w-md rounded-full border border-gray-500 md:hover:border-white dark:bg-gray-700 md:dark:hover:border-gray-100 px-5 py-2 sm:py-3 items-center sm:max-w-xl lg:max-w-2xl">
        <CiSearch color="#797A7C" size={25} />
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="focus:outline-none w-full flex-grow dark:bg-primary-dark custom-input p-1"
        />
        <HiMicrophone size={25} />
      </div>
      <div className="flex flex-row space-y-0 w-[90%] justify-center mt-8 space-x-3 sm:space-x-4">
        <button type="submit" className="btn">
          Google Search
        </button>
        <button
          type="button"
          className="btn"
          onClick={() =>
            router.push(`/search?query=${encodeURIComponent(searchTerm)}`)
          }
        >
          I&apos;m Feeling Lucky
        </button>
      </div>
      <div className="flex flex-x-2 gap-2 mt-2">
        <span>Google offered in:</span>
        <span className="lang-btn">हिंदी </span>
        <span className="lang-btn">বাংলা </span>
        <span className="lang-btn">తెలుగు </span>{" "}
        <span className="lang-btn">मराठी </span>
      </div>
    </form>
  );
};

export default Search;
