import React, { Component } from 'react'

export default class Work extends Component {
  render() {
    return (
      <>
  {/* WORK */}
<section id="umkm" data-stellar-background-ratio="0.5">
  <div className="container">
    <div className="row">
      <div className="col-md-12 col-sm-12">
        <div className="section-title">
          <h2>UMKM</h2>
          <span className="line-bar">...</span>
        </div>
      </div>
      <div className="col-md-3 col-sm-6">
        {/* WORK THUMB */}
        <div className="work-thumb">
          <a href="umkm/risol.jpeg" className="image-popup">
            <img src="umkm/risol.jpeg" className="img-responsive" alt="Work" />
            <div className="work-info">
              <h3>Risol isi kentang</h3>
              <small>089508611088</small>
            </div>
          </a>
        </div>
      </div>
      <div className="col-md-3 col-sm-6">
        {/* WORK THUMB */}
        <div className="work-thumb">
          <a href="umkm/simin_bangun_sejahtera.jpeg" className="image-popup">
            <img src="umkm/simin_bangun_sejahtera.jpeg" className="img-responsive" alt="Work" />
            <div className="work-info">
              <h3>CV Simin Bangun Sejahtera</h3>
              <small>Memperbaiki dan Renovasi Hunian anda, menyesuaikan dengan budget yang dimikili dan dengan azas kekeluargaan</small>
            </div>
          </a>
        </div>
      </div>
      <div className="col-md-3 col-sm-6">
        {/* WORK THUMB */}
        <div className="work-thumb">
          <a href="umkm/cuci_kuras_toren.jpeg" className="image-popup">
            <img src="umkm/cuci_kuras_toren.jpeg" className="img-responsive" alt="Work" />
            <div className="work-info">
              <h3>Putra Al Hakim</h3>
              <small>Jasa Cuci Kuras Toren Air</small>
            </div>
          </a>
        </div>
      </div>
      <div className="col-md-3 col-sm-6">
        {/* WORK THUMB */}
        <div className="work-thumb">
          <a href="umkm/work-image4.jpg" className="image-popup">
            <img src="umkm/work-image4.jpg" className="img-responsive" alt="Work" />
            <div className="work-info">
              <h3>Paint Work</h3>
              <small>Art, Design</small>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

      </>
    )
  }
}
