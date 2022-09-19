import React from 'react';
import success from '../assets/success.svg'


export const Success = ({ count }) => {
  return (
    <div class="success-block">
      <img src={success} alt="Success" />
      <h3>Success!</h3>
      {
        count === 1 ? (
          <p> Invitation sent to {count} user.</p>
        ) : (
          <p> Invitation sent to {count} users.</p>
        )
      }
     
        <button onClick={() => window.location.reload()} className="send-invite-btn">Back</button>
    </div>
  );
};
