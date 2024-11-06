"use client"
import React, {useEffect, useRef, useState } from "react";
import Todoitems from "@/components/Todoitems";
import { text } from "@fortawesome/fontawesome-svg-core";





const homepage = () => {

  const inputRef = useRef();

  const [todolist, setTodolist] = useState(localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : []); //usestate
//  localStorage.getItem is used to get the data from the local Storage
  const add = () => {
    const inputtext = inputRef.current.value.trim(); // trim() function is used to remove white space from beginning and ending of the string

    if (inputtext === "") {
      return null;
    }

    const newTodo = {
      id: Date.now(),
      text: inputtext,
      iscomplete: false,

    }
    setTodolist((prev) => [...prev, newTodo])
    inputRef.current.value = "";

  }
  const deletetodo = (id) => {
    setTodolist((prvtodos) => {
      return prvtodos.filter((todo) => todo.id !== id);
    })

  }

  const toggle=(id)=>{
    setTodolist((prvtodos)=>{
      return prvtodos.map((todo)=>{
        if(todo.id===id){
          return {...todo, iscomplete:!todo.iscomplete};

        }
        return todo;
      })
    })
  }
  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todolist)); // JSON.stringify is used to convert array to string
  },[todolist])
  //  localStorage.setItem is used to set(add) the data to the local Storage



  return (

    <div className="flex  justify-center items-center ">
      <div className="bg-slate-200 w-[25vw] h-[70vh] rounded-lg mt-[100px]">


        <div className="flex justify-center ">
          <h1 className="text-[20px] mt-[10px] font-poppins font-bold text-violet-600">Todo List</h1>
          {/* <img src={Todo_icon} alt=""/> */}
        </div>
        {/* text box */}
        <div className="flex justify-center ">
          <div className="w-[320px] h-[40px] bg-slate-400 mt-[20px] rounded-full flex gap-[10px] justify-center items-center">
            <input ref={inputRef} id="input-text" className="w-[200px] h-[30px] rounded-full px-[5px] outline-none" type="text" placeholder="Enter Todo Item here"  ></input>
            <button onClick={add} className="w-[100px] h-[30px] bg-violet-600 rounded-full font-poppins font-bold text-white px-[5px]">Add Items</button>
          </div>
        </div>
        <div className=" w-[315px] h-[330px] mt-[15px] ml-[13px] rounded-lg  ">
          <div className="">

            {todolist.map((item, index) => {
              return <Todoitems key={index} text={item.text} id={item.id} iscomplete={item.iscomplete} deletetodo={deletetodo} toggle={toggle}/>
            })}




          </div>


        </div>



      </div>

    </div>



  );
};
export default homepage;