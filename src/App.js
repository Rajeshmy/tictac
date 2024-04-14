
import './App.css';
import { useState } from 'react';


function App() {

 const [arr,setarr] = useState(new Array(9).fill(""));
 const [gamewon,setgamewon] = useState(null)
 
 const checkwon = function(arr){

  let gameEnded = false;

  const comb = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[6,4,2],[0,4,8]];
  
   for(let e of comb){
     if(arr[e[0]]=="*" && arr[e[1]] == "*" && arr[e[2]]=="*"){
       console.log("***")
       setarr(new Array(9).fill(''));
       setgamewon(true);
       gameEnded = true;
       alert("you won");
       break 
     }else if(arr[e[0]]=="#" && arr[e[1]] == "#" && arr[e[2]]=="#"){
       console.log("###")
       setarr(new Array(9).fill(''));
       setgamewon(true);
       gameEnded = true;
       alert("computer won");
       break 
     }
   };

   return gameEnded

 };


 const computerclick =(arr)=>{
  
  let narr
  let neededndex = arr.map((e,i)=>{
    if(e== ""){
      return i
    } 
  }).filter((f)=> f!==undefined);

  let randindex = Math.floor(Math.random()*neededndex.length);
  if(arr[neededndex[randindex]] !== "") return
  setarr((p)=>{
    narr=[...p];
   
    narr[neededndex[randindex]]="#";
    return narr
   });

   setTimeout(() => {
    checkwon(arr);
   }, 300);
 }


 const clickHandler=(index)=>{
  
   let narr
   if(  arr[index] !== "") return
   setarr((p)=>{
    narr=[...p];
    
    narr[index]="*";
    return narr
   });
  
  setTimeout(() => {
    let res = checkwon(narr);

  if(!res){
    computerclick(narr)
  }
  }, 400);
  
 };
 
  return (
    <div className="App">
     
       <div className='row'>
        <button className='button' onClick={()=>clickHandler(0)}>{arr[0]?arr[0]:""}</button>
        <button className='button' onClick={()=>clickHandler(1)}>{arr[1]?arr[1]:""}</button>
        <button className='button' onClick={()=>clickHandler(2)}>{arr[2]?arr[2]:""}</button>
       </div>
       <div className='row'>
        <button className='button' onClick={()=>clickHandler(3)}>{arr[3]?arr[3]:""}</button>
        <button className='button' onClick={()=>clickHandler(4)}>{arr[4]?arr[4]:""}</button>
        <button className='button' onClick={()=>clickHandler(5)}>{arr[5]?arr[5]:""}</button>
       </div>
       <div className='row'>
        <button className='button' onClick={()=>clickHandler(6)}>{arr[6]?arr[6]:""}</button>
        <button className='button' onClick={()=>clickHandler(7)}>{arr[7]?arr[7]:""}</button>
        <button className='button' onClick={()=>clickHandler(8)}>{arr[8]?arr[8]:""}</button>
       </div>
     
    </div>
  );
}

export default App;
