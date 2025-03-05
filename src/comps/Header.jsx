import React, {useState} from 'react'
import classes from './css-modules/Header.module.css'
import logo from '../static/Logo.svg'
import burger from '../static/Menu.svg'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState('false');


  return (
    <div className={classes.container}>
      <div className={classes.row}>

        <div className={classes.logo}>
          <img srcSet={logo} alt="Concert" className={classes.logo__img} />
        </div>

        <div className={` ${classes.mobileMenu} ${isMenuOpen ? classes.open : ''} `}>
          <nav className={classes.nav}>
            <ul className={classes.items}>
              <li className={classes.item}>Concerts</li>
              <li className={classes.item}>Interviews</li>
              <li className={classes.item}>Contacts</li>
            </ul>
          </nav>
          <div className={classes.close}>
            {/* <img src={closeIcon} alt="Close Menu" className={classes.close__img} /> */}
          </div>
        </div>

        <div className={classes.burger} onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <img src={burger} alt="Menu" className={classes.burger__img} />
        </div>


      </div>
    </div >
  )
}

export default Header