import React from 'react'
import './Header.css'

import 'react-sticky-header/styles.css';
import StickyHeader from 'react-sticky-header';
import Navbar from './Navbar/Navbar'

let Header = (props) => {
    return(
        <StickyHeader
        header={
            <div className='header'>
                <div className='navbar_wrapper'>
                    <Navbar />
                </div>
            </div>
        }
        >        
        </StickyHeader>
    )
}

export default Header