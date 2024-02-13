import styled from "styled-components";

/* eslint-disable react/prop-types */
const Div = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 0.2rem;
`;
function Row({ children }) {
  return <Div>{children}</Div>;
}

export default Row;
