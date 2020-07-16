import React from 'react';

const RSVP = () => (
  <div id="RSVP">
    <h1 style={{ fontFamily: 'cursive' }}>RSVP</h1>
    <b>Please RSVP below if you are able to celebrate with us:</b>
    <form name="RSVP" method="POST" data-netlify="true">
      <input type="hidden" name="RSVP" value="contact" />
      <b>
        <p>
          <label>Your Name: <input type="text" name="name" /></label>
        </p>
        <p>
          <label>Number in Party (including yourself): <input type="number" min="1" max="20" name="guests"></input></label>
        </p>
        <p>
          <button type="submit" style={{ borderRadius: '15px', backgroundColor: 'transparent', padding: '10px 35px' }}>Send</button>
        </p>
      </b>
    </form>
  </div>
);

export default RSVP;
