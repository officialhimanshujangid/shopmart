import { Link } from "react-router-dom";
import styled from "styled-components";
import { GrLinkNext } from "react-icons/gr";
import { formatCurrency } from "../../data/helpers";

/* eslint-disable react/prop-types */
const Div3 = styled.div`
  width: 90vw;
  background: linear-gradient(to right bottom, #ffffff, #441275);
  margin: 5px 0px 5px 5px;
  display: flex;
  align-items: center;
  position: relative;
  border-radius: 10px;
`;
const Div2 = styled.div`
  margin: 10px 10px 5px 3vw;
`;
const Img = styled.img`
  width: 15vw;
  height: 30vh;
  margin: 4px 8px 10px 10px;
  border-radius: 10px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5), 10px 10px 10px rgba(7, 7, 7, 0.5);
`;
const H2 = styled.h2`
  font-size: 2rem;
  font-weight: 100;
  color: #470e80;
  text-transform: capitalize;
  font-family: "Mulish", sans-serif;
`;
const Div4 = styled.div`
  position: absolute;
  right: 50px;
  background-color: #400e72;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5), 10px 10px 10px rgba(7, 7, 7, 0.5);
  color: #f8f5fc;
  padding: 10px;
  border-radius: 50px;
  transition: all ease-in-out 0.3s;
  font-weight: 900;
  &:hover {
    transform: scale(1.2);
    transition: all ease-in-out 0.3s;
  }
`;
function ItemBox({ item }) {
  return (
    <Link to={`/producInfo/${item.id}?category=${item.category}`}>
      <Div3>
        <Img src={item.thumbnail} alt="" />
        <Div2>
          <H2>{item.title}</H2>
          <h3 className="text-xl font-medium">Brand : {item.brand}</h3>
          <h3 className="text-3xl font-semibold">
            Price : {formatCurrency(item.price * 85)}
          </h3>
          <big className="text-lg font-semibold">
            Rating : {item.rating} out of 5
          </big>
        </Div2>
        <Div4>
          <GrLinkNext className="w-9 h-9" />
        </Div4>
      </Div3>
    </Link>
  );
}

export default ItemBox;
