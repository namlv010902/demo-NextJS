import React, { useEffect, useMemo } from 'react'
import Menu from './Menu'
import Dropdown from './Dropdown'
import { QueryClient } from '@tanstack/react-query';
import { useUser } from '../context/useContext';
import { getMe } from '../api/auth';


const Header = () => {
  const { loginUser } = useUser();

  useMemo(() => {
    const getProfile = async () => {
      try {
        const res = await getMe();
        loginUser(res.data);
        console.log("running profile")
      } catch (error) {
        console.error("Error fetching user profile:", error);
      }
    };
    getProfile();
  }, []);
  return (
    <div className='py-4 px-4 bg-green-800 flex justify-between' >
      <Menu />
      <Dropdown />
    </div>
  )
}

export default Header