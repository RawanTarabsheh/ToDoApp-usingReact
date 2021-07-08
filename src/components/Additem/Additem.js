import React, { Component } from "react";
import "./Additem.css";
class AddItem extends Component {
  state = {
    name: "",
    age: "",
  };
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addItem(this.state);
    this.setState({
      name: "",
      age: "",
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Enter name ..."
            id="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <input
            type="number"
            placeholder="Enter age ..."
            id="age"
            value={this.state.age}
            onChange={this.handleChange}
          />
          <input type="submit" value="Add" />
        </form>
      </div>
    );
  }
}
export default AddItem;
