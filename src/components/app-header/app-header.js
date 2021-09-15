import React from 'react';
import './app-header.css';

const AppHeader = ({liked,allPosts}) => {
    return (
        <div className='app-header d-flex'>
            <h1>Vitaliy Parasochkin</h1>
            <h2>{allPosts} записей, из них лайкнули {liked}</h2>
        </div>
    )
}

export default AppHeader;