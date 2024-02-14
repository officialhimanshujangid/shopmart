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
  text-align: center;
  font-family: "Mulish", sans-serif;
  color: white;
  margin: 3rem 2rem 1rem 0rem;
  text-transform: capitalize;
`;

function ProductListSearch() {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("search");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          `https://dummyjson.com/products/search?q=${category}`
        );
        const dat = await res.json();
        setData(dat);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [category]);
  if (loading) return <Spinner />;
  if (
    data.products === null ||
    data.products === undefined ||
    data.products.length === 0
  )
    return <H1> no Search results for your search</H1>;
  return (
    <div>
      <Div>
        {category ? (
          <H1>Search results for {category}</H1>
        ) : (
          <H1> no Search results for your search</H1>
        )}
        {data.products.map((item) => (
          <ItemBox key={item.id} item={item} />
        ))}
      </Div>
    </div>
  );
}

export default ProductListSearch;
