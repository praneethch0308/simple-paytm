import React from 'react'
import Appbar from '../components/Appbar'
import Balance from '../components/Balance'
import Users from '../components/Users'

const Dashboard = () => {
  return <div>
    <Appbar/>
    <div className='m-8'>
        <Balance value={"6900"}/>
        <Users/>

    </div>

  </div>
}

export default Dashboard
