import CollectionItemDesktop from '@/components/CollectionItemDesktop'
import CollectionItemV2 from '@/components/CollectionItemV2'
import React from 'react'

export default function Poster({ params }: { params: { slug: string } }) {
  return (
    <div className=''>
    <div className="md:hidden">
    <CollectionItemV2 slug={params.slug}></CollectionItemV2>
    </div>
    <div className="">
      <CollectionItemDesktop slug={params.slug}></CollectionItemDesktop>
    </div>
  </div>
  )
}
