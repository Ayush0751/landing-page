import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../styles/Layout'
import lines from '../assets/img/lines.svg'

const FAQSection = () => {
   return (
      <FaqStyled id='faq'>
         <InnerLayout>
            <div  data-aos='fade-right'>
               <h3 className="small-heading">CONTACT <span>Us</span></h3>
               <p className='c-para'>
                  <b>16 Liffey Ave, Liffey Valley Park, Lucan, Co. Dublin, K78 HW50, Ireland</b><br />
                  <b>hello@earthly.ie</b><br />
                  <b>+353 1552 4908</b>
               </p>
            </div>
            <div className="lines">
               <img src={lines} alt="" />
            </div>
         </InnerLayout>
      </FaqStyled>
   )
}
const FaqStyled = styled.section`
   .c-para{
      width: 60%;
      margin: 0 auto;
   }
   .lines{
      position: absolute;
      left: 0;
      top: 360%;
      width: 100%;
      z-index: -1;

      img{
         width: 100%;
      }
   }
   .questions-con{
      padding-top: 2rem;
   }

`

export default FAQSection
