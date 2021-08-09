import React,{useState, useEffect} from 'react';
import './style.css';

const getLocal = ()=>{
    return JSON.parse(localStorage.getItem("TodoList"));
}
const Todo = () => {

    const [inputData, setInputData] = useState("");
    const [items , setItems] = useState(getLocal());
    const [editId , setEditId] = useState("");
    const [toggleVal , setToggleVal] = useState(false);
    
    const addItem = () =>{
        if(!inputData){
            alert("Please fill the data");
        }else if(inputData && toggleVal){
            setItems(items.map( (currEle)=>{
                if(currEle.id === editId){
                    return {...currEle , name : inputData}
                }
                return currEle;
            }));
            setInputData("");
            setToggleVal(false);
            setEditId("");
        }        
        else{
            const newItem = {
                id : new Date().getTime().toString(),
                name : inputData
            }
            setItems([...items , newItem]);
            console.log(items);
            setInputData("");
        }
    }

    const editItem =(index)=>{

        const to_edit_item = items.find( (currEle)=>{
            return currEle.id === index;
        });

        setEditId(to_edit_item.id);
        setInputData(to_edit_item.name);
        setToggleVal(true);

    }
    // Delete an item
    const deleteItem = (index) =>{
        const updatedItems = items.filter( (currEle)=>{
            return currEle.id !== index; 
        }); 
        setItems(updatedItems);
    }

    //remove All the items
    const removeAll =()=>{
        setItems([]);
    }

    // saving to Local storage

    useEffect(()=>{
        localStorage.setItem("TodoList" , JSON.stringify(items))
    }, [items]);

    return (
        <>
            <div className = "main-div">                
                <div className = "child-div">
                    <figure>
                        <img src = "./images/todo.png" alt = "ToDoLogo" />
                        <figcaption>Add Your List Here ✌</figcaption>
                    </figure>
                    <div className = "addItems">
                        <input 
                            type = "text"
                             placeholder = "✍ Add Item"
                             value ={inputData}
                             onChange = {(eve) => setInputData(eve.target.value)}
                        />
                        {toggleVal ? <i className="fa fa-edit add-btn" onClick = {addItem}></i> :
                        <i className="fa fa-plus add-btn" onClick = {addItem}></i>}
                    </div>

                    {/*show our Items */}
                    <div className = "showItems">
                        {items.map( (currEle) =>{
                            return(                                
                                <div className = "eachItem" key={currEle.id}>
                                    <h2>{currEle.name}</h2>
                                    <div className ="todo-btn">
                                        <i className = "fa fa-edit add-btn" onClick ={()=> editItem(currEle.id)}></i>
                                        <i className ="fa fa-trash add-btn" onClick ={ ()=> deleteItem(currEle.id)}></i>
                                    </div>
                                </div>
                            );
                        })}                        
                    </div>

                    {/* remove All button */}
                    <div className = "showItems">
                        <button className ="btn effect04" data-sm-link-text = "Remove All"
                        onClick = {removeAll}>
                            <span>CHECK LIST</span>
                        </button>
                    </div>
                </div>
            </div>            
        </>
    )
}

export default Todo
