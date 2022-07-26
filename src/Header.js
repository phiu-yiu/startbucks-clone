import React from 'react';
import './Header.css'
import {Link} from "react-router-dom";
import {Example} from "./Example";
import FindAStore from "./FindAStore";
import {useSelector} from "react-redux";
import {selectUser} from "./features/userSlice";
import SignInButton from "./SignInButton";
import LogoutButton from "./LogoutButton";
import SignUpButton from "./SignUpButton";

function Header({menuPage}) {
  const user = useSelector(selectUser)

  return (<div className={`header ${menuPage && 'header__menuPage'}`}>
    <div className="header__left">
      <Link className="header__logo" to="/">
        <img
          src='https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1200px-Starbucks_Corporation_Logo_2011.svg.png'
          alt=""
        />
      </Link>
      <Link className='header__link' to={user ? '/menu' : '/account/sign-in'}>
        Menu
      </Link>
      <Link className='header__link' to="/rewards">
        Rewards
      </Link>
      <Link className='header__link' to="/gift">
        Gift Cards
      </Link>
    </div>
    <div className="header__right">
      <Example/>
      <FindAStore/>
      {!user ? (
        <>
            <SignInButton />
            <SignUpButton />
        </>
      ) : (
         <div className='header__logout'>
          {menuPage ? <LogoutButton /> : <Link to='/menu'>Order Now</Link>}
         </div>
      )}
    </div>

  </div>);
}

export default Header;