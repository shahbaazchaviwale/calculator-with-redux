import React, { Component } from 'react'
import {connect} from 'react-redux'
  class Calculator extends Component {
  render() {
    return <div className="row">
        <div className="col-md-6">
        <h3>Basic Calculator</h3>
          <div className="col-md-12">
            <input type="text" className="form-control block" value={this.props.values} />
          </div>
          <div className="row col-md-12">
            <div className="col-md-3 margin-top-5">
              <button className="btn btn-primary btn block" onClick={() => this.props.number("1")}>1</button>
            </div>
            <div className="col-md-3 margin-top-5">
              <button className="btn btn-primary btn block" onClick={() => this.props.number("2")}>2</button>
            </div>
            <div className="col-md-3 margin-top-5">
              <button className="btn btn-primary btn block" onClick={() => this.props.number("3")}>3</button>
            </div>
            <div className="col-md-3 margin-top-5">
              <button className="btn btn-default btn block" onClick={() => this.props.clear()} >C</button>
            </div>
            <div className="col-md-3 margin-top-5">
              <button className="btn btn-primary btn block" onClick={() => this.props.number("4")}>4</button>
            </div>
            <div className="col-md-3 margin-top-5">
              <button className="btn btn-primary btn block" onClick={() => this.props.number("5")}>5</button>
            </div>
            <div className="col-md-3 margin-top-5">
              <button className="btn btn-primary btn block" onClick={() => this.props.number("6")}>6</button>
            </div>
            <div className="col-md-3 margin-top-5">
              <button className="btn btn-danger btn block" onClick={() => this.props.result(this.props.values)}>=</button>
            </div>
            <div className="col-md-3 margin-top-5">
              <button className="btn btn-primary btn block" onClick={() => this.props.number("7")}>7</button>
            </div>
            <div className="col-md-3 margin-top-5">
              <button className="btn btn-primary btn block" onClick={() => this.props.number("8")}>8</button>
            </div>
            <div className="col-md-3 margin-top-5">
            <button className="btn btn-primary btn block" onClick={() => this.props.number("9")}>9</button>
            </div>
            <div className="col-md-3 margin-top-5">
              <button className="btn btn-primary btn block" onClick={() => this.props.number(".")}>.</button>
            </div>
            <div className="col-md-3 margin-top-5">
              <button className="btn btn-primary btn block" onClick={() => this.props.number("+")}>+</button>
            </div>
            <div className="col-md-3 margin-top-5">
              <button className="btn btn-primary btn block" onClick={() => this.props.number("0")}>0</button>
            </div>
            <div className="col-md-3 margin-top-5">
              <button className="btn btn-primary btn block" onClick={() => this.props.number("*")}>*</button>
            </div>
            <div className="col-md-3 margin-top-5">
              <button className="btn btn-primary btn block" onClick={() => this.props.number("/")}>/</button>
            </div>
          </div>
        </div>
      </div>;
  }
}

const load_data = (state) => {
  return{
    values : state.value
  }
}

const dispatchData = (dispatch) =>{
  return{
    number: (data) => {
        dispatch({type : "INSERT_DATA", data});
    },
    clear : () =>{
      dispatch({type : "CLEAR"});
    },
    result : (total_values) =>{
      dispatch({ type: "RESULT", total_values});
    }
  }
}

export default connect(load_data, dispatchData)(Calculator);