import { useEffect, useState } from "react";
import MainList from "../COMPONENT/Main/MainList";
import Silder from "../COMPONENT/Main/Slide/Silder";
import styled from "styled-components";
const Div = styled.div`
  box-sizing: border-box;
`;

function Dashboard() {
  const [data, setData] = useState([]);
  useEffect(function () {
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((json) => setData(json.slice(10)));
  }, []);
  console.log(data);
  return (
    <Div>
      <Silder />

      {data.map((category, i) => (
        <MainList key={i} category={category} />
      ))}
    </Div>
  );
}

export default Dashboard;
