import emailjs from "emailjs-com"
import React from "react";
import Layout from '../../shared/layout';

export default function Mailer() {

    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_uytkvpe', 'template_qzv61b5', e.target, 
        'user_zqlE1vSZj7xri0HPDeW0y')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      }

    return (

        <Layout>
        <div className="container">
            <form onSubmit={sendEmail}>
                <div className="row pt-8 mx-auto">
                    <input type="text" className="form-control" placeholder="Name" name="name"/>
                </div>
                <div className="col-8 form-group pt-2 mx-auto">
                    <input type="email" className="form-control" placeholder="Email Address" name="email"/>
                </div>
                <div className="col-8 form-group pt-2 mx-auto">
                    <input type="text" className="form-control" placeholder="Subject" name="subject"/>
                </div>
                <div className="col-8 form-group pt-2 mx-auto"> 
                <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
                </div>
                <div className="col-8 pt-3 mx-auto">
                    <input type="submit" className="btn btn-info" value="Send Message"></input>
                </div>
            </form>
        </div>

        </Layout>
    )
}