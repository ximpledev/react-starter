import React from 'react';

/**
 * A counter button: tap the button to increase the count.
 */
class Counter extends React.Component {
  constructor() {
    super();

    this.state = {
      count: 0,
    };
  }

  render() {
    let {count} = this.state;

    return (
      <button
        onClick={() => {
          this.setState ({
            count: count + 1
          });
        }}>
        Count: {count}
      </button>
    );
  }
}

export default Counter;
