import { useState } from "react";

const Exibir = () => {
    const [name,setName] = useState()
    return (
        <form>
            <label>Escreva seu nome:
                <input 
                type= "text"
                value = {name}
                onChange={(e) => setName(e.target.value)}
                />
                <h4>Nome: {name}</h4>
            </label>
        </form>
    );
}

export default Exibir;