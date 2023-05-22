import React from 'react'
import styled from 'styled-components'
import Button from './styles/Button';
import { NavLink } from 'react-router-dom';

const Error = () => {
  return (
    <Wrapper>
    <img src="../images/error.svg" alt="error" className='img-Size' />
    <NavLink to='/'>  
      <Button className='btn'> Go BACk</Button>
    </NavLink>

    </Wrapper>
  )
}
const Wrapper = styled.section` 
padding: 3rem;
display: flex;
flex-direction:column;
justify-content: center;
align-items: center;
.img-Size{
  max-width: 60vw;
}
.btn{
    margin-top: 3rem;
    font-size: 1.8rem
}
`;
export default Error
