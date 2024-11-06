
import React from "react";
import page from "@/app/page";
// import Delete from "./assets/Delete.png";



const todoitems = ({text, id, iscomplete, deletetodo, toggle}) => {
  return (

 
      <div className="flex w-[315px] items-center   gap-[8px] mt-[10px]" >
        <input onClick={()=>{toggle(id)}} type="checkbox"></input>
        <div className=" w-[250px] text-wrap  ">
        <p className={`font-poppins font-semibold decoration-violet-800 ${iscomplete ? "line-through" : ""}`}>{text}</p>
        </div>
        <button onClick={()=>{deletetodo(id)}} className="w-[70px] rounded-lg  h-[30px] bg-violet-600 font-poppins font-bold text-white">Delete</button>
      </div>


  );
};
export default todoitems;