 import React from 'react'
import './NotificationMenu.css'
function NotificationMenu({ notifications }) {
  return (
    <div className='card-Notifcation'>
    <div className='card-header '>
        <h6>Notifications</h6>
        <span class="counter">{notifications.length} new</span>
        <a class="clear-notifiacton" href='#'>Clear all</a>
        </div>        

         <div className='bodylist'>
          <ul className='list'>
          {notifications.map((notification, index) =>(
            <il key={index}>
              <div className='list-item'>
                <div className='item-1'>
                <div className="Avatar">
                <img src={notification.profilePic} alt="Profile Pic" />
                  <div className='content'> 
                  <p className='notificationContent'> <b>{notification.name}</b> {notification.message}</p>
                  <p className='notificationTime'>{notification.time}</p>
                </div>
                  </div>
                  
                <div className="Button">
												<button className='btnA'>Accept </button>
												<button className='btnD'>Delete </button>
											</div>
                      
                </div>
                </div>
                </il>
                
          ))}
          </ul>
        </div> 
    </div>
   
  )
}

export default NotificationMenu;
