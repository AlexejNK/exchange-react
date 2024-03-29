import React from "react";
import './Calc.css';

class Calc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        result: 0
    }
  }

    static getDerivedStateFromProps(props, state) {
      return {rate: props.rate}
    }

    calcRate = (e) => {
      e.preventDefault();
      let elements = e.target.elements;
      let countCurrency = elements['count-currency'].value;
      let typeCurrency = elements['type-currency'].value;
      this.setState({result: (countCurrency / this.state.rate[typeCurrency]).toFixed(2)})
  }

    render() {
      return (
      <div className="calculator">
          <h3> Калькулятор обмена</h3>
          <div className="block">
              <div>Я хочу</div>
              <div>
                  <form onSubmit={this.calcRate}>
                      <label><input type="number" defaultValue="150" name="count-currency"/></label>
                      <label>
                          <select name="type-currency" id="">
                              {Object.keys(this.props.rate).map((keyName) => (
                                  <option key={keyName} value={keyName}>{keyName}</option>))}
                          </select>
                          <input type='submit' defaultValue='calc' />
                      </label>
                  </form>
              </div>
              <div>
                  <h4>Результат</h4>
                  <ul className="calc-res">
                      <li>EUR {this.state.result}</li>
                  </ul>
              </div>
          </div>
      </div>
    );
  }
}

export default Calc;
