import React from 'react';
import './Assets/CSS/prueba.css';

function Prueba(){
    return(
   <React.Fragment>  
    <div className="Prueba">
        
    <header>
        <ul className="lista">
           <li>
               <a href="#" >🎭 DashBoard</a>
           </li>
           <li>
               <a href="#">✎ Registrer</a>
           </li>    
        </ul> 
    </header>
   <div className="division">
     <form action="" className="formulario">
            <h2>Login</h2>
            <input type="text" placeholder="&#128100; Username" name="user" className="datos"></input>
            <input type="password" placeholder="&#128272; Password" name="clave" className="datos"></input>
            <input type="submit" value="Sign In" className="botones"></input>        
            
     </form>
     
   </div>
   <footer>
        
        <p className="suelo">(c) 2020, Create by GetWorks</p>
    </footer>
    </div>  
   </React.Fragment>        
    );
}


export default Prueba;