
import { useState } from 'react';
import './App.css';
import Box from './component/Box';

const Choice = {
  rock : {
    name:"Rock",
    img:"https://outforia.com/wp-content/uploads/2021/07/Types-of-rocks-schist-0721.jpg"
  },
  scissor : {
      name:"Scissor",
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-S9fVPSeA28SJexVubODPSkYPbaGlHh_Y2g&s"},
  paper : {
        name:"Paper",
        img:"https://blog.kakaocdn.net/dn/bmjB2s/btqXHhp6kpG/TH14W4U612SxKo9uuR2sB0/img.png"}
}

function App() {

  const [userSelect, setUserSelect] = useState(null)
  const [comSelect, setComSelect] = useState(null)
  const [result, setResult] = useState("")

  const play=(userChoice)=>{
    setUserSelect(Choice[userChoice])
    let computerChoice = randomChoice();
    setComSelect(computerChoice);
    setResult(judgement(Choice[userChoice], computerChoice))
    
  }

  const randomChoice=()=>{
    let itemArray = Object.keys(Choice)
    let randomItem = Math.floor(Math.random() * itemArray.length);
    let final = itemArray[randomItem]
    return Choice[final]
  }

  const judgement = (user, computer) => 
    user.name === computer.name ? "tie"
    :((user.name === "Rock" && computer.name === "Scissor") ||
    (user.name === "Scissor" && computer.name === "Paper") ||
    (user.name === "Paper" && computer.name === "Rock"))
    ? "win"
    : "lose";

    
  

  return (
    <div className="main ">
      <div className="box-container">
        <Box gamer="You" item={userSelect} result={result}></Box>
        <Box gamer="Computer" item={comSelect} result={result ? (result === "lose" ? "win" : result ==="win" ? "lose" : "tie"):null}></Box>
    
      </div> 

      <div className="button-container">
        {Object.keys(Choice).map((choice)=>(
          <button className="button" key={choice} onClick={()=>play(choice)}>{Choice[choice].name}</button>
        ))}
      </div>
    </div>
  );
}

export default App;
