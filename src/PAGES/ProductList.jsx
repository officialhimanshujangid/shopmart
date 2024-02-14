import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import styled from "styled-components";
import ItemBox from "../COMPONENT/Main/itemBoxList";
import Spinner from "../COMPONENT/Spinner";
const Div = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5), 10px 10px 10px rgba(7, 7, 7, 0.5);
`;
const H1 = styled.h1`
  font-size: xx-large;
  font-family: "Mulish", sans-serif;
  color: white;
  margin: 3rem 2rem 1rem 0rem;
  text-transform: capitalize;
`;

function ProductList() {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await fetch(`https://dummyjson.com/products?limit=100`);
        const dat = await res.json();
        setData(dat);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  if (loading) return <Spinner />;
  if (!data) return;
  const filtered = data.products.filter((item) => item.category === category);
  const other = data.products.filter((item) => item.category !== category);
  return (
    <div>
      <Div>
        <H1>Search results for {category}</H1>
        {filtered.map((item) => (
          <ItemBox key={item.id} item={item} />
        ))}
      </Div>

      <Div>
        <H1>Other Items</H1>
        {other.map((item) => (
          <ItemBox key={item.id} item={item} />
        ))}
      </Div>
    </div>
  );
}

export default ProductList;
