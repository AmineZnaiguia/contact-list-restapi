
import React, { Component } from 'react'
import {Link} from "react-router-dom"
export default class addContact extends Component {
    render() {
        return (
            <div className="add-card">
        <p className="card-title-add">
        New Contact
        </p>
        <input
          name="name"
          type="text"
          placeholder="Name..."
          value={this.props.contact.name}
          onChange={this.props.handelChange}

          
        />
        <input
          name="phone"
          type="text"
          placeholder="Phone..."
          value={this.props.contact.phone}
          onChange={this.props.handelChange}
         
        />
        <input
          name="email"
          type="text"
          placeholder="Email..."
          value={this.props.contact.email}
          onChange={this.props.handelChange}
        
        />
        <Link to="/contact-list">
          <input
            type="button"
            value="add"
            className="add-button"
            onClick={this.props.Action}
            
          />
        </Link>
      </div>
        )
    }
}
