/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react'

export default class Home extends Component {
  render() {
    return (
      <>
        {/* HOME */}
<section id="home" data-stellar-background-ratio="0.5">
  <div className="overlay" />
  <div className="container">
    <div className="row">
      <div className="col-md-6 col-sm-12">
        {/* <div class="home-info">
                    <h1>We make beautiful websites for all people.</h1>
                    <a href="#about" class="btn section-btn smoothScroll">Start a project</a>
                    <span>
                         CALL US (+66) 010-020-0340
                         <small>For any inquiry</small>
                    </span>
               </div> */}
        <br /><br /><br /><br />
        <div className="home-info">
          <h1>Website UMKM dan Administrasi RT dan RW 021  </h1>
          <a href="#about" className="btn section-btn smoothScroll">Jelajahi...</a>
          <br /><br />
          <p style={{color: 'white'}}>
            Website ini bertujuan agar memudahkan warga RW 021
            dalam melakukan administrasi surat menyurat dan juga memberikan 
            ruang UMKM para warga untuk memasarkan produk dan jasa yang dimiliki 
            agar tercipta Life Cycle dengan azas tolong menolong 
            dan juga memberikan keuntungan sesama warga
            Cluster Brazia dan Navara Extension
            <small>
            </small> <br />
          </p>
          <hr noshade />
        </div>
      </div>
      <div className="col-md-6 col-sm-12">
        <div className="home-video">
          {/* <div class="embed-responsive embed-responsive-16by9"> */}
          {/* <iframe src="https://www.youtube.com/embed/AqcjdkPMPJA" frameborder="0" allowfullscreen></iframe>  */}
          {/* <video width="320" height="240" autoplay muted>
                              <source src="./video/campaign-RW.mp4" type="video/mp4">
                              <source src="./video/campaign-RW.mp4" type="video/ogg">
                              Your browser does not support the video tag.
                            </video> */}
          {/* </div> */}
          {/* <img style="margin-top: 25rem;
                    margin-left: 15rem;" src="./img/logo-mpp-removebg-preview.png"  >  */}
          {/* <img src="./img/rtrw.png"  >   */}
          <img src="./img/kab-bekasi.png" style={{maxWidth: 400, marginTop: '15rem', marginLeft: '15rem'}} />
        </div>
      </div>
    </div>
  </div>
</section>

      </>
    )
  }
}
