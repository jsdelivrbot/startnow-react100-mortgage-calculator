import React from 'react';

export default class App extends React.Component {
  //your Javascript goes here
  constructor() {
    super();
    this.state = {
      balance: 0,
      rate: 0,
      term: 15,
      output: null,

    };
    this.onChange = this.onChange.bind(this);
    this.calculate = this.calculate.bind(this);
  }
  onChange(event) {

    let name = event.target.name;
    let value = event.target.value;
    this.setState({
      [name]: value,

    });

  }

  calculate(balance, rate, term, period) {


    let principal = this.state.balance;
    let rate1 = ((this.state.rate) / 100) / 12;
    console.log(rate1);
    let upper = rate1 * (Math.pow((1 + rate1), (this.state.term * 12)));
    let lower = Math.pow((1 + rate1), (this.state.term * 12)) - 1;
    let monthly = principal * (upper / lower);
    let payment = '$' + monthly.toFixed(2) + ' is your payment';


    this.setState({ output: payment });

  }

  render() {
    return (
    
<div id='body' className='container-fluid bg-info'>
      <div className= 'container'>
        <h1 className='text-center'><u>Mortgage Calculator</u></h1>
          <div>
            <label>Mortgage Balance : </label>
            <input name='balance' type='number' className="form-control" value={this.state.balance} onChange={this.onChange}></input>
            <div className='container'>
              <label>Interest Rate (%) :</label>
              <input name='rate' type='number' step='0.01' className="form-control" value={this.state.rate} onChange={this.onChange}></input>
              <div className='container'>
              <label>Term (years)</label>
                <select name='term' value={this.state.term} onChange={this.onChange}>
                  <option>15</option>
                  <option>30</option>
                </select>
                <div className='container'>
                  <button className="btn btn-danger  center-block" name='submit' onClick={this.calculate}>Submit</button>
                </div>
                <div className='container form-control' name='output' id="output">{this.state.output}</div>
              </div>
            </div>
          </div>
      </div> 
</div>

    );
  }
  
  }
