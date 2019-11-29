import React, { Component } from "react";
// import Radium from "radium";
import "./App.scss";
import Car from "./Car/Car";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cars: [
        { name: "Ford", year: 2018 }
        // { name: "Audi", year: 2016 },
        // { name: "Mazda", year: 2010 }
      ],
      pageTitle: "React components",
      showCars: false
    };
  }

  toggleCarsHandler = () => {
    this.setState({
      showCars: !this.state.showCars
    });
  };

  onChangeName(name, index) {
    const car = this.state.cars[index];
    car.name = name;
    const cars = [...this.state.cars];
    cars[index] = car;
    this.setState({ cars });
  }

  deleteHandler(index) {
    const cars = this.state.cars.concat();
    cars.splice(index, 1);
    this.setState({ cars });
  }

  componentDidMount() {
    console.log("App componentDidMount");
  }

  render() {
    const divStyle = {
      textAlign: "center"
    };

    const btnStyle = {
      border: "1px solid orange",
      color: "blue",
      background: "rgb(8, 255, 8)",
      padding: "5px 10px",
      transition: "border, box-shadow 0.3s",
      ":hover": {
        color: "rgb(8, 255, 77)",
        background: "blue",
        border: "1px solid #aaa",
        boxShedow: "0 4px 15px 0 rgba(0, 0, 0, .25)",
        cursor: "pointer"
      }
    };

    let cars = null;

    if (this.state.showCars) {
      cars = this.state.cars.map((car, index) => {
        return (
          <Car
            key={index}
            name={car.name}
            year={car.year}
            onDelete={this.deleteHandler.bind(this, index)}
            onChangeName={event => this.onChangeName(event.target.value, index)}
          />
        );
      });
    }
    return (
      <div style={divStyle}>
        {/* <h1> {this.state.pageTitle} </h1> */}
        <h1>{this.props.title}</h1>

        <button style={btnStyle} onClick={this.toggleCarsHandler}>
          Toggle cars
        </button>

        <div
          style={{
            width: 400,
            margin: "auto",
            paddingTop: "5px"
          }}
        >
          {cars}
        </div>
      </div>
    );
  }
}

export default App;
