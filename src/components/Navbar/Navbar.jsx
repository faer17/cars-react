/* eslint-disable no-undef */
import { Link } from "react-router-dom"
import logo from "../../assets/logo/Group 1.png"
import React from 'react'

export default function Navbar() {
  return (
    <nav>
        <div className="image_logo">
          <img src={logo} alt="" className="logo"/>
        </div>
        <ul className="list">
            {navbar?.map(({ path, id, name }) => {
                return(
                    <React.Fragment key={id}>
                        <Link to={path}><li className="list_item">{name}</li></Link>
                    </React.Fragment>
                )
            })}
        </ul>

        <div className="btn">
            <button className="btnClick">Manage Booking</button>
        </div>
    </nav>
  )
}
