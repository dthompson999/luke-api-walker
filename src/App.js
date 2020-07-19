import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Router } from "@reach/router";
import { navigate } from '@reach/router';
import Person from './Components/Person';
import Planet from './Components/Planet';

function App() {

    const [input, setInput] = useState("People");
    const [id, setID] = useState(0);

    const runSearch = e => {
        e.preventDefault();
        navigate(`/${input}/${id}`);
    }

    return (
        <div className="container">
            <div className="mx-auto" style={{width: "860px"}}>
                <div className="jumbotron mt-4 mb-4 bg-white text-white shadow-lg rounded" style={{width: "895px"}}>
                    <div className="image shadow-lg rounded" style={{backgroundImage: "url('https://i.pinimg.com/originals/8b/08/0a/8b080ac9c40d141137f03f08a6a2ecd1.jpg')", height: "295px", width: "831px"}}></div>
                </div>
            </div>
            <div className="mx-auto" style={{width: '550px'}}>
                <form onSubmit={ runSearch }>
                    <div className="form-inline">
                        <div className="form-group mb-2">
                            <label className="form-group mt-1" ><h4>Search For:</h4></label>
                        </div>
                        <div className="form-group mx-sm-3 mb-2">
                            <select type="select" className="form-control" name="select" style={{width: '180px'}} onChange={e => setInput(e.target.value)}>
                                <option value="People">People</option>
                                <option value="Planets">Planets</option>
                            </select>
                        </div>
                        <div className="form-group mb-2">
                            <label className="form-group mt-1" ><h4>ID:</h4></label>
                        </div>
                        <div className="form-group mx-sm-3 mb-2">
                            <input type="number" className="form-control" name="idInput" style={{width: '60px'}} onChange={e => setID(e.target.value)}/>
                        </div>
                        <button type="submit" className="btn btn-primary mb-2">Search</button>
                    </div>
                </form>
                <Router>
                    <Person path="/People/:num"/>
                    <Planet path="/Planets/:num"/>
                </Router>
            </div>
        </div>
    );
}

export default App;
