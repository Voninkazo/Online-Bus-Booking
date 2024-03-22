import React, { useState } from "react";
import { type FormEvent } from "react";
import { getBusesInfo } from "../../stores/buses";

interface Props {
  busDepartureLocation: String[];
  destination: String[];
}

const SearchForm = ({ busDepartureLocation, destination }: Props) => {
  const uniqueBusDepartureLocation = busDepartureLocation.filter(
    (item: String, index: number) =>
      busDepartureLocation.indexOf(item) === index
  );

  const uniqueDestination = destination.filter(
    (item: String, index: number) => destination.indexOf(item) === index
  );

  const [bus, setBus] = useState({
    departureLocation: "",
    destination: "",
    departureDate: "",
  });
  const dateNow = new Date();
  const date = dateNow.getDate();
  const month = dateNow.getMonth() + 1;
  const year = dateNow.getFullYear();
  const pastDate = `${year}-0${month}-${date}`;
  const futureDate = `${year}-0${month + 1}-${date}`;

  const isDisabled =
    bus.departureLocation === "" ||
    bus.destination === "" ||
    bus.departureDate === "";

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setBus((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

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
            <select
              name="departureLocation"
              id="departureLocation"
              required
              className="border h-12 w-56 px-2 rounded-sm"
              value={bus.departureLocation}
              onChange={handleInputChange}
            >
              <option value="">From:City</option>
              {uniqueBusDepartureLocation?.map((name, index) => (
                <option key={index}>{name}</option>
              ))}
            </select>
            <select
              name="destination"
              id="departureLocation"
              required
              className="border h-12 w-56 px-2 rounded-sm"
              value={bus.destination}
              onChange={handleInputChange}
            >
              <option value="">To: City</option>
              {uniqueDestination?.map((name, index) => (
                <option key={index}>{name}</option>
              ))}
            </select>
            <input
              type="date"
              name="departureDate"
              min={pastDate}
              max={futureDate}
              required
              color="red"
              className="border h-12 w-52 px-2 rounded-sm cursor-pointer"
              value={bus.departureDate}
              onChange={handleInputChange}
            />
            <button
              disabled={isDisabled}
              className={`${
                isDisabled ? "bg-gray-500" : "bg-red-700"
              } w-32 h-12 rounded-md text-white font-bold`}
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default SearchForm;
