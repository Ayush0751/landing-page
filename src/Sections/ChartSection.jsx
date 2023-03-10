import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../styles/Layout'
// import ChartStats from '../components/ChartStats'
import chart from '../assets/img/multipleCups.png'
import chart2 from '../assets/img/orangeCup.png'
import AnimatedButton from '../components/AnimatedButton'


const ChartSection = () => {
   return (
      <ChartStyled  id='feathures'>
         <InnerLayout>
            <div className="chart-con">
               <div className="chart-left">
                  <div className="stats">
                     <div className="stats-money">
                     </div>
                     <img src={chart} alt="" />
                     <img className='orngcup' src={chart2} alt="" />
                  </div>
               </div>
               <div className="chart-right">
                  <h2 data-aos='fade-right' className="secondary-heading">
                  EARTHLY IS PLANT-BASED AND MADE FROM:
                  </h2>
                  <p>
                     <b>BAMBOO AND WHEAT FIBRE: </b>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus, cum.<br />
                     <b>ORANGE FIBRE: </b>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est, dolorum!
                  </p>
                  <AnimatedButton text={'Learn More'} />
               </div>
            </div>
         </InnerLayout>
      </ChartStyled >
   )
}
const ChartStyled = styled.section`
   .chart-con{
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      @media screen and (max-width: 1347px){
            grid-template-columns: repeat(1, 1fr);
      }
      .chart-left{
         width: 80%;
         @media screen and (max-width: 1347px){
            width: 100%;
         }

         .stats{
            img{
               box-shadow: 0px 25px 50px rgba(22, 25, 79, 0.05);
               border-radius: 62px;
               width: 100%;
            }
            .stats-money{
               display: flex;
               padding-bottom: 1.3rem;
               justify-content: space-between;
            }
         }
      }
      .chart-right{
         padding-left: 2rem;
         p{
            padding: 1.3rem 0;
         }
      }
   }
   .orngcup{
      height:220px;
   }
`

export default ChartSection
