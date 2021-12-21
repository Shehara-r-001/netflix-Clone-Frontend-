import React, { useState, useEffect } from 'react';
import './index.css';

const netflix_logo = 'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg';
const netflix_avatar = 'https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png';

function Navbar() {

    const [hide, setHide] = useState(true)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100){     // when y > 100px
                setHide(false);
            }
            else{
                setHide(true);
            }
        })
        return () => {
            window.removeEventListener("scroll")
        }
    }, []); // once navbar loads

    return (
        <div className={`navbar ${!hide && 'navbar-blackbg'}`}>
            <img className='netflix-logo' src={netflix_logo} alt="logo" />
            <img className='netflix-avatar' src={netflix_avatar} alt="avatar" />
        </div>
    )
}

export default Navbar
