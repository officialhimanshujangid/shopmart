import { Link } from "react-router-dom";
import styled from "styled-components";
/* eslint-disable react/prop-types */
const Li = styled.li`
  padding: 5px 15px;
  background-color: rebeccapurple;
  font-family: "Montserrat", sans-serif;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5), 10px 10px 10px rgba(7, 7, 7, 0.5);
  border-radius: 20px;
  text-transform: capitalize;
  color: white;
  margin: 1px 5px 15px 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  letter-spacing: 1px;
`;

function CategoryBox({ item }) {
  return (
    <Li>
      <Link to={`/productList?category=${item}`}>{item}</Link>
    </Li>
  );
}

export default CategoryBox;
