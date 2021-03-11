import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Male from '../../images/male.png';
import Female from '../../images/female.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faFlag, faFutbol, faMars } from '@fortawesome/free-solid-svg-icons';
import {faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import './LeagueDetail.css'

const LeagueDetail = () => {
    const { idLeague } = useParams();
    const [league, setLeague] = useState([]);
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setLeague(data.leagues[0]))
    }, [idLeague])

const {strLogo,strLeague,intFormedYear,strCountry,strSport,strGender,strDescriptionEN,strDescriptionDE,strBanner}=league;

    let leagueImage;
    if ('Male' === league.strGender) {
        leagueImage = <img className='w-100'src={Male} alt="" />
    }
    else if ('Female' === league.strGender) {
        leagueImage = <img className='w-100' src={Female} alt="" />
    }
    else if('Mixed' === league.strGender){
        leagueImage = <img className='w-100' src={Female} alt="" />
    }

    const banner={
        width: '100%',
        height: '60vh',
        backgroundRepeat:"noRepeat",
        backgroundPosition:"center",
        backgroundSize: "cover",
        backgroundImage: `url(${strBanner})`
    }

    return (
        <div className='body-bg'>
            <div className="fluid-container header-bg" style={banner}>
                <div className="container text-center" >
                    <div>
                    <img className="w-75 img-fluid title" src={strLogo} alt=" " />
                    </div>
                </div>
            </div>

            <div className="container text-white mb-3 card-font mt-4 p-4">
                <div style={{ width: '100%' }}>
                    <div className="row  row-detail">
                        <div className="col-md-8 col-sm-12">
                            <div className="card-body">
                                <h5 className="card-title">{strLeague}</h5>
                                <p className="card-text"><FontAwesomeIcon icon={faMapMarkerAlt} /> Founded: {intFormedYear}</p>
                                <p className="card-text"><FontAwesomeIcon icon={faFlag} /> Country: {strCountry}</p>
                                <p className="card-text"><FontAwesomeIcon icon={faFutbol} /> Sport Type: {strSport}</p>
                                <p class="card-text"><FontAwesomeIcon icon={faMars} /> Gender: {strGender}</p>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-12 league-image py-2">
                            <div>
                            {leagueImage}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-lg-12">
                <div className="container">
                    <p className="text-white text-define">{strDescriptionEN}</p>
                    <p className="text-white text-define">{strDescriptionDE}</p>
                </div>
            </div>
            

            <div className="d-flex justify-content-center">
                <a className="p-4" href={`http://${league.strTwitter}`} target="_blank/" ><FontAwesomeIcon className="icons fa-3x text-info bg-white rounded-circle p-2" icon={ faTwitter} /></a>
                <a className="p-4" href={`http://${league.strFacebook}`} target="_blank/" ><FontAwesomeIcon className="icons fa-3x text-primary bg-white rounded-circle p-2" icon={ faFacebook} /></a>
                <a className="p-4" href={`http://${league.strYoutube}`} target="_blank/" ><FontAwesomeIcon className="icons fa-3x text-danger bg-white rounded-circle p-2" icon={ faYoutube} /></a>
            </div>

        </div>

    );
};

export default LeagueDetail;