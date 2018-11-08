import React, { Component } from 'react';
import Stepper from 'react-stepper-horizontal';
import FormVenta from './FormVenta.js';
import FormClient from './FormClient.js';
import FormHome from './FormHome.js';

class StepperPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: 0,
      steps: [{
        title: 'Seleccionar cobertura',
        href: 'http://example1.com',
        onClick: (e) => {
          e.preventDefault()
          console.log('onClick', 1)
          this.currentPosition(0);
        }
      }, {
        title: 'Información personal',
        href: 'http://example2.com',
        onClick: (e) => {
          e.preventDefault()
          console.log('onClick', 2)
          this.currentPosition(1);
        }
      }, {
        title: 'Compra',
        href: 'http://example3.com',
        onClick: (e) => {
          e.preventDefault()
          console.log('onClick', 3)
          this.currentPosition(3);
        }
      }, {
        title: 'Step Four',
        href: 'http://example4.com',
        onClick: (e) => {
          e.preventDefault()
          console.log('onClick', 4)
        }
      }]     
    };
    this.onClickNext = this.onClickNext.bind(this);
    this.currentPosition = this.currentPosition.bind(this);
  }

  currentPosition(position) {
    this.setState({
      currentStep: position
    });
  }

  onClickNext() {
    const { currentStep } = this.state;
    this.setState({
      currentStep: currentStep + 1,
    });
  }

  render() {
    const { steps, currentStep } = this.state;
    const buttonStyle = { background: '#E0E0E0', width: 200, padding: 16, textAlign: 'center', margin: '0 auto', marginTop: 32 };

    return (
      <div className='stepper'>
        <Stepper steps={ steps } activeStep={ currentStep } />
        { this.state.currentStep === 0  &&
            (<FormClient onClickNext={this.onClickNext}/>)}
        { this.state.currentStep === 1  &&
            (<FormHome onClickNext={this.onClickNext}/>)}
              { this.state.currentStep === 2  &&
            (<FormVenta/>)}
      </div>
    );
  }
};

export default StepperPage;