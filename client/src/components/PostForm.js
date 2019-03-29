import React from 'react';
import {Form, Button} from "semantic-ui-react";

class PostForm extends React.Component {
  state = {title: "", body: "", }

  handleSubmit = () => {
  }

  handleChange = () => {
  }

render () {
  const {title, body,} = this.state
    return (
      <>
      <Form>
      <input 
      name="title"
      placeholder="Title"
      value={title}
      onChange={this.handleChange}
      required/>
      <br />
      <input 
      name="body"
      placeholder="Body"
      value={body}
      onChange={this.handleChange}
      />
      <br />
      <br />
      <Button onClick={this.handleSubmit}>Post</Button>
      </Form>
      </>
    )
  }
}

export default PostForm;