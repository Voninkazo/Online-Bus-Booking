import React from "react";
import { type FormEvent } from "react";
import { getBusesInfo } from "../../stores/buses";

const SearchForm = () => {
  const dateNow = new Date();
  const date = dateNow.getDate();
  const month = dateNow.getMonth() + 1;
  const year = dateNow.getFullYear();
  const pastDate = `${year}-0${month}-${date}`;
  const futureDate =  `${year}-0${month + 1}-${date}`;
  
  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.target as any);
    const response = await fetch("/api/search", {
      method: "POST",
      body: formData,
    });

    try {
      const data = await response.json();
      getBusesInfo(data.buses);
    } catch (error) {
      console.log("Can't find a bus");
    }
  }

  return (
    <form onSubmit={submit} className="relative z-30 pt-36 max-w-4xl mx-auto">
      <div className="border rounded-xl bg-white pl-8 py-8 shadow-2xl">
        <h2 className="font-bold text-lg mb-8">Book your favourite bus</h2>
        <div className="main flex flex-col overflow-hidden select-none">
          <div className="mt-4 flex flex-wrap gap-4">
            <input
              type="text"
              placeholder="From:City"
              name="departureLocation"
              className="border h-12 w-56 px-2 rounded-sm"
            />
            <input
              type="text"
              placeholder="To: City"
              name="destination"
              className="border h-12 w-56 px-2 rounded-sm"
            />
            <input
              type="date"
              name="departureDate"
              min={pastDate}
              max={futureDate}
              color="red"
              className="border h-12 w-52 px-2 rounded-sm cursor-pointer"
            />
            <button className="bg-red-700 w-32 h-12 rounded-md text-white font-bold">
              Search
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default SearchForm;
