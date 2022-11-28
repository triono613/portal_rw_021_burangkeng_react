/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <>
   {/* ABOUT */}
<section id="about" data-stellar-background-ratio="0.5">
  <div className="container">
    <div className="row">
      <div className="col-md-5 col-sm-6">
        <div className="about-info">
          <div className="section-title">
            <h2>Bersama ciptakan kolaborasi </h2><br />
            <h2>dan harmonisasi </h2>
            <span className="line-bar">...</span>
          </div>
          <p>Kami berkomitmen akan menciptakan lingkungan yang Harmonis, Rukun, Aman dan menumbuhkan rasa Nasionalisme dengan cara melakukan kerjabakti dilingkungan RW 021, komunikasi yang intensif kepada warga dan memeberikan rasa Aman dan Nyaman dalam beribadah kepada semua waraga RW 021.</p>
          {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p> */}
        </div>
      </div>
      <div className="col-md-3 col-sm-6">
        <div className="about-info skill-thumb">
          <strong>Kerharmonisan</strong>
          <span className="pull-right">100%</span>
          <div className="progress">
            <div className="progress-bar progress-bar-primary" role="progressbar" aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} style={{width: '100%'}} />
          </div>
          <strong>Kerukunan</strong>
          <span className="pull-right">100%</span>
          <div className="progress">
            <div className="progress-bar progress-bar-primary" role="progressbar" aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} style={{width: '100%'}} />
          </div>
          <strong>Keamanan</strong>
          <span className="pull-right">100%</span>
          <div className="progress">
            <div className="progress-bar progress-bar-primary" role="progressbar" aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} style={{width: '100%'}} />
          </div>
          <strong>Nasionalisme</strong>
          <span className="pull-right">100%</span>
          <div className="progress">
            <div className="progress-bar progress-bar-primary" role="progressbar" aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} style={{width: '100%'}} />
          </div>
        </div>
      </div>
      <div className="col-md-4 col-sm-12">
        <div className="about-image">
          <img src="./img/RT-RW-IMG.png" className="img-responsive" alt />
        </div>
      </div>
    </div>
  </div>
</section>

      </>
    )
  }
}
