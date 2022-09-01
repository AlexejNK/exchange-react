import React from "react";
import './Rate.css';
import Calc from "../Calc/Calc";

class Rate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
      currencyRate: {},
    }
    this.currency = ["USD", 'RUB', 'CAD', 'PHP'];
  }
  async componentDidMount() {
      await this.getRate();
  }
  getRate = async () => {
      const response = await fetch('https://api.apilayer.com/exchangerates_data/latest?base=EUR', {headers: {'apikey': 'fhbDeNO5zs8B72zKNfVlwa33SRxUzZ8F'}})
    const data = await response.json();
          let result = {};
          for (let key in this.currency) {
            result[this.currency[key]] = data.rates[this.currency[key]];
          }
          this.setState({currencyRate : result, date : data.date})
  }
    render() {
      return (
      <div className="rate">
        <h3>Курс валют на {this.state.date}</h3>
        <div className="flex-container">
          {Object.keys(this.state.currencyRate).map((keyName) => (
            <div className="block flex-item" key = {keyName}>
                <div className="currency-name">{keyName}</div>
                <div className="currency-in">{this.state.currencyRate[keyName].toFixed(2)}*</div>
                <p>* Можно купить за 1 EUR</p>
            </div>
              )
          )}
        </div>
          <Calc rate = {this.state.currencyRate} />
      </div>
    );
  }
}

export default Rate;
