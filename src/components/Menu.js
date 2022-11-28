import React, { Component } from 'react';
// import { Link,Router,Routes,BrowserRouter } from 'react-router-dom';
import {Link} from 'react-scroll';


class Menu extends Component {
  render() {
    return (
      <>
{/* MENU */}
          <section className="navbar custom-navbar navbar-fixed-top" role="navigation">
                <div className="container">
                <div className="navbar-header">
                    <button className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                    <span className="icon icon-bar" />
                    <span className="icon icon-bar" />
                    <span className="icon icon-bar" />
                    </button>
                    {/* lOGO TEXT HERE */}
                    <div className="navbar-brand">
                    {/* <img style="" src="./images/logo-mpp-removebg-preview.png"  >  */}
                    Brazia - Ext
                    </div>
                </div>
                <div className="collapse navbar-collapse">
                    <ul className="nav navbar-nav navbar-nav-first">
                    <li><Link to="home" className="smoothScroll">Home</Link></li>
                    <li><Link to="about" className="smoothScroll">Struktur Pengurus</Link></li>
                    <li><Link to="contact" className="smoothScroll">Pelayanan</Link></li>
                    <li><Link to="blog" className="smoothScroll">Kegiatan</Link></li>
                    <li><Link to="umkm" className="smoothScroll">UMKM Warga</Link></li>
                    <li><Link to="contact" className="smoothScroll">contact</Link></li>

                    {/* <li >
                      <Link className="smoothScroll" to="about" spy={true} smooth={true} offset={-80}>
                        Pelayanan
                      </Link>
                    </li> */}
                    </ul>
                    <ul className="nav navbar-nav navbar-right">
                    <li>
                        {/* <Link to="#"><i className="fa fa-facebook-square" /></Link> */}
                    </li>
                    <li>
                        {/* <Link to="#"><i className="fa fa-twitter" /></Link> */}
                    </li>
                    <li>
                    </li>
                    </ul>
                </div>
                </div>
            </section>
      </>
      
    )
  }
}

export default  Menu; 
