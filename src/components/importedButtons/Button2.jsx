import React from 'react';
import styled from 'styled-components';

const Button2 = (value) => {
  return (
    <StyledWrapper>
      <button className="btn">
       view all services
      </button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .btn {
    font-size: 0.9rem;
    padding: 1rem 2.5rem;
    border: none;
    outline: none;
    border-radius: 0.4rem;
    cursor: pointer;
    text-transform: uppercase;
    background-color: rgb(38, 38, 170);
    color: rgb(234, 234, 234);
    font-weight: 700;
    transition: 0.6s;
    box-shadow: 0px 0px 60px #1f4c65;
    // -webkit-box-reflect: below 10px linear-gradient(to bottom, rgba(0,0,0,0.0), rgba(0,0,0,0.4));
  }

  .btn:active {
    scale: 1.05;
  }

  .btn:hover {
    background: rgb(2,29,78);
    background: linear-gradient(270deg, rgba(2, 29, 78, 0.681) 0%, rgba(31, 215, 232, 0.873) 60%);
    color: rgb(4, 4, 38);
    scale: 1.05;
  }`;

export default Button2;
