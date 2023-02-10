import React from 'react';
import styled from 'styled-components';

function Card({
   account, amount, text, button, card}) {
   return (
      <CardStyled >
         <h4 className="card-title">
            {account}
         </h4>
         <h4 className="card-title">
            {amount} <span></span>
         </h4>
         <p className="c-para">{text}</p>
         <div className="button-con">
            <button>{button}</button>
         </div>
         <div className="card-image-con">
            <img className='cardImg' src={card} alt="" />
         </div>
      </CardStyled >
   )
}

const CardStyled = styled.div`
    background-color: white;
    padding: 3rem 2rem;
    border-radius: 50px;
    box-shadow: 0px 25px 50px rgba(22, 25, 79, 0.05);
    .card-title{
        font-size: 1.7rem;
        color: #000;
        text-align: center;
        padding: 1rem 0;
        span{
            font-size: 1.1rem;
        }
    }
    .button-con{
        text-align: center;
        padding: 1.4rem 0;
        button{
            border: 2px solid #16194F;
            padding: .6rem 1rem;
            outline: none;
            cursor: pointer;
            background: transparent;
            border-radius: 20px;
            font-size: inherit;
            color: #16194F;
        }
    }
    .card-image-con{
        display: flex;
        justify-content: center;
        img{
            width: 70%;
        }
    }
    .plan-con{
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 1.4rem 0;
        img{
            padding: 0 .2rem;
        }
    }
    .cardImg{
      border-radius:10%;
    }
`;
export default Card;