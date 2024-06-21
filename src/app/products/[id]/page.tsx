"use client"
import { useParams } from 'next/navigation'
import React from 'react'
import useQueryProduct from '../hooks/useDetailProduct'

const productDetail = () => {
  const {id} = useParams()
  const {data} = useQueryProduct(id as string)
  console.log(data?.data)
  return (
    <div>productDetail</div>
  )
}

export default productDetail