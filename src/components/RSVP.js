import React, { useState } from 'react';


const RSVP = () => {

  const [state, setState] = React.useState()

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  console.log(state)
  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: {
        'form-name': form.getAttribute('name'),
        ...state,
      },
    })
      .then(() => console.log("Submitted"))
      .catch((error) => alert(error))
  }
  return (
    <div id="RSVP">
      <h1 style={{ fontFamily: 'cursive' }}>RSVP</h1>
      <b>Please RSVP below if you are able to celebrate with us:</b>
      <form name="RSVP" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" onSubmit={handleSubmit}>
        <input type="hidden" name="RSVP" value="RSVP" />
        <p hidden>
          <label>
            Don’t fill this out: <input name="bot-field" onChange={handleChange} />
          </label>
        </p>
        <b>
          <p>
            <label>Your Name: <input type="text" name="name" onChange={handleChange} /></label>
          </p>
          <p>
            <label>Number in Party (including yourself): <input type="number" min="1" max="20" name="guests" onChange={handleChange}></input></label>
          </p>
          <p>
            <button type="submit" style={{ borderRadius: '15px', backgroundColor: 'transparent', padding: '10px 35px' }}>Send</button>
          </p>
        </b>
      </form>
    </div>
  )
};

export default RSVP;
