import React from 'react';
import SavedCoin from '../Components/SavedCoin';
import { UserAuth } from '../Context/AuthContext';
import { auth } from '../Firebase/Firebase';
import { useNavigate } from 'react-router-dom';



const Account = () => {

  const { userSignOut, user } = UserAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await userSignOut(auth)
      navigate('/')


    } catch (error) {
      console.log(error.message)


    }
  }

  return (
    <div className='max-w-[1140px] mx-auto'>
      <div className='rounded-div flex justify-between items-center my-12 p-8 '>
        <div>
          <h1 className='text-2xl font-bold'>Account</h1>
          <div>
            <p>Welcome, {user.email}</p>
          </div>
        </div>
        <div>
          <button onClick={handleSignOut} className='border px-6 py-2 rounded-2xl shadow-lg hover:shadow-2xl'>Signout</button>
        </div>
      </div>

      <div className='flex justify-between items-center my-12 p-8 rounded-div'>
        <div className='w-full min-h-[300px] '>
          <h1 className='text-2xl py-4 font-bold'>Bookmarks</h1>
          <SavedCoin />
        </div>
      </div>

    </div>
  )
}

export default Account
