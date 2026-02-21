/* import { Navigate, Route, Routes } from "react-router";
import LoginPage from "./pages/LoginPage";
import { useAuth } from "@clerk/clerk-react";
import DashboardPage from "./pages/DashboardPage";
import ProductsPage from "./pages/ProductsPage";
import OrdersPage from "./pages/OrdersPage";
import CustomersPage from "./pages/CustomersPage";
import DashboardLayout from "./layouts/DashboardLayout";

import PageLoader from "./components/PageLoader";

function App() {
  const { isSignedIn, isLoaded } = useAuth();

  if (!isLoaded) return <PageLoader />;

  return (
    <Routes>
      <Route path="/login" element={isSignedIn ? <Navigate to={"/dashboard"} /> : <LoginPage />} />

      <Route path="/" element={isSignedIn ? <DashboardLayout /> : <Navigate to={"/login"} />}>
        <Route index element={<Navigate to={"dashboard"} />} />
        <Route path="dashboard" element={<DashboardPage />} />
        <Route path="products" element={<ProductsPage />} />
        <Route path="orders" element={<OrdersPage />} />
        <Route path="customers" element={<CustomersPage />} />
      </Route>
    </Routes>
  );
}

export default App;
 */

import React from 'react'
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/clerk-react';


function App() {
  return (<> <h1>
    HOMEPAGE
  </h1>
{/* Show the sign-in and sign-up buttons when the user is signed out */}
      <SignedOut>
        <SignInButton />
        <SignUpButton />
      </SignedOut>
      {/* Show the user button when the user is signed in */}
      <SignedIn>
        <UserButton />
      </SignedIn>
    <div>App</div>
  </>)
}

export default App