import React from 'react'
import arrow from './assets/right-arrow.svg';

const User = ({ onClick, user, index, active, setActive }) => {
  const clicked = (user, i) => {
    onClick(user)
    setActive(i);
  }

    return (
      <div className={`user-tile ${active === index && 'active'}`} onClick={() => clicked(user, index)}>
        <div className='tile-bio'>
        <img src={user?.img} className='tile-pic' alt='profile' />
        <div className='tile-para'>
            <p>{user?.name}</p>
            <p style={{opacity: '0.6'}}><span> {user?.trans}  Transactions</span> . <span>Joined  2 months ago</span> </p>
        </div>
        </div>
        <img src={arrow} alt='arrow' />
      </div>
    )
}

export default User
