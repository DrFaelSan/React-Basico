import React from 'react';

// import Contador from './Contador';
import PlacarContainer from './PlacarContainer'

const dados = {
    partida: {
        estadio: "Maracanã/RJ",
        data: "01/06/2019",
        horario: "19h",
    },
    casa: {
        nome: "Corinthians",
    },
    visitante: {
        nome: "Palmeiras",
    }

};

export default class App extends React.Component {
    render() {
        return <PlacarContainer partida={dados.partida} 
                                casa={dados.casa}
                                visitante={dados.visitante}/>
    }
}