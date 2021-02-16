import React, { Component } from 'react';
import './footer.css';

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <h2>YST: Youness Standard Time <br></br> (+2hr your local time)</h2>
                <h3>The actual time is {this.props.actual}</h3>
            </div>
        );
    }
  }
  

export default Footer;