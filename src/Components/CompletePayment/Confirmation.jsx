// import React from 'react'

//  const Confirmation = () => {
//   return (
//     <div style={{ textAlign: 'center', marginTop: '50px' }}>
//       <h2 style={{ color: 'blue' }}>Payment Confirmation</h2>
//       <p style={{ fontSize: '18px' }}>Your payment has been successfully completed!</p>
//     </div>
//   )
// }
// export default Confirmation;



// PaymentConfirmation.js
import React from 'react';

const Confirmation = () => {
  return (
    <div className="confirmation-container">
      <h2 className="confirmation-title">Payment Confirmation</h2>
      <p className="confirmation-message">Your payment has been successfully completed!</p>
    </div>
  );
};

export default Confirmation;

