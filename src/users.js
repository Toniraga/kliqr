import React from 'react'
import profilePic from './assets/profile.svg';
import arrow from './assets/right-arrow.svg';

const User = ({ onClick, user }) => {
    return (
      <div className='user-tile' onClick={() => onClick(user)}>
        <div className='tile-bio'>
        <img src={profilePic} className='tile-pic' alt='profile' />
        <div className='tile-para'>
            <p>{user?.name}</p>
            <p><span> {user?.trans}  Transactions</span> . <span>Joined  2 months ago</span> </p>
        </div>
        </div>
        <img src={arrow} alt='arrow' />
      </div>
    )
}

export default User
