import React ,{ useState, useEffect }from 'react'
import Typewriter from 'typewriter-effect';

export default function EventManagerHome() {

    const [managerData, setmanagerData] = useState("");
   useEffect(() => {
    const storedmanagerData = localStorage.getItem('manager');
    if (storedmanagerData) {
      const parsedClientData = JSON.parse(storedmanagerData);
      setmanagerData(parsedClientData);
    }
  }, []);

  return (
    <div>
      

    <h2 style={{color:"white",paddingTop:"130pt",paddingLeft:"130pt",fontFamily:"cursive",fontSize:"45pt"}}>Welcome {managerData.fullname}</h2>
 <h1 style={{color:"Skyblue",fontFamily:"cursive",fontSize:"32pt" , paddingLeft:"178px",paddingBottom:"12px"}}>
   <Typewriter

   options={{
       autoStart: true,
       loop: true,
       delay: 50,
       strings: ["Events Made in Heaven","Celebrations","Thrills","Engagements","Parties","Racings"]
   }}
   
   />
  </h1>
  <p style={{color:"white",paddingTop:"130pt",paddingLeft:"130pt",fontFamily:"cursive",fontSize:"15pt"}}>with an illustrious 25-year journey as an esteemed event planner,</p><br/>
  <p style={{color:"white",paddingTop:"130pt",paddingLeft:"130pt",fontFamily:"cursive",fontSize:"15pt"}}>Buttercups surpasses your grandest aspirations, transcends</p><br/>
  <p style={{color:"white",paddingTop:"130pt",paddingLeft:"130pt",fontFamily:"cursive",fontSize:"15pt"}}>expectations, redefining events to perfection.</p><br/>
 </div>
)
}
