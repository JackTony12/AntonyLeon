import './particles.css'

const Particles = () => {
    const crearParticulas = Array.from({ length: 50 }, (_, i) => {
     const randomTop = Math.random() * 100;
     const randomDelay = Math.random() * 5;
     const randomDuration = 1 + Math.random() * 10; 
     const randomWidth = 10 + Math.random() * 30; 
 
     return (
       <span
         key={i}
         className="particula"
         style={{
           top: `${randomTop}%`,
           animationDelay: `${randomDelay}s`,
           animationDuration: `${randomDuration}s`,
           width: `${randomWidth}px`,
         }}
       />
     );
   });
 
   return (

    <>
   {crearParticulas}
    </>
   )
   
 }
 export default Particles