import React from 'react'
import './Reccomended.css'
import {NavLink} from 'react-router-dom'

const Item = (props) => {
    return(
        <div className='reccomended_item'>
            <div className='rec_img'>
                <img src ='https://cdn.shopify.com/s/files/1/1344/9499/products/bad-drip-labs-cereal-trip-ejuice-ejuice-bad-drip-labs-759646_550x.jpg?v=1565735280' alt='123'></img>
            </div>
            <div className='rec_text'>
                Sphynx Juice
                <div className='rec_link'>
                    <NavLink to='/main/xuy'>To Full Recipe >> </NavLink>
                </div>
            </div>
        </div>
    )
}


const Reccomended = (props) => {
    return(
        <div className='reccomended'>
            <div className='reccomended_grid'>
                <Item />
                <Item />
                <Item />
                <Item />
            </div>
        </div>
    )
}

export default Reccomended