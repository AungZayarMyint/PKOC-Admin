import React from 'react'

export default function Card({ children }) {
  return (
    <div className='card rounded-2 border-0'>
        <div className='card-body'>{children}</div>
    </div>
  )
}

export function CardFooter({ children }) {
  return (
        <div className='card-footer'>{children}</div>
  )
}