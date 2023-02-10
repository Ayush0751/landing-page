import React from 'react'
import styled from 'styled-components'
import Card from '../components/Card'
import { InnerLayout } from '../styles/Layout'
import card from '../assets/img/kit.png';
import img2 from '../assets/img/loofah.png';
import img3 from '../assets/img/cups.png';
import img4 from '../assets/img/bamboo.png';



const PaymentSection = () => {
   return (
      <PaymentStyled id='pricing'>
         <InnerLayout>
            <div data-aos='fade-down-right'>
               <h3 className="small-heading">
                  An exceptional service, <span>at  the right price</span>
               </h3>
               <p className="c-para">Shop Today </p>
            </div>
            <div className='card-con'>
               <Card
                  account={'Sustainability Starter Kit'}
                  amount={'$10.99'}
                  text={'All in one combo.'}
                  button={'Shop Now'}
                  card={card}
               />
               <Card
                  account={'Natural Bamboo Loofah'}
                  amount={'$2.99'}
                  text={'Plant-based material - No Chemicals.'}
                  button={'Shop Now'}
                  card={img2}
               />
               <Card
                  account={'Plant Based Reusable Cups'}
                  amount={'$2.39'}
                  text={'100% recyclable and non-toxic.'}
                  button={'Shop Now'}
                  card={img3}
               />
               <Card
                  account={'Reusable Bamboo Straws'}
                  amount={'$1.39'}
                  text={'100% natural, toxic-free, vegan.'}
                  button={'Shop Now'}
                  card={img4}
               />

            </div>
         </InnerLayout>
      </PaymentStyled>
   )
}

const PaymentStyled = styled.section`
 .card-con{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 3rem;
        padding-top: 6.4rem;
        
        @media screen and (max-width: 689px){
          grid-template-columns: repeat(1, 1fr);
        }
    }
   p{
      text-align: center;
   }
`

export default PaymentSection
