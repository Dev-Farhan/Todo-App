import React, { useState } from "react";
import "./Todo.css"
export const Tode = () => {
  const [inputData, setInputData] = useState("");
  const [items, setAddItems] = useState([]);
  const addItems = ()=>{
    if(!inputData){
        
    }else{
      setAddItems([...items,inputData]);
      setInputData('')
    }
  }
  const deleteItem =(id)=>{
     const update = items.filter((elem,index)=>{
        return index !== id ;
     });
     setAddItems(update);
  }
  return (
    <>
      <div className="main-div">
        <div className="child-div">
        <figure>
          <img src="" alt="todologo"/>
          <figcaption>Add Todo List Here✌</figcaption>
        </figure>
        <div className="addItems">
          <input
            type="text"
            placeholder="✍ Add Items..."
            value={inputData}
            onChange={(e) => {
              setInputData(e.target.value);
            }}
          />
          <i className="fa fa-plus add-btn" title="Add Item"onClick={addItems}></i>
          </div>

          <div className="showItems">
            <div className="eachItem">
            {
            items.map((elem,index)=>{
              return( <div key={index}>
                    <h2>{elem}</h2>
                    {/* <button onClick={()=>deleteItem(index)}>Delete</button> */}
                    <i className="far fa-trash-alt add-btn" title="Delete Item"
                    onClick={()=>deleteItem(index)}
                    ></i>
                  </div>
                )                                                                                        
            })
          }
            </div>
          </div>

         <div className="showItems">
          <button className="btn effect04" data-sm-link-text="Remove All"><span>Check List</span></button>
         </div>

        </div>
      </div>
    </>
  );
};
