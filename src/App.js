import './App.css';
import Profile from './profile/Profile';
import img1 from './img1.jpg'
export default function App() {
  return (
      <Profile className="App" fullName="Feten Stambouli" bio="Mechatronic Engineer and Full Stack developer" email="stamboulifeten@gmail.com" handleName={() => alert("User's Name is : Feten Stambouli")}>
      <img src={img1} alt="img1" width='200px'/>
      </Profile>
      
  );
}

