import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../styles/Layout'
import bgCircles from '../assets/img/plant.png';

const MessagingSection = () => {
   return (
      <MessageStyle>
         <InnerLayout>
            <div className='message-con'>
               <div className="left-items">
                  <h2 data-aos='fade-right' className="secondary-heading">
                  About earthly:
                  </h2>
                  <p className='left-para'>
                  Enter Earthly, a spot for businesses that need to be a part of the green movement. We do an amazing job to give you the information and alternative sustainable products for your cafes and food business. Earthly has a fair trade policy for all business deals. You have the right to place orders for sustainable products that go with your budget and business. We’re endeavoring to set new principles, increase present expectations, and review what is useful for your business and our planet. Each move you make as a business is a chance to be better.
                  </p>
               </div>
               <div className="right-items">
                  <img  src={bgCircles} alt="" className="bgCircle plants" />
               </div>
            </div>
         </InnerLayout>
      </MessageStyle>
   )
}

const MessageStyle = styled.section`
   .message-con{
      display: grid;
      grid-template-columns: repeat(2, 1fr);

      @media screen and (max-width: 1347px){
            grid-template-columns: repeat(1, 1fr);
      }

      .left-items{
         position: relative;
         padding-right: 2rem;
         .left-para{
            padding: 1.6rem 0;
         }
         .images-con{
            display: flex;
            align-items: center;
            .image-2,.image-3,.image-4,.image-5{
               margin-left: -18px;
            }
         }
      //    .bgCircle{
      //       position: relative;
      //       top: 50%;
      //       left: -10%;
      //       z-index: -1;
      //       height:500px;
      //   }
      }
      .right-items{
         position: relative;
         img{
            padding-left: 2rem;
         }
         .bgCircle{
            position: absolute;
            bottom: -7%;
            right: 0;
            z-index: -1;
        }
      }
   }
   .plants{
      position: absolute;
      top: 5%;
      left: -10%;
      z-index: -1;
      height:450px;
      width:90%;
   }
`

export default MessagingSection
