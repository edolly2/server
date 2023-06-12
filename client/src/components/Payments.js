import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from '../actions/index';

class Payments extends Component {
  render() {
    return (
      <>
        <StripeCheckout
          name='ClientCanvas'
          description='$5.00 For 5 ClientCanvas Credits'
          amount={500}
          token={(token) => this.props.handleToken(token)}
          stripeKey={process.env.REACT_APP_STRIPE_KEY}
          // allowRememberMe={true}
          // shippingAddress={true}
          // livemode={true}
        >
          <button className='btn'>Add Credits</button>
        </StripeCheckout>
      </>
    );
  }
}

export default connect(null, actions)(Payments);
