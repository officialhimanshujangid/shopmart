import styled from "styled-components";
import CheckoutForm from "../COMPONENT/checkoutForm";
import PriceBreakup from "../COMPONENT/Main/PriceBreakup";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const Div = styled.div`
  display: grid;
  grid-template-columns: 5fr 2fr;
  justify-content: center;
  margin-bottom: 10px;
`;
const CheckoutData = styled.div`
  background-color: #968196;
  height: 70vh;
  padding: 1rem 0rem 5rem 2rem;
  margin: 5px;
  border-radius: 5px;
`;
const Price = styled.div`
  background-color: #968196;
  padding: 1rem 0rem 5rem 2rem;
  height: 400px;
  margin: 5px;
  border-radius: 5px;
`;
function Checkout() {
  const [data, setData] = useState();

  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`https://dummyjson.com/products/${Number(id)}`);
        const dat = await res.json();
        setData(dat);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]);
  return (
    <Div>
      <CheckoutData>
        <CheckoutForm />
      </CheckoutData>
      <Price>
        <PriceBreakup data={data} />
      </Price>
    </Div>
  );
}

export default Checkout;
