import React from 'react'
import KpiCards from './../components/KpiCards';
import Charts from './../components/Charts';
import useStockCall from '../hook/useStockCall';
import { useEffect } from 'react';

const Home = () => {
  const {getPurcSales}=useStockCall()
  useEffect(()=>{
    getPurcSales()
  })
  return (
    <div>
      <KpiCards/>
      <Charts/>

    </div>
  )
}

export default Home