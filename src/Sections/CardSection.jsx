import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../styles/Layout'
// import card from '../assets/img/creditcard.svg'
import card from '../assets/img/kit.png'
// import { fadeInLeft } from 'react-animations'

const CardSection = () => {
   return (
      <CardSectionStyled id='card'>
         <InnerLayout >
            <div className="card-container">
               <div  className="card-left">
                  <h2 data-aos='fade-right' data-aos-duration='3000' className="secondary-heading" >
                     All in one kit
                  </h2>
                  <p>
                     Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt reprehenderit doloremque quia? Odit illo, tempore quod vero exercitationem,
                     voluptatum laudantium quo harum, adipisci tenetur eum.
                  </p>
               </div>
               <div className="card-right">
                  <img className='kit' src={card} alt="" />
               </div>
            </div>
         </InnerLayout>
      </CardSectionStyled>
   )
}

const CardSectionStyled = styled.section`
   .card-container{
      display: grid;
      grid-template-columns: repeat(2, 1fr);

      @media screen and (max-width: 845px){
         grid-template-columns: repeat(1, 1fr);
      }

      .card-right{
         display: flex;
         justify-content: flex-end;
      }
      .card-left{

         p{
            padding: 1rem 0;
         }
      }
   }
   .kit{
      width:85%;
      border-radius:10%;
   }
`

export default CardSection
