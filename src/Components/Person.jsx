import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';

const Person = (props) => {

    const [personDetails, setPersonDetails] = useState("");
    const [homeworld, setHomeworld] = useState("")

    const getPeople = () => {
        axios.get(`https://swapi.dev/api/people/${props.num}`)
        .then(res => {
            console.log(res);
            setPersonDetails(res.data);
        })
        .catch(err => console.log(err));
    }

    const goToHomeworld = e => {
        e.preventDefault();
        console.log(homeworld);
        let homeworldID = homeworld.url.split("/")[homeworld.url.split("/").length-2]
        console.log(homeworldID);
        navigate(`/Planets/${homeworldID}`);
    }

    useEffect( () => {
        getPeople();
    }, [props]);

    useEffect( () => {
        axios.get(personDetails.homeworld)
        .then(res => {
            console.log(res);
            setHomeworld(res.data);
        })
    }, [personDetails.homeworld]);

    return (
        <div className="card mt-3 ml-3 shadow-lg rounded" style={{width: '500px'}}>
            <h5 className="card-header bg-dark text-white" style={{backgroundImage: "url('https://i.gifer.com/myp.gif')"}}>{personDetails.name} Stats</h5>
            <div className="card-body">
                <ul className="list-group">
                        <li className="list-group-item">Birth Year: {personDetails.birth_year}</li>
                        <li className="list-group-item">Height: {personDetails.height}</li>
                        <li className="list-group-item">Mass: {personDetails.mass}</li>
                        <li className="list-group-item">Hair Color: {personDetails.hair_color}</li>
                        {/* <li className="list-group-item">Eye Color: {personDetails.eye_color}</li>
                        <li className="list-group-item">Gender: {personDetails.gender}</li> */}
                </ul>
                    <a href="/#" className="btn btn-primary mt-4" onClick={ goToHomeworld }>Go to HomeWorld of {homeworld.name}</a>
            </div>
        </div>
    );
}

export default Person;