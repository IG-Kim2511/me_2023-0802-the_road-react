import React, { useState } from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  padding: 10px 20px;
  background-color: #3498db;
  color: white;
  border: none;
  cursor: pointer;
  transition: background-color 3s ease; /* Specify the property to transition */

  &:hover {
    background-color: red; /* New value for the property */
  }
`;

const TransitionExample = () => {
  return (
    <div>
      <StyledButton>
        Hover me
      </StyledButton>
    </div>
  );
};

export default TransitionExample;
