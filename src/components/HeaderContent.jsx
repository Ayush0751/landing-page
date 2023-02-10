import React from 'react'
import styled from 'styled-components'
import SecondaryButton from './SecondaryButton'
// import bg1 from '../assets/img/bg1.png'
 
const HeaderContent = () => {
   return (
      <HeaderContentStyled >
         <div className="left-content">
            <div className="left-text-container">
               <h1 data-aos='zoom-in-right'>BECOME Sustainable</h1>
               <p className="white">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam delectus architecto sed, corrupti sint nobis cumque numquam provident molestias nemo sequi. Accusantium neque laboriosam nemo fugit fuga. At, rem sed.
               </p>
               <SecondaryButton name='Registered now' />
            </div>
         </div>
         <div className="right-content">
            {/* <img src={bg1} alt="" className="phone cupImg" /> */}
         </div>
      </HeaderContentStyled>
   )
}


const HeaderContentStyled = styled.div`
   display: grid;
   grid-template-columns: repeat(2, 1fr);
   padding-top: 3rem;

   @media screen and (max-width: 700px){
        grid-template-columns: repeat(1, 1fr);
   }

   .left-content{
      display: flex;
      position:relative;
      top:20%;
      align-items: center;
      padding-right: 3rem;
      @media screen and (max-width: 480px){
         width: 100%;
      }

      h1{
         font-size: 4rem;
         font-weight: 600;
         @media screen and (max-width: 700px){
            font-size: 3rem;
         }
      }
      .white{
      color: #fff;
      line-height: 1.8rem;
      }
   }
   .right-content{
      position: relative;
      display: flex;
      justify-content: center;
      

      .phone{
         width: 200%;
         height:150%;
         top:20%;
         left:50px;
         position:relative;
         border-radius:30px;
         
      }
      .ring1{
            position: absolute;
            bottom: 10%;
            right: 0;
            left: auto;
            animation: move2 20s infinite;
            transition: all .4s ease-in-out;
      }
   }

    .message1{
        @keyframes move{
            0%{
                transform: translateY(0) rotate(0) scale(1) translateX(0);
            }
            50%{
                transform: translateY(-10px) rotate(20deg) scale(1.1) translateX(10px);
            }
            100%{
                transform: translateY(0)  rotate(0deg) scale(1) translateX(0);
            }
        }
        @keyframes move2{
            0%{
                transform: translateY(0) rotate(0) scale(1) translateX(0);
            }
            50%{
                transform: translateY(-10px) rotate(60deg) scale(1.1) translateX(10px);
            }
            100%{
                transform: translateY(0)  rotate(0deg) scale(1) translateX(0);
            }
        }
        .cupImg{
            width:150px;
            height:150%;
            top:20%;
            left:100px;
            position:relative;
            borderRadius:100%
        }
    }
   
`

export default HeaderContent
