import { Link } from "react-router-dom";
import styled from "styled-components";

/* eslint-disable react/prop-types */
const Div2 = styled.div`
  width: 17vw;
  height: 40vh;
  background: linear-gradient(to right bottom, #402955, #a973df);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border-radius: 5px;
  text-align: center;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5), 10px 10px 10px rgba(7, 7, 7, 0.5);
  transition: all ease-in-out 0.3s;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
    transition: all ease-in-out 0.3s;
  }
`;
const Img = styled.img`
  width: 15vw;
  height: 15vw;
  margin: 4px 8px;
  border-radius: 100px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5), 10px 10px 10px rgba(7, 7, 7, 0.5);
`;
const H2 = styled.h2`
  font-size: 1.2vw;
  font-weight: 100;
  color: #ffffff;
  text-transform: capitalize;
  font-family: "Mulish", sans-serif;
`;
function ItemBox({ item }) {
  return (
    <Link to={`/producInfo/${item.id}?category=${item.category}`}>
      <Div2>
        <H2>{item.title}</H2>
        <Img src={item.thumbnail} alt="" />
      </Div2>
    </Link>
  );
}

export default ItemBox;
