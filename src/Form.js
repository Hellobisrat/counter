import useCount from "./useCount";
const Form = () => {
  const {counter,Addbutton,Minusbutton}= useCount();
  
  return ( 
    <div className="App">
      <h1 > Exercise -A</h1>
      <input placeholder={counter}></input>
      
      <div>
      <button onClick={Addbutton}> PLUS </button>
       <button onClick={Minusbutton}>MINUS</button>
       </div>
    </div>
   );
}
 
export default Form;