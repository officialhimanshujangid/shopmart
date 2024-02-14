import styled from "styled-components";
import { useCartId } from "../Context";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import PriceBreakup2 from "../COMPONENT/Main/PriceBreakup2";
import Spinner from "../COMPONENT/Spinner";
const Div = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  background-color: #1a161f;
  margin-right: 1rem;
  margin-left: 1rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  height: 60vh;
  color: white;
  border-radius: 10px;
`;
const Div2 = styled.div`
  /* height: 40vh; */
`;
const Div3 = styled.div`
  display: flex;
  align-items: center;
`;
const Div5 = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-betwee;
`;
const Div4 = styled.div`
  font-size: 2.5rem;
  font-weight: 600;
`;
const Div6 = styled.div`
  width: 500px;
  margin-top: 10px;
  padding-bottom: 10px;
`;
const P = styled.p`
  font-weight: 500;
  font-size: large;
  text-transform: capitalize;
`;
const P2 = styled.p`
  font-weight: 500;
  font-size: 1.5rem;
  text-transform: capitalize;
  color: #06c426;
`;
const H1 = styled.h1`
  font-size: x-large;
  font-weight: 500;
`;
function OrderConfirmed() {
  const { order } = useCartId();
  if (!order) return <Spinner />;
  const address = JSON.parse(order.address);
  const fullName =
    address.firstName + " " + address.middleName + " " + address.lastName;
  const phone = address.phone;
  const city = address.city;
  const state = address.state;
  const zip = address.Zip;
  const deliveryAddress =
    address.address2 +
    " " +
    address.address3 +
    " " +
    city +
    " " +
    state +
    " " +
    zip;
  const currentDate = new Date();
  const fiveDaysLater = new Date(currentDate);
  fiveDaysLater.setDate(currentDate.getDate() + 5);

  return (
    <Div>
      <Div5>
        <Div2>
          <Div3>
            <RiVerifiedBadgeFill style={{ width: "150px", height: "150px" }} />
            <Div4>Order Confirmed</Div4>
          </Div3>
        </Div2>
        <Div6>
          <H1>Delivery Address:</H1>
          <P>Name : {fullName}</P>
          <P>Address : {deliveryAddress}</P>
          <P>Mobile no : {phone}</P>
        </Div6>
        <P2>
          your Order Will be Delivered by : {fiveDaysLater.toDateString()}{" "}
        </P2>
      </Div5>
      <Div2>
        <PriceBreakup2 data={order.data} />
      </Div2>
    </Div>
  );
}

export default OrderConfirmed;
