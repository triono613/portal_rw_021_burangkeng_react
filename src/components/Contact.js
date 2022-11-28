/* eslint-disable jsx-a11y/no-redundant-roles */
import React, { Component } from 'react'

export default class Contact extends Component {
  render() {
    return (
     <>
       {/* CONTACT */}
<section id="contact" data-stellar-background-ratio="0.5">
  <div className="container">
    <div className="row">
      <div className="col-md-12 col-sm-12">
        <div className="section-title">
          <h2>Pelayanan</h2>
          <span className="line-bar">...</span>
        </div>
      </div>
      <div className="col-md-8 col-sm-8">
        {/* CONTACT FORM HERE */}
        <form id="contact-form" role="form" action="#" method="post">
          <div className="col-md-6 col-sm-6">
            <input type="text" className="form-control" placeholder="Full Name" id="cf-name" name="cf-name" required />
          </div>
          <div className="col-md-6 col-sm-6">
            <input type="email" className="form-control" placeholder="Your Email" id="cf-email" name="cf-email" required />
          </div>
          <div className="col-md-6 col-sm-6">
            <input type="tel" className="form-control" placeholder="Your Phone" id="cf-number" name="cf-number" required />
          </div>
          <div className="col-md-6 col-sm-6">
            <select className="form-control" id="cf-budgets" name="cf-budgets">
              <option>Budget Level</option>
              <option>$500 to $1,000</option>
              <option>$1,000 to $2,200</option>
              <option>$2,200 to $4,500</option>
              <option>$4,500 to $7,500</option>
              <option>$7,500 to $12,000</option>
              <option>$12,000 or more</option>
            </select>
          </div>
          <div className="col-md-12 col-sm-12">
            <textarea className="form-control" rows={6} placeholder="Your requirements" id="cf-message" name="cf-message" required defaultValue={""} />
          </div>
          <div className="col-md-4 col-sm-12">
            <input type="submit" className="form-control" name="submit" defaultValue="Send Message" />
          </div>
        </form>
      </div>
      <div className="col-md-4 col-sm-4">
        <div className="google-map">
          {/* How to change your own map point
  1. Go to Google Maps
  2. Click on your location point
  3. Click "Share" and choose "Embed map" tab
  4. Copy only URL and paste it within the src="" field below
*/}
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3647.3030413476204!2d100.5641230193719!3d13.757206847615207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf51ce6427b7918fc!2sG+Tower!5e0!3m2!1sen!2sth!4v1510722015945" allowFullScreen />
        </div>
      </div>
    </div>
  </div>
</section>

     </>
    )
  }
}
