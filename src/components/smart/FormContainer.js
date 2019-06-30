import React, { Component } from "react";
import Input from "../dumb/Input.js";

class FormContainer extends Component {
  constructor() {
    super();
    this.state = {
      seo_title: ""
    };
    this._handleChange = this._handleChange.bind(this);
  }

  render() {
    const { seo_title } = this.state;
    return (
      <form id="article-form">
        <Input
          text="SEO title"
          label="seo_title"
          type="text"
          id="seo_title"
          value={seo_title}
          handleChange={this._handleChange}
        />
      </form>
    );
  }

  _handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }
}

export default FormContainer;
