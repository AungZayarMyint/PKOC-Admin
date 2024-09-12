import React from 'react'
import Template from './Template'
import Card from './Card'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <Template title={''}>
        <Card>
            <div className='w-100 h-100 d-flex justify-content-center align-items-center flex-column'>
                <p className='text-center' style={{fontSize: '100px'}}>404</p>
                <p className='text-center' style={{fontSize: '25px'}}>Page Not Found!</p>
                <Link className='btn btn-sm btn-primary' to={'/'}>Go to home</Link>
            </div>
        </Card>
    </Template>
  )
}
