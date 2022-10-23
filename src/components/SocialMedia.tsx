import React from 'react'

interface ISocialMedia {
    brand: string;
}
export default function SocialMedia({brand}: ISocialMedia){
  return (
      <>
         <a target="_blank" href={"https://www."+brand.toLowerCase()+".com"}>{brand}</a>
      </>
  )
}