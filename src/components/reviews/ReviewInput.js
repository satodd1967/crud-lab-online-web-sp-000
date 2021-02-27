import React, { Component } from 'react';

class ReviewInput extends Component {

  state = {
    text: '',
  }

  handleOnChange(event) {
    this.setState({
      text: event.target.value,
    });
  }


  handleOnSubmit(event) {
    event.preventDefault();
    const review = {
      text: `${this.state.text}, ${this.props.restaurantId}`
    }
    this.props.addReview(review);
    this.setState({
      text: '',
    });
  }


  render() {
    return (
      <div>
        <label>Add Review</label>
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <input
            type="text"
            value={this.state.text}
            onChange={(event) => this.handleOnChange(event)} />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default ReviewInput;
