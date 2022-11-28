/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'

export default class Blog extends Component {
  render() {
    return (
      <>
        {/* BLOG */}
<section id="blog" data-stellar-background-ratio="0.5">
  <div className="container">
    <div className="row">
      <div className="col-md-12 col-sm-12">
        <div className="section-title">
          <h2>Kegiatan</h2>
          <span className="line-bar">...</span>
        </div>
      </div>
      <div className="col-md-6 col-sm-6">
        {/* BLOG THUMB */}
        <div className="media blog-thumb">
          <div className="media-object media-left">
            <a href=""><img src="artikel/artikel-pelantikan.jpeg" className="img-responsive" alt /></a>
          </div>
          <div className="media-body blog-info">
            <small><i className="fa fa-clock-o" /> 10 Oktober 2022</small>
            <h3><a href="">Pelaksanaan Pelantikan Ketua RW 021 dan RT 01 , 02, 03.</a></h3>
            <p>Para calon dilantik langsung oleh Lurah Desa Burangkeng.</p>
            <a href="" className="btn section-btn">Detail Artikel</a>
          </div>
        </div>
      </div>
      <div className="col-md-6 col-sm-6">
        {/* BLOG THUMB */}
        <div className="media blog-thumb">
          <div className="media-object media-left">
            <a href=""><img src="artikel/bukber-rt-03-3.jpeg" className="img-responsive" alt /></a>
          </div>
          <div className="media-body blog-info">
            <small><i className="fa fa-clock-o" /> 05 Juni 2022</small>
            <h3><a href="">buka bersama Ramadhan 2022.</a></h3>
            <p>Dalam rangka menyambut bulan ramadhan, para warga RT 003 mengadakan acara
              {/*    Buka bersama  untuk mempererat silaturahmi dan juga menjadi sarana warga memberikan ide, masukan bahkan keluhan yang ada dalam lingkungan RT 003 RW 021. */}
            </p>
            <a href="" className="btn section-btn">Detail Artikel</a>
          </div>
        </div>
      </div>
      <div className="col-md-6 col-sm-6">
        {/* BLOG THUMB */}
        <div className="media blog-thumb">
          <div className="media-object media-left">
            <a href=""><img src="artikel/idul-adha.jpeg" className="img-responsive" alt /></a>
          </div>
          <div className="media-body blog-info">
            <small><i className="fa fa-clock-o" /> 10 Oktober 2022</small>
            <h3><a href="">Pelaksanaan pemotongan hewan Qurban</a></h3>
            <p>Di halaman lingkungan Masjid Babul Janah Cluster Brazia.</p>
            <a href="" className="btn section-btn">Detail Artikel</a>
          </div>
        </div>
      </div>
      <div className="col-md-6 col-sm-6">
        {/* BLOG THUMB */}
        <div className="media blog-thumb">
          <div className="media-object media-left">
            <a href=""><img src="artikel/artikel-pelantikan.jpeg" className="img-responsive" alt /></a>
          </div>
          <div className="media-body blog-info">
            <small><i className="fa fa-clock-o" /> 10 Oktober 2022</small>
            <h3><a href="">Pelaksanaan Pelantikan Ketua RW 021 dan RT 01 , 02, 03.</a></h3>
            <p>Para calon dilantik langsung oleh Lurah Desa Burangkeng.</p>
            <a href="" className="btn section-btn">Detail Artikel</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      </>
    )
  }
}
