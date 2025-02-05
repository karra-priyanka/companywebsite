import React,{useState,useEffect} from 'react';
import './C1.css'; // Import the CSS file
import HappyImage from "../assets/images/HappyPeople.jpg"
const App1 = () => {
  const words = [
    { text:'Innovation',color:'#FFFFFF'},
    { text: 'Creativity', color: '#407bff' },
    { text: 'Collaboration', color: 'yellow' },
    { text: 'Commitment', color: 'violet' },
  ];

  const [currentWord, setCurrentWord] = useState(words[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prevWord) => {
        const currentIndex = words.indexOf(prevWord);
        const nextIndex = (currentIndex + 1) % words.length;
        return words[nextIndex];
      });
    }, 2000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="ontainer row">
      <div className="content col-sm-12 col-md-16 col-lg-6 ">
            <h1>Greatness <span style={{fontWeight:"bold"}}>Starts</span> with <br /> <span style={{fontWeight:"bold"}}>Teamwork and</span> <span style={{color:currentWord.color}}>{currentWord.text}</span>
            </h1>
        <p>"Streamline, manage and optimize your IT processes effortlessly. Experience seamless collaboration, real-time monitoring and innovative solutions - all in one platform".</p>
        <a href='/careers' target='_blank'  style={{textDecoration:"none",}}><button className="button">Get started now</button></a>
      </div>
      <div className='col-sm-12 col-md-6   col-lg-6 c1-image'>
          <img src={HappyImage} alt="Team working together" className='c1-images' />
      </div>
    </div>
  );  
};

export default App1;