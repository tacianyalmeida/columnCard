import ContainerCard from "../../ContainerCard/ContainerCard"
import iconeSedan from "../../../images/icon-sedans.svg"
import iconeSuv from "../../../images/icon-suvs.svg"
import iconeLuxury from "../../../images/icon-luxury.svg"
import Icon from "../../Icon/Icon"
import Button from "../../Buttom/Button"
import './App.css'
const App = () =>{
    return(

        <> 
        
        <Icon
        imagem={iconeSedan}/>
      <ContainerCard
      
      titulo={"SEDANS"}
      texto="Lorem ipsum dolor sit amet,
    consectetur adipisicing eli Eaque eum in 
    maxime sit odit tempora omnis nihil dignissimos 
    ipsum iste voluptas dicta praesentium
     quisquam dolorem tenetur quos obcaecati?"
     /> 
     <Button nomeButao="Learn More"
    />
   
   
     <Icon 
     imagem={iconeSuv}/>
<ContainerCard
    
      titulo={"SUVS"}
      texto="Lorem ipsum dolor sit 
    consectetur adipisicing eli Eaque eum in 
    maxime sit odit tempora omnis nihil dignissimos 
    ipsum iste voluptas dicta praesentium
     quisquam dolorem tenetur quos obcaecati"/> 
      <Button nomeButao="Learn More"
    />


 <Icon 
     imagem={iconeLuxury}/>
     
<ContainerCard
      
      titulo={"LUXURY"}
      texto="Lorem ipsum dolor sit 
    consectetur adipisicing eli Eaque eum in 
    maxime sit odit tempora omnis nihil dignissimos 
    ipsum iste voluptas dicta praesentium
     quisquam dolorem tenetur quos obcaecati"/> 
      <Button nomeButao="Learn More"
    />
        
       
         </>
 )
}

  
   
export default App; 