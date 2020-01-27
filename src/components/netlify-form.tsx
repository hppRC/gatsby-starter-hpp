import React from 'react';

import styled from '@emotion/styled';

//this form works only Netlify

const Component: React.FCX = ({ className }) => (
  <form
    className={className}
    name='contact'
    method='POST'
    data-netlify='true'
    data-netlify-honeypot='bot-field'
  >
    <input type='hidden' name='form-name' value='contact' />
    <input type='hidden' name='bot-field' />
    <label>
      name<abbr title='required'>*</abbr>
      <input
        type='text'
        className='form-control'
        name='name'
        placeholder='your name'
        maxLength={30}
        minLength={2}
        required
        autoComplete='name'
      />
    </label>

    <label>
      mail<abbr title='required'>*</abbr>
      <input
        type='email'
        name='email'
        placeholder='your e-mail'
        pattern="^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$"
        required
        autoComplete='email'
      />
    </label>

    <label>
      <p>message</p>
      <abbr title='required'></abbr>
      <textarea name='content' rows={8} required />
    </label>

    <button type='submit'>submit</button>
  </form>
);

const StyledComponent = styled(Component)`
  position: relative;

  > label {
    display: block;
    max-width: 300px;
    padding: 1rem 0;
    width: 100%;

    > abbr {
      text-decoration: none;
    }

    > input[type='text'],
    > input[type='email'] {
      border: none;
      border-bottom: 2px solid #000000;
      padding: 0.3em;
      transition: 0.5s;
      width: 100%;
      :focus {
        border-bottom: 2px solid #00000055;
        outline: none;
      }
    }

    > textarea {
      border: 2px solid #00000055;
      color: #000000;
      transition: border 0.5s;
      width: 100%;
      :focus {
        border: 2px solid #00000055;
        outline: none;
      }
    }

    > button {
      border: 2px solid #00000055;
      border-radius: 5px;
      color: #000000;
      padding: 0.5rem 1rem;
    }
  }

  @media screen and (max-width: 1100px) {
  }
  @media screen and (max-width: 768px) {
  }
  @media screen and (max-width: 480px) {
  }
  @media screen and (max-height: 430px) {
  }
`;

export default StyledComponent;
