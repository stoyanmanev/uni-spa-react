import React from 'react'
import loadimg from '../../images/loader.svg'

export default function Loading() {
    return (
        <div className='loading'>
            <img src={loadimg} alt="Loader" />
        </div>
    )
}
