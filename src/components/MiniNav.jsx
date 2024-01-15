import React from 'react'
import './MiniNav.css'

const MiniNav = () => {
    return (
        <div className='mininav'>
            <a href="/" style={{ marginRight: '10px' }}>
                <h4 className='mininav-h4'>Desktop Version</h4>
            </a>

            <a href="/mobile">
                <h4 className='mininav-h4'>Mobile Version</h4>
            </a>
        </div>
    )
}

export default MiniNav