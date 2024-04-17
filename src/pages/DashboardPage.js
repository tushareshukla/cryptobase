import React, { useEffect, useState } from 'react'
import Header from '../components/Common/Header'
import Tabs from '../components/Dashboard/Tabs'
import axios from 'axios'
const DashboardPage = () => {

  const [coins, setCoins] = useState([])
  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false').then((response) => {
      // console.log(`response ky h bc >>>>${response.data}`)
      setCoins(response.data)
    }).catch(err => {
      console.log(`error ky h bc >>>>${err}`)

    })
  }, [])
  return (
    <div>
        <Header/>
        <Tabs coins={coins}/>
    </div>
  )
}

export default DashboardPage