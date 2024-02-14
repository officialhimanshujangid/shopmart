/* eslint-disable no-unused-vars */
import { memo, useEffect, useState } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import styled from "styled-components";
import ImageSlider from "../COMPONENT/Main/ImageSlider";
import { formatCurrency } from "../data/helpers";
import Spinner from "../COMPONENT/Spinner";
import { useCartId } from "../Context";
const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 74vh;
  font-family: "Mulish", sans-serif;
  margin-bottom: 3rem;
`;
const Div2 = styled.div`
  width: 90vw;
  height: 70vh;
  background-color: #ccb9e0;
  border-radius: 10px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5), 10px 10px 10px rgba(7, 7, 7, 0.5);
  display: flex;
  align-items: center;
`;
const Div3 = styled.div`
  height: 70vh;
  margin-left: 2rem;
  position: relative;
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const Div4 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 0.8rem;
`;
const H1 = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  text-transform: capitalize;
`;
const P1 = styled.p`
  font-size: 2rem;
  font-weight: 500;
  text-transform: capitalize;
`;
const P2 = styled.p`
  font-size: 1.2rem;
  font-weight: 500;
  text-transform: capitalize;
`;
const ProductInfo = memo(function ProductInfo() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [searchParams] = useSearchParams();
  const { id } = useParams();
  const { currentId, updateCartId } = useCartId();
  function addtoCart() {
    updateCartId(id);
  }
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await fetch(`https://dummyjson.com/products/${Number(id)}`);
        const dat = await res.json();
        setData(dat);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]);
  if (loading) return <Spinner />;
  if (!data) return;
  return (
    <Div>
      <Div2>
        <ImageSlider images={data.images} />

        <Div3>
          <Div4>
            <H1>{data.title}</H1>
            <P1>Price : {formatCurrency(data.price * 83)}</P1>
            <P2>Rating : {data.rating} out of 5</P2>
            <P2>Brand : {data.brand}</P2>
            <P2>Category : {data.category}</P2>
            <P2>Stock : {data.stock} left</P2>
            <P2>Product description : {data.description}</P2>
          </Div4>

          <button
            onClick={() => addtoCart()}
            className="px-4 py-2 bg-purple-950 text-white rounded-xl"
          >
            {currentId !== id ? "Add to cart" : " Added to cart"}
          </button>
        </Div3>
      </Div2>
    </Div>
  );
});

export default ProductInfo;
