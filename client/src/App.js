
import React, { Component } from "react";
import { Link, Switch, Route} from 'react-router-dom'

import AddContact from "./component/addContact"
import ContactCard from "./component/contactCard"

import './App.css';
import axios from 'axios'

export default class App extends Component {
state ={
  list : [],
  name: "",
    phone: "",
    email: "",
    id: "",
}
 componentDidMount = () =>{
   this.getAllContacts();
 }

 getAllContacts = () => {
  axios.get("/contacts").then(res => this.setState({ list: res.data }));
};
 
addContact = () => {
  axios
    .post("/addcontact", {
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone
    })
    .then(this.getAllContacts);
  this.reset();
};

deleteContact = id => {
  axios
    .delete(`/deletecontact/${id}`)
    .then(this.getAllContacts)
    .catch(err => console.log(err));
};

reset = () => {
  this.setState({
    name: "",
    phone: "",
    email: ""
  });
};

handelChange = e => {
  this.setState({
    [e.target.name]: e.target.value
  });
};
render(){
  return (
    <div className="App">
      <div>
        <div>
          <h1>My Contact</h1>
          <Link to="/contact-list">
            <button className="button">Contact List</button>
          </Link>
          <Link to="/ajouter-contact">
            <button className="button" >
              Add Contact
            </button>
          </Link>
        </div>
    </div>

    <Switch>
    <Route
            path="/contact-list"
            render={() => (
              <div className="contact-list">
                {this.state.list.map(el => (
                  <ContactCard
                    contact={el}
                    deleteContact={this.deleteContact}
                  />
                ))}
              </div>
            )}
          />
       <Route path="/ajouter-contact" render ={()=>(
         <AddContact 
         handelChange={this.handelChange}
                Action={this.addContact}
                contact={this.state}
         />
       )} />
       

    </Switch>
    </div>
  );
}
}
