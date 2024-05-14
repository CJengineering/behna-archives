import CollectionItem from '@/components/CollectionItem'
import React from 'react'


export default function DynamicPoster({ params }: { params: { slug: string } }) {
  return (
    <div><CollectionItem title ={params.slug}></CollectionItem></div>
  )
}
