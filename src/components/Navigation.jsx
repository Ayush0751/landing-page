import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-scroll'
const Navigation = () => {



   return (
      <NavigationStyled>
         <div className="logo">
         </div>
         <ul>
            <li>
               <Link to="header" spy={true} smooth={true}>Home </Link>
            </li>
            <li>
               <Link to="feathures" spy={true} smooth={true}>Features </Link>
            </li>
            <li>
               <Link to="pricing" spy={true} smooth={true}>Pricing </Link>
            </li>
         </ul>
      </NavigationStyled>
   )
}

const NavigationStyled = styled.nav`
   display: flex;
   justify-content: space-between;
   align-items: center;
   
   ul{
      display: flex;
      position:relative;
      top:20px;
      right:400px;
      justify-content: space-between;
      width: 40%;
      li{
         cursor: pointer;
      }
   }
`

export default Navigation
