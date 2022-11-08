// images
import logo from './images/kbc_logo3.PNG';
import prompt from './images/prompt.PNG';
import screen3 from './images/screen3.png';
import life from './images/life.png';
import lost from './images/lost.png';
import spicy from './images/spicy_mode.PNG';
import strict from './images/strict_mode.png';
import emptyScreen from './images/kbc_empty_screen.PNG';

// css
import './App.css';

//music
import bgMusicUrl from './music/kbcBG.mp3'
import SevenCrore from './music/7crore.mp3'
import kbcWrong from './music/kbcWrong.mp3'
import kbcRightAns from './music/kbc_rightLong.mp3'
import kbcClock from './music/kbcClock.mp3'
import { useEffect, useState } from "react";
import GetQuestions from './GetQuestions.tsx';

function App() {
  const [BGaudio,setBGAudio] = useState(new Audio(bgMusicUrl));
  const [clockAudio,setClockAudio] = useState(new Audio(kbcClock));
  const [wrongAnswerAudio,setWrongAnswerAudio] = useState(new Audio(kbcWrong));
  const [rightAnswerAudio,setrightAnswerAudio] = useState(new Audio(kbcRightAns));
  const [SevenCroreAudio,setSevenCroreAudio] = useState(new Audio(SevenCrore));
  const [questionNo,setQuestionNo] = useState(1);
  let prize_won = 0,userValidationCompleted=false;
  const total_prize=[0,5000,10000,20000,40000,80000,160000,320000,640000,1250000,2500000,5000000,10000000,30000000,70000000];
  prize_won = total_prize[questionNo-1];
  const [timer,setTimer] = useState(30);
  const [flag ,setFlag]= useState(true);
 
  const [steps,setSteps] = useState(0);
  const incrementSteps = ()=>{
    setSteps(steps+1);
  }


  async function ValidateAnswer(questionNo, e) {
    // clockAudio.pause();
    setFlag(false);
    // setTimer(30);
    console.log(e);
    const qBank = GetQuestions(questionNo);
    let answerCorrect = qBank[5] === e.target.className.charAt(6);

    
    if (answerCorrect && questionNo<14) {
      clockAudio.pause();
      rightAnswerAudio.play();
      await new Promise(resolve => setTimeout(resolve, 5000));  
      setTimer(30);
      console.log(`Correct answer!! + ${e.target}`);
      setQuestionNo((questionNo)=>questionNo+1)
      StartQuestions(questionNo);
      setFlag(true);
    } 
    else if(answerCorrect && questionNo===14){
      clockAudio.pause();

      SevenCroreAudio.play();
      await new Promise(resolve => setTimeout(resolve, 5000));  
      console.log(`Winner !! + ${e.target}`);
      setSteps(4);
    }
    else {console.log(`loss!! + ${e.target}`) ;setFlag(false);wrongAnswerAudio.play();
    await new Promise(resolve => setTimeout(resolve, 3000));  
    incrementSteps();
  };
  }
  function StartQuestions(questionNo){
    let queBank = GetQuestions(questionNo);
    let correctOption = queBank[5] ;
    const qBank = GetQuestions(questionNo);
  return (
    <div>
    <div className='Question'>{questionNo}. {qBank[0]}</div>
    <div style={{cursor:'pointer', width:'350px'}} onClick={(e)=>ValidateAnswer(questionNo,e)} className={correctOption==='A'?'optionA':'optionAW'}> {qBank[1]}</div>
    <div style={{cursor:'pointer', width:'350px'}} onClick={(e)=>ValidateAnswer(questionNo,e)} className={correctOption==='B'?'optionB':'optionBW'}> {qBank[2]}</div>
    <div style={{cursor:'pointer', width:'350px'}} onClick={(e)=>ValidateAnswer(questionNo,e)} className={correctOption==='C'?'optionC':'optionCW'}> {qBank[3]}</div>
    <div style={{cursor:'pointer', width:'350px'}} onClick={(e)=>ValidateAnswer(questionNo,e)} className={correctOption==='D'?'optionD':'optionDW'}> {qBank[4]}</div>
    </div>
    )
  }


   function Opening(){
    setTimer(30);
    setFlag(true)
    BGaudio.play();
    return(
    <div className="App">
        <img src={logo} className="App-logo2" alt="logo" />
        <button onClick={async ()=> {
          await new Promise(resolve => setTimeout(resolve, 1000));  
          incrementSteps(); 
          }}>Start</button>
    </div>)
  }

  function SelectGameMode(){
    return(
    <div className="App">
      
        <img src={logo} className="App-logo3" alt="logo" />
        
        <img src={spicy} className="game-mode1" alt="logo" onClick={()=>setSteps(2)}/>
        
        
        <img src={strict} className="game-mode2" alt="logo" onClick={()=>setSteps(2)}/>
        
        
        <button className='btn2' onClick={async ()=> {
          if(!userValidationCompleted)
          {BGaudio.play();
            await new Promise(resolve => setTimeout(resolve, 5000));  
            setQuestionNo(1);
          incrementSteps(); }
          else{
           return;
          }
          }}>Play Game</button>
    </div>)
  }

     function Questions(){
      
      BGaudio.pause();
      
      async function time (){
        clockAudio.play();
      await new Promise(resolve => setTimeout(resolve, 1000));
      if(timer>0)  
      setTimer((timer)=>timer-1);
    };
    if(flag && timer>0)
     time();
    else  clockAudio.pause();
    
 
    return(
      <div><img src={screen3} className="App-logo" alt="logo" />
      <img src={life} className={"life"+questionNo} alt="logo" />
      <div className='timer'>{timer}</div>
    <img src={emptyScreen} className="emptyScreen" alt="logo" />
    {StartQuestions(questionNo)}
    </div>)
  }

  function Lost(){
    BGaudio.pause();
    clockAudio.pause();
     prize_won = total_prize[questionNo-1];
    return(
      <div>
        
      <img src={screen3} className="App-logo" alt="logo" />
      <img src={prompt} className="prompt" alt="logo" />
      <img src={lost} className="lost" alt="logo" />
      
      <div>
      <div className='prize'>${`You have won Rs. `+prize_won}</div>
      <div style={{cursor:'pointer'}} onClick={()=>{setSteps(2)}} className='prompt_continue'>Continue </div>
      <div style={{cursor:'pointer'}} onClick={()=>{setSteps(0)}} className='prompt_exit'>Exit </div>
      
      </div>
      </div>)
  }

  function Won(){
    BGaudio.pause();
    clockAudio.pause();
    prize_won = total_prize[total_prize.length-1];
    return(
      <div>
        
      <img src={screen3} className="App-logo" alt="logo" />
      <img src={prompt} className="prompt" alt="logo" />
      <img src={life} className="life_final" alt="logo" />
      
      <div>
      <div className='prize_final'>${`You have won Rs. `+prize_won}</div>
      <div style={{cursor:'pointer'}} onClick={()=>{setSteps(2)}} className='prompt_continue_final'>Continue </div>
      <div style={{cursor:'pointer'}} onClick={()=>{setSteps(0)}} className='prompt_exit_final'>Exit </div>
      
      </div>
      </div>)
  }


  
  return (
    
    steps===0?<Opening/>:steps===1?
    <SelectGameMode/>:steps===2?<Questions/>:steps===3?<Lost/>:<Won/>
    
    )
}

export default App;
