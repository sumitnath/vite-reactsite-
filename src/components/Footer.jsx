import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import Button from '../styles/Button'
import{FaDiscord,FaInstagram, FaYoutube} from 'react-icons/fa'
const Footer = () => {
    return (
<Wrapper>
<section className="contact-short">
<div className='grid grid-two-column'>
    <div>
    <h3> Ready to get started</h3>
    <h3>Talk to us today</h3>
    </div>
    <div>
    <NavLink to="/">
    <Button>
    Get Started
    </Button>
    </NavLink>
    </div>
</div>
</section>
  <footer>
  <div className="container grid grid-four-column">
  {/* Ist column */}  
  <div className="footer-about">
     <h3> Sumit the Ace</h3>
     <p> The greatnes lie in the learning not on boosting</p>
    </div>
    {/* 2nd column */}
    <div className="footer-subscribe">
     <h3> Subscribe for update</h3>
     <form action="#">
     <input type="email" required 
     autoComplete="off"
     placeholder="Email" />
     <input type="submit" value="Subscribe"/>
     </form>
    </div>
    {/* 3rd column */}
 <div className="footer-social">
    <h3> Follow Us</h3>
    <div className="footer-social--icons">
      <div>
      <FaDiscord className="icons"/>
      </div>
      <div>
      <FaInstagram className="icons"/>
      </div>
      <div>
      <FaYoutube className="icons"/>
      </div>
    </div>
  </div>
  <div className="footer-contact">
  <h3> Call us</h3>
  <h3> +91-123-1234-123</h3>
  </div>
  </div>
  {/* bootom section */}
  <div className="footer-bottom--section">
  <hr/>
  <div className="container grid grid-two-column">
  <p>
  @{new Date().getFullYear()} Sumit Nath All Rights Reserved
  </p>
  <div>
  <p>PRIVACY POLICY</p>
  <p>TERMS & CONDITIONS</p>
  </div>
  </div>
  
  </div>
  </footer>
</Wrapper>
    )
}
const Wrapper = styled.section `
.contact-short{
    max-width:60vw;
    margin: auto;
    padding:5rem 10rem;
    background-color: ${({theme})=> theme.colors.bg};
 border-radius: 1rem;
 box-shadow: ${({theme})=>theme.colors.shadowSupport};
 transform: translateY(50%);

 .grid div:last-child{
    justify-self:end;
    align-self: center;
 } 

}

footer{
padding:12rem 0 1rem 0;
background-color: ${({ theme }) => theme.colors.footer_bg};

h3 {
    color:${({theme})=>theme.colors.hr};
    margin-bottom: 2.4rem;
}
p {
    color: ${({theme})=>theme.colors.white};
}
.footer-social--icons {
    display:flex;
    gap:2rem;
  
    div {
        padding: 1rem;
        border-radius: 50%;
    border:2px solid ${({theme})=>theme.colors.white};
 

 .icons {
    color: ${({theme})=>theme.colors.white};
    font-size: 2.4rem;
    position:relative;
    cursor:pointer;
   }
  }
 }
 .footer-bottom--section {
    padding-top: 4rem;
    hr {
      margin-bottom: 1rem;
      color: ${({ theme }) => theme.colors.hr};
      height: 0.1px;
    }
  }
}

@media (max-width: ${({ theme }) => theme.media.mobile}) {
    .contact-short {
      max-width: 95vw;
      padding: 2rem 0rem;
      display: flex;
      justify-content: center;
      align-items: center;
      .contact-short-btn {
        text-align: center;
        justify-self: flex-start;
      }
    }
    footer .footer-bottom--section {
      padding-top: 3.2rem;
    }
  }
    
`
export default Footer