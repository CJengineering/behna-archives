import React from 'react'

export default function Poster({ params }: { params: { slug: string } }) {
  return (
    <div>Poster the params {params.slug }</div>
  )
}
