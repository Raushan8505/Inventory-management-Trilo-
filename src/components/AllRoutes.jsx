import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Billing from './ProductCard/Billing'
import ProductCard from './ProductCard/ProductCard'
import CommonRoutes from './ProductCard/CommonRoutes'
import PaymentPage from './ProductCard/PaymentPage'
import PaymentSuccessfull from './ProductCard/PaymentSuccessfull'
import SignInSignUpForm from './SignInSignUpForm'
import '../App.css'

const AllRoutes = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
  };
  return (
    <Routes>
        <Route path='/' element={<CommonRoutes/>}/>
        <Route path='/billing' element={<Billing/>}/>
        <Route path='/product' element={<ProductCard/>}/>
        <Route path ='/payment' element={<PaymentPage/>}/>
        <Route path ='/paymentsuccess' element={<PaymentSuccessfull/>}/>
        <Route path='/sign' element={<SignInSignUpForm isSignUp={isSignUp} toggleForm={toggleForm} />}/>
    </Routes>
  )
}

export default AllRoutes
