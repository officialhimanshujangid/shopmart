/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import styled from "styled-components";

import Spinner from "./Spinner";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useUser } from "../authentication/useUser";
const FullPage = styled.div`
  height: 100vh;
  background-color: rebeccapurple;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  ///1. load the autenticted user
  const { isAuthenticated, isLoading } = useUser();
  ///2.no authentication redirect to login
  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) navigate("/login");
    },
    [isAuthenticated, isLoading, navigate]
  );
  ///3. spinner
  if (isLoading)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );
  ///4. if user render the app

  if (isAuthenticated) return children;
}

export default ProtectedRoute;
