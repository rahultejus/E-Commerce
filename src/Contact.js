import React from 'react';
import styled from "styled-components";

const Contact = () => {
  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
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
    }
  `;

  return (
    <Wrapper>
      <h2 className="common-heading">Contact page</h2>

      <iframe
        title="MyFrame" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.265588856342!2d73.91455641541671!3d18.562061287384868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c147b8b3a3bf%3A0x6f7fdcc8e4d6c77e!2sPhoenix%20Marketcity%20-%20Viman%20Nagar!5e0!3m2!1sen!2sin!4v1664345115285!5m2!1sen!2sinhttps://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3302.8318175019463!2d74.84108810000001!3d34.125055100000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e185afae42b685%3A0xdf5ec84b1ac8f98d!2sNational%20Institute%20of%20Technology%20(NIT)%2C%20Srinagar!5e0!3m2!1sen!2sin!4v1684666161049!5m2!1sen!2sin"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"></iframe>
      <div className="container">
        <div className="contact-form">
          <form
            action="https://formspree.io/f/mnqyyayq"
            method="POST"
            className="contact-inputs">
            <input
              type="text"
              placeholder="Enter username"
              name="username"
              required
              autoComplete="on"
            />

            <input
              type="email"
              name="Email"
              placeholder="Enter Your Email"
              autoComplete="on"
              required
            />

            <textarea
              name="Message"
              cols="30"
              rows="5"
              required
              autoComplete="on"
              placeholder="Enter your message"></textarea>

            <input type="submit" value="send" />
          </form>
        </div>
      </div>
    </Wrapper>
  );
};
export default Contact;