import React from 'react';

export default class Partida extends React.Component {

    render() {

        const { estadio, data, horario } = this.props;
        return (
            <div>
                <h2>{ estadio }</h2>
                <div>
                    <span>{ data }</span>
                    <span> - </span>
                    <span>{ horario }</span>
                </div>
            </div>
        ); 
    }

}