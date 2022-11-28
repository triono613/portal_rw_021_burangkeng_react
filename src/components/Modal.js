import React, { Component } from 'react'

export default class Modal extends Component {
  render() {
    return (
     <>
{/* MODAL */}
<section className="modal fade" id="modal-form" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-lg">
    <div className="modal-content modal-popup">
      <div className="modal-header">
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">×</span>
        </button>
      </div>
      <div className="modal-body">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 col-sm-12">
              <div className="modal-title">
                <h2>Hydro Co</h2>
              </div>
              {/* NAV TABS */}
              <ul className="nav nav-tabs" role="tablist">
                <li className="active">
                </li>
                <li>
                </li>
              </ul>
              {/* TAB PANES */}
              <div className="tab-content">
                <div role="tabpanel" className="tab-pane fade in active" id="sign_up">
                  <form action="#" method="post">
                    <input type="text" className="form-control" name="name" placeholder="Name" required />
                    <input type="telephone" className="form-control" name="telephone" placeholder="Telephone" required />
                    <input type="email" className="form-control" name="email" placeholder="Email" required />
                    <input type="password" className="form-control" name="password" placeholder="Password" required />
                    <input type="submit" className="form-control" name="submit" defaultValue="Submit Button" />
                  </form>
                </div>
                <div role="tabpanel" className="tab-pane fade in" id="sign_in">
                  <form action="#" method="post">
                    <input type="email" className="form-control" name="email" placeholder="Email" required />
                    <input type="password" className="form-control" name="password" placeholder="Password" required />
                    <input type="submit" className="form-control" name="submit" defaultValue="Submit Button" />
                    <a href="https://www.facebook.com/templatemo">Forgot your password?</a>
                  </form>
                </div>
              </div>
            </div>
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
