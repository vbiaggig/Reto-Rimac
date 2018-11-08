import React, { Component } from 'react';
import { Card} from 'mdbreact';


class ItemCarousel extends Component {
  render() {
    return (
      <div className="benefit">
      <Card>
      <div className="benefit-img mx-auto">
          <img
            alt=''
            src={this.props.itemIMG}
          />
        </div>
        <div className="benefit-text">
          <h4>{this.props.itemTitle}</h4>
          <p>{this.props.itemText}</p>
        </div>

      </Card>
        
      </div>
    );
  }
}

export default ItemCarousel;