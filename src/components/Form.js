import React,{ useState } from 'react';
import { send } from 'emailjs-com';

export default function Form(props) {
    const [error, setError] = useState("")

    const [toSend, setToSend] = useState({
      from_name: '',
      message: '',
      reply_to: '',
    });
  
  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault()
    setError("")
      send('service_f48wbt9', 'template_q53qx5b', toSend, 'user_FXQVQgb0BbmMgVTgh2tvN')
      .then(function(response) {
         setError('SUCCESS!', response.status, response.text);
      }, function(error) {
         setError('FAILED...', error);
      })
    }
  
    return (
          <div className="contact" id="contact">
            <form onSubmit={handleSubmit}>
              {error && <h2 className="contact__error">{error}</h2>}
              <p onClick={()=>{props.setShow(!props.show)}}>&#x02190;</p>
              <label>Name:</label>
              <input
                type="text"
                name="from_name"
                id="name"
                placeholder="Name:"
                value={toSend.from_name}
                onChange={handleChange}
                required
              />
              <label>Email:</label>
              <input
                type="email"
                name='reply_to'
                id="email"
                className="contact__email"
                placeholder="jan.kowalski@gmail.com"
                value={toSend.reply_to}
                onChange={handleChange}
                required
              />
              <label>Send me a message:</label>
              <textarea 
              type="text"
              name="message" 
              placeholder="Your message"
              value={toSend.message}
              onChange={handleChange}
              required
              />
              <button
                type="submit"
                id="submit"
                className="contact__button pointer"
              >Send</button>
            </form>
          </div>
      
    );
}
