import React from 'react'
import styled from 'styled-components'

const Contact = () => {
   const Wrapper = styled.section`
   .container {
    margin-top: 6rem;
    text-align: center;

    .contact-form {
      max-width: 50rem;
      margin: auto;

    .contact-inputs {
          display: flex;
          flex-direction:column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
        }
      }
    }
  }
  }` 
  return (
    <Wrapper>
    <h2 className="common-heading">Feel free to contact us</h2>

    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13996.818085292884!2d77.19258322176508!3d28.713433258932554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1680784218178!5m2!1sen!2sin"
     width="100%" height="450" style={{border:0}} allowFullScreen="" loading="lazy"
     referrerPolicy="no-referrer-when-downgrade"></iframe>
  <div className="container">
  <div className="contact-form">
    <form action ="https://formspree.io/f/myyanrva" method="POST" className="contact-inputs">
    <input type="text" placeholder="usename" name="usename" autoComplete='off' required />
    <input type="Email" placeholder="Email" name="email" autoComplete='off' required />
    <textarea name="message" col="30" row="6" autoCapitalize="off" required>
            </textarea>
            <input type="submit" value="send"/>
    </form>
    </div>
  </div>

  </Wrapper>
  )
}

export default Contact