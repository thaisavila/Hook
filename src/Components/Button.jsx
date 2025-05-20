import { useState } from "react";

const Button = () => {
    const [contador, setContador] = useState(0)

  function increment(){
    setContador(contador + 1)
  }
  return ( 
    <div>
    <button onClick={increment}>Clique aqui {contador}</button>
    </div>
   );
}
 
export default Button;