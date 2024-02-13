import { useEffect, useState } from "react";
import CategoryBox from "./CategoryBox";
import styled from "styled-components";
import Row from "../Row";
const Ul = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  overflow: scroll;
  overflow-y: hidden;
  overflow-x: scroll;

  &::-webkit-scrollbar {
    height: 8px;
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 2px rebeccapurple;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: #25083d;
    border-radius: 10px;
  }
`;
function LowerLayer() {
  const [data, setData] = useState([]);
  useEffect(function () {
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  return (
    <Row>
      <Ul>
        {data.map((item, i) => (
          <CategoryBox item={item} key={i} />
        ))}
      </Ul>
    </Row>
  );
}

export default LowerLayer;
