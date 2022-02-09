import styled from 'styled-components'

export const StyledWrapper = styled.div`
  width: 100%;
  background-color: rgba(0, 0, 0, 1);
  height: 70px;
  position: fixed;
  top: 0;
  left: 0;
`

export const StyledContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;

  h5 {
    font-size: 24px;

    &:hover {
      cursor: pointer;
    }
  }

  ul {
    list-style: none;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  li {
    text-decoration: none;
    cursor: pointer;

    &:first-child {
      margin-right: 20px;
    }
  }
`
