import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import './LeagueDisplay.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';


const LeagueDisplay = (props) => {

    const { idLeague, strLeague, strSport } = props.league;
    const history = useHistory();
    const showLeagueDetail = idLeague => {
        const url = `League/${idLeague}`;
        history.push(url);
    }

    const [leagueBadge, setLeagueBadge] = useState([]);

    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setLeagueBadge(data.leagues[0]))
    }, [idLeague])

    return (

        <div className=" mt-4 mb-4">
            <div className="card container" style={{ width: '20rem' }}>
                <img src={leagueBadge.strBadge} className="card-img-top img-size p-5" alt="..." />
                <div class="card-body">
                    <h5 className="card-title">{strLeague}</h5>
                    <p>Sports Type: {strSport}</p>
                    <button className="btn btn-success  " onClick={() => showLeagueDetail(idLeague)}> Explore <FontAwesomeIcon icon={faArrowRight} /></button>
                </div>
                <div>
                </div>
            </div>
        </div>
    );
};

export default LeagueDisplay;