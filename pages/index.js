import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Link from 'next/link'
import { startClock } from '../actions'
import Head from 'next/head'
import React from 'react'
import ProductDetail from '../components/ProductDetail'
<<<<<<< HEAD
=======
import { textStyle } from '../constant/primitive'
>>>>>>> 1414bba (Detail-Item Updated)

const Index = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(startClock())
  }, [dispatch])

  return (
    <>
      {/* <Examples />
      <Link href="/show-redux-state">
        <a>Click to see current Redux State</a>
      </Link> */}
      <div>
        <Head>
          <title>
<<<<<<< HEAD
            Task1
=======
            Detail Item
>>>>>>> 1414bba (Detail-Item Updated)
          </title>
          <link 
            rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
          </link>
        </Head>
        <ProductDetail>
        </ProductDetail>


      </div>
    </>
  )
}

export default Index
