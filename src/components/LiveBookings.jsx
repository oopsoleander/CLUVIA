import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LiveBookings = () => {
  const notify = () => toast('New booking received!');

  return (
    <div>
      <h1>Live Bookings</h1>
      <button onClick={notify}>Notify</button>
      <toast.Container />
    </div>
  );
};

export default LiveBookings;