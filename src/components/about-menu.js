import React from 'react';
import { Link } from 'react-router-dom';

export default function AboutMenu(props) {
    return (
        <nav className="about-menu">
            <ul>
                <li><Link to="/about/mission">Our mission</Link></li>
                <li><Link to="/about/values">Our values</Link></li>
                <li><Link to="/about/team">Our team</Link></li>
                <li><Link to="/about/labradoodles">Our labradoodles</Link></li>
            </ul>
        </nav>
    );
}
