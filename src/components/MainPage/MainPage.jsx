import React from 'react'
import './MainPage.css'

import Reccomended from './Reccomended/Reccomended'
import MainInfo from './MainInfo/MainInfo'


const MainPage = (props) => {

    return(
        <div className='main_wrapper'>
            <section className="main_image">
                <h1>Welcome to DIY E-liquid community<br></br><span>presented by sphynx juice</span></h1>
            </section>
            <section className='main_info_section'>
                <MainInfo />
            </section>
            <section className="main_recomended">
                <Reccomended />
            </section>
        </div>
    )
}

export default MainPage
