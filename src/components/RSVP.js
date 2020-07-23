import React, {useState} from 'react'
import { navigate } from 'gatsby-link'

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default function RSVP() {
  const [state, setState] = useState({})

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch((error) => alert(error))
  }

  return (
    <div>
      <h1 style={{ fontFamily: 'cursive' }}>RSVP</h1>
      <b>Please RSVP below if you are able to celebrate with us:</b>
      <form
        name="guests"
        method="post"
        action="/thanks"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
      >
        {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
        <input type="hidden" name="form-name" value="guests" />
        <p hidden>
          <label>
            Don’t fill this out: <input name="bot-field" onChange={handleChange} />
          </label>
        </p>
        <p>
          <label>
            Your name:
            <br />
            <input type="text" name="name" onChange={handleChange} />
          </label>
        </p>
        <p>
          <label>
            Number in Party (including yourself):
            <br />
            <input type="number" min="1" max="20" name="guests" onChange={handleChange} />
          </label>
        </p>
        <p>
          <button type="submit" style={{ borderRadius: '15px', backgroundColor: 'transparent', padding: '10px 35px' }}>Send</button>
        </p>
      </form>
    </div>
  )
}
  // return (
    // <div id="RSVP">
    //   <h1 style={{ fontFamily: 'cursive' }}>RSVP</h1>
    //   <b>Please RSVP below if you are able to celebrate with us:</b>
    //   <form name="RSVP" method="post" data-netlify="true" data-netlify-honeypot="bot-field" onSubmit={handleSubmit}>
    //     <input type="hidden" name="form-name" value="RSVP" />
    //     <b>
    //       <p>
    //         <label>Your Name: <input type="text" name="name" onChange={handleChange} /></label>
    //       </p>
    //       <p>
    //         <label>Number in Party (including yourself): <input type="number" min="1" max="20" name="guests" onChange={handleChange}></input></label>
    //       </p>
    //       <p>
    //         <button type="submit" style={{ borderRadius: '15px', backgroundColor: 'transparent', padding: '10px 35px' }}>Send</button>
    //       </p>
    //     </b>
    //   </form>
    // </div>
//   )
// };
