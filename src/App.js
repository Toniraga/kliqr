import React from 'react';
import { users } from './data';
import profilePic from './assets/profile.svg';
import aeroplane from './assets/aeroplane.svg';
import dinner from './assets/dinner.svg';
import house from './assets/house.svg';
import gift from './assets/gift.svg';
import User from './users';

import './App.css';


function App() {
  const [ userInfo, setUserInfo ] = React.useState(users[0]);
  return (
    <div className='App'>
      <div className='blue-top' />
      <div className='main'> 
        <div className='side-panel no-scrollbar'>
          <p className='panel-cap'> USERS </p>
          {users.map((user) => (
            <div key={user.id}>
              <User onClick={setUserInfo} user={user} />
            </div>
          ))}
        </div>
        {userInfo && (
          <div className='bio-page'>
            <div className='bio-main'>
              <img src={profilePic} className='bio-pic' alt='profile' />
              <p className='bio-name'> { userInfo.name } </p>
              <div className='bio-seen'> <span>{userInfo.trans}  Transactions </span> . <span> Joined  2 months ago</span> 
              </div>
              <div className='bio-spent'> 
                <div className='bio-box'> 
                  <span>TOTAL SPENT</span> 
                  <span><span className='bio-naira'>₦</span>{userInfo.total}</span> 
                </div> 
                <div className='bio-box'> 
                  <span>TOTAL INCOME</span> 
                  <span><span className='bio-naira'>₦</span>745,10</span> 
                </div> 
                <div className='bio-box'> 
                  <span>TRANSACTIONS</span> <span>{userInfo.trans}</span> 
                </div> 
              </div>
            </div>
            <div className='other-info'>
              <div className='info-expenses'>
                <p className='info-cap'> RECURRING EXPENSES </p>
                <div className='info-icons'>
                  <img src={aeroplane} alt='aero' />
                  <img src={dinner} alt='dinner' />
                  <img src={house} alt='house' />
                  <img src={gift} alt='gift' />
                </div>
                <div className='info-icons'>
                  <img src={aeroplane} alt='aero' />
                  <img src={dinner} alt='dinner' />
                  <img src={house} alt='house' />
                  <img src={gift} alt='gift' />
                </div>
              </div>
              <div className='info-users'> 
                <p className='info-cap'> USERS LIKE   “Jude Agboola” </p>
                <div className='info-bio'>
                  <img src={profilePic} className='tile-pic' alt='profile' />
                  <div className='tile-para'>
                    <p>Jude Agboola</p>
                    <p><span> 300  Transactions</span> . <span>Joined  2 months ago</span> </p>
                  </div>
                </div>
                <div className='info-bio'>
                  <img src={profilePic} className='tile-pic' alt='profile' />
                  <div className='tile-para'>
                    <p>Jude Agboola</p>
                    <p><span> 300  Transactions</span> . <span>Joined  2 months ago</span> </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
