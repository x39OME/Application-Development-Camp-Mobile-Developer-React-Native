import React, { useState } from 'react';
import Account from './account';
import { Navigate } from 'react-router-dom';

const AccountGard = () => {
 const [auth, setAuth]= useState(true);
 return (auth)?<Account /> : <Navigate  to="/" />
}

export default AccountGard;
