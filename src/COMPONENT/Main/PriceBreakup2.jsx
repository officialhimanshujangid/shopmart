/* eslint-disable react/prop-types */

import styled from "styled-components";
import { formatCurrency } from "../../data/helpers";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 15px;
`;
const DivImg = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Div2 = styled.div`
  width: 300px;
  margin-top: 10px;
  border-bottom: 2px solid black;
  padding-bottom: 10px;
`;
const Img = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 100px;
`;
const P = styled.p`
  font-weight: 500;
  font-size: large;
  text-transform: capitalize;
`;
const P2 = styled.p`
  font-weight: 500;
  margin-top: 10px;
  padding-top: 10px;
`;
const P3 = styled.p`
  font-size: xx-large;
  font-weight: 500;

  text-transform: capitalize;
`;
function PriceBreakup2({ data }) {
  if (!data) return;
  const sellingPrice = data.price * 83;
  const regularPrice = (
    (sellingPrice * 100) /
    (100 - data.discountPercentage)
  ).toFixed(2);
  const discount = (regularPrice - sellingPrice).toFixed(2);
  const tax = ((sellingPrice * 10) / 100).toFixed(2);
  const deliveryFee = sellingPrice > 3000 ? 0 : 100;
  const platformFee = ((sellingPrice * 2) / 100).toFixed(2);
  const Total =
    Number(sellingPrice) +
    Number(tax) +
    Number(deliveryFee) +
    Number(platformFee);

  return (
    <Div>
      <DivImg>
        <P3>{data.title}</P3>
      </DivImg>
      <P2>Price Breakup :</P2>
      <Div2>
        <P>Regular Price : {formatCurrency(regularPrice)}</P>
        <P>Discounted Price : {formatCurrency(discount)}</P>
        <P>Selling Price : {formatCurrency(sellingPrice)}</P>
        <P>Govt. Tax : {formatCurrency(tax)}</P>
        <P>Delivery Surcharge : {formatCurrency(deliveryFee)}</P>
        <P>Platform Fee : {formatCurrency(platformFee)}</P>
      </Div2>
      <P2>Final Price : {formatCurrency(Total)}</P2>
    </Div>
  );
}

export default PriceBreakup2;
