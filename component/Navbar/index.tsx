import React, {useRef, useState} from 'react';
import SearchIcon from '../../public/icons/search.svg'
import Burger from '../../public/icons/burger.svg'
import Image from 'next/image'
import styles from './index.module.scss'
import {Drawer} from 'antd';

const Navbar = () => {


    const [open, setOpen] = useState(false);

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    return (
        <div className={styles.navbarSection}>
            <div className={styles.navbarLogo}>
                <h1>Your logo</h1>
            </div>
            <div className={styles.navbarSearch}>
                <Image
                    src={SearchIcon}
                    alt="Ups!.. error"
                />
            </div>
            <div className={styles.navbarBurger} onClick={showDrawer}>
                <div className={styles.hamburger}>
                    <div className={styles.topBun}></div>
                    <div className={styles.meat}></div>
                    <div className={styles.bottomBun}></div>
                </div>
            </div>
            <Drawer style={{textAlign: 'center'}}
                    closable={false} placement="right" onClose={onClose} open={open}>
                <p className={styles.textHoverEffect}>Portfolio</p>
                <p className={styles.textHoverEffect}>Contact</p>
                <p className={styles.textHoverEffect}>My Blog</p>
            </Drawer>
        </div>
    );
};

export default Navbar;