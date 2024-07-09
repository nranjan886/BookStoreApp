import React from "react";
import Cards from "./Cards";
import list from "../../public/list.json";
import { Link } from 'react-router-dom'

function Course() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 py-4">
        <div className="mt-28 item-center justify-center text-center">
          <h1 className="text-2xl md:text-4xl">
            We are delighted to have you{" "}
            <span className="text-pink-500">here!:)</span>
          </h1>
          <p className="mt-12">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita
            nulla corrupti quisquam tempora quae sint numquam pariatur quis
            voluptas! Molestiae minima nobis nesciunt ducimus, earum illum nam
            quos eligendi cum. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. A placeat eveniet deserunt expedita iste quos
            doloribus provident, aperiam pariatur. Quaerat quis aliquam sequi
            enim corrupti sapiente, aspernatur tempore in amet!
          </p>
        <Link to='/'>
        <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-700">
            Back
          </button>
        </Link >
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {list.map((item) => (
            <Cards key={item.key} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
