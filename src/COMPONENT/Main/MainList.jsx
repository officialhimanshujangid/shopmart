/* eslint-disable react/prop-types */
import { memo, useEffect, useState } from "react";
import Row from "../Row";
import ItemBox from "./itemBox";
import styled from "styled-components";
import Spinner from "../Spinner";
const Div = styled.div`
  /* background-color: rgb(255, 255, 255, 0.3); */

  margin: 10px 8px 40px 8px;
  border-radius: 10px;
  padding: 0px 10px;
`;
const H1 = styled.h1`
  color: #f8f5f5;
  font-size: 2em;
  text-transform: capitalize;
  font-family: "Open Sans", sans-serif;
  font-weight: 500;
  text-align: center;
  text-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5), 10px 10px 10px rgba(7, 7, 7, 0.5);
`;
const MainList = memo(function MainList({ category }) {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  useEffect(
    function () {
      async function render() {
        setLoading(true);
        try {
          const res = await fetch(
            `https://dummyjson.com/products/category/${category}?limit=10`
          );
          const data = await res.json();
          setData(data);
          setLoading(false);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
      render();
    },
    [category]
  );
  if (loading) return <Spinner />;
  if (data === undefined) return;
  const list = data.products;
  return (
    <Div>
      <H1>{category} </H1>
      <Row>
        {list.map((item) => (
          <ItemBox key={item.id} item={item} />
        ))}
      </Row>
    </Div>
  );
});

export default MainList;
