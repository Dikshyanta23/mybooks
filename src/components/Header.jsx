import React from 'react'
import styled from 'styled-components';

const Header = () => {
  return (
    <Wrapper>
      <div className="header-center">
        <h1>My Books</h1>
        <p>
          Listed below are all the books that I have read. Each book is accompanied with a small set of
          information such as published date, category, title, etc., along with my personal rating and take on the book as description.
        </p>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
    width: 90vw;
    max-width: var(--max-width);
    margin: 0 auto;
    h1 {
      text-align: center;
      margin: 2rem 0;
    }
      p {
        line-height: 2;
        letter-spacing: 1px;
        margin-bottom: 1rem;
      }
`

export default Header
