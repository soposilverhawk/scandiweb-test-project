import React from 'react';
import styled from "styled-components";

const Wrapper = styled.div`
    max-width: 1440px;
    margin: 0 auto;
    padding: 2.4rem 0 1.5rem 0;
`

function ContentWrapper({children}) {
  return (
    <Wrapper>
        {children}
    </Wrapper>
  )
}

export default ContentWrapper
