import React, { useState } from 'react';
import Modal from './Modal';

const Nav = () => {
    const [visible, setVisible] = useState(false);
    const [btn, setBtn] = useState(false);
    const handleClick = () => {
        setVisible(true)
        setBtn(!btn);
        document.querySelector('body').classList.add('no-scroll');
        document.querySelector('html').classList.add('no-scroll');
    }
    return (
        <>
            <div className='navbar'>
                <div className="container">
                    <div className="navbar-wrap">
                        <a href='#face' className="logo">
                            <img src="img/klen.svg" alt="klen-list" />
                            unosavvy
                        </a>
                        <ul>
                            <li><a href="#face">Главная</a></li>
                            <li><a href="#list">Авто коды</a></li>
                            <li><a href="#footer">Сотрудничество</a></li>
                        </ul>
                        <button onClick={handleClick} className={!btn ? "burger" : "burger burger-active"}></button>
                    </div>
                </div>
            </div>

            <Modal visible={visible} setVisible={setVisible} setBtn={setBtn}/>
        </>
    );
};

export default Nav;