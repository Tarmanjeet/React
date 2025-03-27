// import React,{useState} from 'react'
// import Greeting from './Greeting';
// import Card from './Card';

// const App = () => {
//   const [count,setCount] =useState(0);
//                           //[a,b]
//                           // [0,b]
//   function increment(){
//     setCount(count+1);
//   }
//   function decrement(){
//     setCount(count-1);
//   }
//   const arr=["Virat","Rohit","Sachin","Dhoni" ]
//   return (
//     <div>
//       {arr.map((name,index)=><Greeting key={index} name={name}/>)}
//     <Card>
//     <Greeting name="abc"/>
//     </Card>
//     <Card>
//     <Greeting flag={true}/>
//     </Card>
//     <Card>
//     <Greeting age={10}/>
//     </Card>
//     <Greeting name="Tarmanjeet" age={18}/>
//     <App2/>
//     <MainApp.App3/>
//     <MainApp.App4/>
//     <div>{MainApp.App5("Tarman")}</div>
//     <div>{MainApp.App6}</div>
//     <div className='count'>{count}</div>
//     <Buttons setCount={setCount}/>
//     <Buttons setCount={setCount}/>
//     {/* <Buttons increment={increment}/> */}

//     </div>
//   )
// }
// const App2=()=>{
//   return(
//     <>
//     <div>Hello World</div>
//     </>
//   )
// }
// const Buttons=({setCount})=>{
//   function increment(){
//     setCount((c)=>c+1);
//   }
//   function decrement(){
//     setCount((c)=>c-1);
//   }
//   return(
//     <>
//     <button onClick={decrement}>-</button>
//     <button onClick={increment}>+</button>
//     </>
//   )
// }

// export default App

import React, { useState } from 'react';  

const App = () => {  
  // Initializing counter state  
  const [count, setCount] = useState(0);  
  // State to hold the initial value entered by the user  
  const [initialValue, setInitialValue] = useState('');  

  const handleIncrement = () => {  
    setCount((count + 1)*6);  
  };  

  const handleDecrement = () => {  
    setCount((count - 1)*6);  
  };  
  const handleSetInitialValue = (e) => {  
    e.preventDefault();   
    const value = parseInt(initialValue)  
    if (!isNaN(value)) {  
      setCount(count * 6)  
      setInitialValue('') 
    }  
  }


  return (  
    <div>  
      <h1>Counter: {count}</h1>  
      <form onSubmit={handleSetInitialValue}>  
        <input  
          type="number"  
          value={initialValue}  
          onChange={(e) => setInitialValue(e.target.value)}  
          placeholder="Set initial value"  
        />  
        <button type="submit">Set Initial Value</button>  
      </form>  
      <button onClick={handleIncrement}>Increment</button>  
      <button onClick={handleDecrement}>Decrement</button>  
    </div>  
  );  
};  

export default App;  


