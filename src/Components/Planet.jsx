import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Planet = props => {

    const [planetDetails, setPlanetDetails] = useState("");

    const getPlanet = () => {
        axios.get(`https://swapi.dev/api/planets/${props.num}/`)
        .then(res => {
            console.log(res);
            setPlanetDetails(res.data);
        })
        .catch(err => console.log(err));
    }

    useEffect( () => {
        console.log(props)
        getPlanet();
    }, [props]);

    return (
        <div className="card mt-4 mr-3 shadow-lg rounded">
            <h5 className="card-header bg-dark text-white">{planetDetails.name} Stats</h5>
            <div className="card-body">
                <ul className="list-group">
                    <li className="list-group-item">Climate: {planetDetails.climate}</li>
                    <li className="list-group-item">Terrain: {planetDetails.terrain}</li>
                    <li className="list-group-item">Surface Water: {planetDetails.surface_water}</li>
                    <li className="list-group-item">Population: {planetDetails.population}</li>
                    <li className="list-group-item">Gravity: {planetDetails.gravity}</li>
                    {/* <li className="list-group-item">Rotation Period: {planetDetails.rotation_period}</li>
                    <li className="list-group-item">Orbital Period: {planetDetails.orbital_period}</li> */}
                </ul>
            </div>
        </div>
    );
}

export default Planet;