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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to="dashboard" />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="productList" element={<ProductList />} />
          <Route path="searchresults" element={<ProductListSearch />} />
          <Route path="producInfo/:id" element={<ProductInfo />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="orderconfirmed" element={<OrderConfirmed />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="createuser" element={<CreateUser />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
