import React from 'react';
import mealsImage from '../../assets/meals.jpeg';
import HeaderCartButton from './HeaderCartButton';
import classes from './Header.module.css';

const Header = (props) => {
    return <div>
        <header className={classes.header}>
            <h1>React Meals</h1>
            <HeaderCartButton onClick={props.onShowCart}/>
        </header>
        <div className={classes['main-image']}>
            <img src={mealsImage}/>
        </div>
    </div>
}

export default Header;