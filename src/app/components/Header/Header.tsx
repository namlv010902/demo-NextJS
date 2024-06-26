import { getMe } from '@/app/api/auth';
import { useAuth } from '@/app/context';
import React, { useEffect, useMemo } from 'react'
import NavBar from '../NavBar/NavBar';
import Dropdown from '../Dropdown';



const Header = () => {
  const { login, user } = useAuth();
  console.log(user);

  useEffect(() => {
    const getProfile = async () => {
      try {
        await getMe().then(({ response }) => {
          console.log(response);
          
          login(response.data);
        });
      } catch (error: any) {
        console.error("Error fetching user profile:", error);
      }
    }
    getProfile();
  }, []);
  return (
    <div className='py-4 px-4 bg-green-800 flex justify-between' >
      <NavBar />
      <Dropdown />
    </div>
  )
}

export default Header