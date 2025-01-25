import React from 'react';

const Notifications = ({ notifications }) => {
  return (
    <div className="notifications">
      <ul>
        {notifications.map((notification, index) => (
          <li key={index}>
            <p>{notification.message}</p>
            <span>{notification.timestamp}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notifications;
