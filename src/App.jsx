import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./COMPONENT/AppLayout";
import Dashboard from "./PAGES/Dashboard";
import ProductList from "./PAGES/ProductList";
import ProductInfo from "./PAGES/ProductInfo";
import Checkout from "./PAGES/Checkout";
import OrderConfirmed from "./PAGES/OrderConfirmed";
import CreateUser from "./PAGES/CreateUser";
import Login from "./PAGES/Login";
import PageNotFound from "./PAGES/PageNotFound";
import ProductListSearch from "./PAGES/ProductListSearch";
import { ContextDataProvider } from "./Context";
import UpdateAccount from "./PAGES/UpdateAccount";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ProtectedRoute from "./COMPONENT/ProtectedRoute";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // staleTime: 60 * 1000,
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <ContextDataProvider>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route
              element={
                <ProtectedRoute>
                  <AppLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<Navigate replace to="dashboard" />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="productList" element={<ProductList />} />
              <Route path="searchresults" element={<ProductListSearch />} />
              <Route path="producInfo/:id" element={<ProductInfo />} />
              <Route path="checkout/:id" element={<Checkout />} />
              <Route path="orderconfirmed" element={<OrderConfirmed />} />
              <Route path="/updateAccount" element={<UpdateAccount />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="createuser" element={<CreateUser />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </ContextDataProvider>
  );
}

export default App;
