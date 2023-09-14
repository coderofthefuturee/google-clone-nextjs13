"use client"
import React from 'react'
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillMicFill } from "react-icons/bs";
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function HomeSearch() {
    const router = useRouter();
    const [input, setInput] = useState("");
    const [randomSearchLoading, setRandomSearchLoading] = useState(false);
    function handleSubmit(e) {
        e.preventDefault();
        if(!input.trim()) return;
        //Clone Google search
        router.push(`/search/web?searchTerm=${input}`);
        //Google Search
        // router.push(`https://www.google.com/search?q=${input}`);
    }
    async function randomSearch() {
        setRandomSearchLoading(true);
        const response = await fetch("https://random-word-api.herokuapp.com/word")
            .then((res) => res.json())
            .then((data) => data[0]);
        if (!response) return;
        //Clone Google search
        router.push(`/search/web?searchTerm=${response}`);
        //Google Search
        // router.push(`https://www.google.com/search?q=${response}`);
        setRandomSearchLoading(false);
    }
    return (
        <>
        <form onSubmit={handleSubmit}
            className='flex w-full m5-5 mx-auto max-w-[90%] border border-gray-200 px-5 py-3 rounded-full hover:shadow-md focus-within:shadow-md transition-shadow sm:max-w-xl lg:max-w-2xl'>
            < AiOutlineSearch className='text-xl text-gray-500 mr-3'/>
            <input 
                type="text" 
                className='flex-grow focus:outline-none bg-black text-white' 
                onChange={(e) => setInput(e.target.value)}/>
            <BsFillMicFill />
        </form>

        <div className='flex space-x-4'>
            <button onClick={handleSubmit}
            className="flex rounded-full p-2 flex-col space-y-2 sm:space-y-0 sm:space-x-4 justify-center sm:flex-row mt-8 border border-white hover:bg-blue-600 transition duration-200">Google Search</button>
            <button 
                disabled={randomSearchLoading}
                onClick={randomSearch}
                className="flex rounded-full p-2 flex-col space-y-2 sm:space-y-0 sm:space-x-4 justify-center sm:flex-row mt-8 border border-white hover:bg-yellow-600 transition duration-200"
            >
                {randomSearchLoading ? (
                    <img
                        src="spinner.svg"
                        alt="loading..."
                        className="h-6 text-center"
                    />
                ) : (
                    "I am Feeling Lucky"
                )}
            </button>
        </div>
    </>
  );
}
