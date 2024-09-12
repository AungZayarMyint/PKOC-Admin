import React from 'react'

export default function SubmitBtn({type, isLoading, name, event, title = ''}) {
  return (
    <div className='mb-2'>
        {
            title &&
            <label className="form-label" htmlFor={name}>
            {title}
          </label>
        }
        <button type={type} disabled={isLoading} onClick={event} className="btn w-100 btn-primary py-2 px-5">
        {
            isLoading?
            <>
                <div
                    className="spinner-border spinner-border-sm me-2"
                    role="status"
                >
                    <span className="visually-hidden">
                        Loading...
                    </span>
                </div>
                Loading...
            </> :
            name
        }
    </button>
    </div>
  )
}
