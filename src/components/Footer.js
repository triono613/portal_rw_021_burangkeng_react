import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <>
        <footer id="footer" data-stellar-background-ratio="0.5">
  <div className="container">
    <div className="row">
      <div className="col-md-5 col-sm-12">
        <div className="footer-thumb footer-info"> 
          <h2>Cluster Brazia dan Navara Extension</h2>
          <p>
            Website ini bertujuan agar memudahkan warga RW 021
            dalam melakukan administrasi surat menyurat dan juga memberikan 
            ruang UMKM para warga untuk memasarkan produk dan jasa yang dimiliki 
            agar tercipta Life Cycle dengan azas tolong menolong 
            dan juga memberikan keuntungan sesama warga
            Cluster Brazia dan Navara Extension 
          </p>
        </div>
      </div>
      <div className="col-md-4 col-sm-4"> 
        <div className="footer-thumb"> 
          <h2>Pelayanan Administrasi</h2>
          <ul className="footer-link">
            <li><a href="#">Surat Ket Domisili</a></li>
            <li><a href="#">Surat Rekomendasi</a></li>
            <li><a href="#">Surat Ket SKDU</a></li>
          </ul>
        </div>
      </div>
      {/* <div class="col-md-2 col-sm-4"> 
               <div class="footer-thumb"> 
                    <h2>Pelayanan</h2>
                    <ul class="footer-link">
                         <li><a href="#">Pricing</a></li>
                         <li><a href="#">Documentation</a></li>
                         <li><a href="#">Support</a></li>
                    </ul>
               </div>
          </div> */}
      <div className="col-md-3 col-sm-4"> 
        <div className="footer-thumb"> 
          <h2>Alamat Sekretariat</h2>
          <p>Mustika Park place Cluster Brazia Blok C16.</p>
        </div>
      </div>                    
      <div className="col-md-12 col-sm-12">
        <div className="footer-bottom">
          <div className="col-md-6 col-sm-5">
            <div className="copyright-text"> 
              <p>Copyright © 2022 Pengurus RW 021</p>
            </div>
          </div>
          <div className="col-md-6 col-sm-7">
            <div className="phone-contact"> 
              <p>Telp <span>(+21) 089508611088</span></p>
            </div>
            <ul className="social-icon">
              <li><a href="https://www.facebook.com/templatemo" className="fa fa-facebook-square" attr="facebook icon" /></li>
              <li><a href="#" className="fa fa-twitter" /></li>
              <li><a href="#" className="fa fa-instagram" /></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>

      </>
    )
  }
}
