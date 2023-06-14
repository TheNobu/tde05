import { useState } from "react";

const array = [1,20,3,5,13,22,4]

const Numeros = () => {

    const [OrdemNumeros,setOrdemNumeros] = useState()

    function sortfuction (a,b){
        return (a - b)
    }

    const OrdenarNumerosCrescente = () => {
        const ordenar = array.sort(sortfuction)
        setOrdemNumeros(ordenar)
    }
    // for(let i = 0;i<array.length;i++){
    //     arrayNovo[i] = array[i]
    //     arrayNovo[i+1] = ","
    // }
    return (
    <div>
        <button onClick = {OrdenarNumerosCrescente}>Ordenar</button>
        <h4>Numeros ordenados {OrdemNumeros}</h4>
    </div>    
    );
}

export default Numeros;