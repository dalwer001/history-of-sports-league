import React, { useEffect, useState } from 'react';

import Header from '../Header/Header';
import LeagueDetail from '../LeagueDetail/LeagueDetail';
import LeagueDisplay from '../LeagueDisplay/LeagueDisplay';
import './Home.css';



const Home = () => {
    const [footballLeagues, setFootballLeagues] = useState([]);
    const allLeague = footballLeagues.slice(0, 15);

    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/all_leagues.php`;
        fetch(url)
            .then(res => res.json())
            .then(data => setFootballLeagues(data.leagues))
    }, [])





    return (
        <div className="fluid-container body-bg">
            <div>
                <Header></Header>
            </div>
            <div className="row m-0">
                {
                    allLeague.map(league =>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <LeagueDisplay league={league}></LeagueDisplay>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Home;