import React from 'react';
import success from '../assets/success.svg'


export const Success = ({ count }) => {
  return (
    <div class="success-block">
      <img src={success} alt="Success" />
      <h3>Успешно!</h3>
      <p>All {count} users have been invited.</p>
        <button onClick={() => window.location.reload()} className="send-invite-btn">Back</button>
    </div>
  );
};
