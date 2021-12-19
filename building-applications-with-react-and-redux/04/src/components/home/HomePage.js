import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => (
    <div className="jumbotron">
        <h1>Plugralsight Admin</h1>
        <p>React, Redux and webapps..</p>
        <Link to="about" className="btn btn-primary btn-lg">
          Learn more
        </Link>
    </div>
);

export default HomePage;
