import React, { Component } from 'react'
import { Link } from "react-router-dom";
export default class contactCard extends Component {
    render() {
        return (
           

<div className="contact-card">
    <p className="card-title">{this.props.contact.name}</p>
      <div className="card-text">
        <h4>
          <i class="fas fa-mobile-alt"></i> Phone:
        </h4>
        <p>{this.props.contact.phone}</p>
        <h4>
          <i class="fas fa-envelope"></i> Email:
        </h4>
        <p>{this.props.contact.email}</p>
      </div>
      <div className="buttons">
 
          <Link to='/edite-contact'>
          <input
            type="button"
            value="Edit"
            className="edit-button"
           
          />
          </Link>

          <input
            type="button"
            value="Delete"
            className="edit-button"
            onClick={()=>this.props.deleteContact(this.props.contact._id)}
          />

      </div>
    </div>
                
            
        )
    }
}
