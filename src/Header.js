import React from 'react';
import './Header.css';
import PersonIcon from '@mui/icons-material/Person';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ForumIcon from '@mui/icons-material/Forum';
import { IconButton } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

function Header({ backButton }) {

    const navigate = useNavigate();

    return (
        <div className='header'>
            {backButton ? (
                <IconButton onClick={() => navigate('/')}>
                    <ArrowBackIosIcon fontSize='large' className='header__icon' />
                </IconButton>
            ) : (
                <IconButton>
                    <PersonIcon fontSize='large' className='header__icon' />
                </IconButton>
            )}

            <Link to="/">
                <img className='header__logo' src="https://logos-world.net/wp-content/uploads/2020/09/Tinder-Emblem.png" alt="" />
            </Link>
            <IconButton onClick={() => navigate('/chat')}>
                <ForumIcon fontSize='large' className='header__icon' />
            </IconButton>
        </div>
    )
}

export default Header
