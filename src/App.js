import React, { Component } from 'react';
import './style.css';

class Card extends Component {
    constructor(props){
        super(props);
        this.state = {
            heightCTA: "How tall",
            ageCTA: "How old"
        }
    }
    nextHandler = () => {
        if(this.state.ageChecked && this.state.heightChecked){
            this.props.nextCeleb();
            this.setState({
                ageChecked: false,
                heightChecked: false,
            });
        }
    }
    reveal = (ev) => {
        let cardClicked = ev.target.innerHTML;
        if(cardClicked === "How old?"){
            this.setState({
                ageChecked: true
            });
        }
        if(cardClicked === "How tall?"){
            this.setState({
                heightChecked: true
            });
        }
    }
    render(){
        const { ageChecked } = this.state;
        const { heightChecked } = this.state;
        return(
            <div className="container">
                <div className="card transparent" style={{
                    backgroundImage: `url(${this.props.info.img})`}}
                    onClick={this.nextHandler}
                >
                    <div className="nameContainer">
                        <h2 className="name">
                            {this.props.info.name}
                        </h2>
                    </div>
                    
                    <div className={this.state.ageChecked && this.state.heightChecked ? "next" : "hide"}>
                        <div>
                            Next >
                        </div>
                        <p className="summary">
                            {this.props.info.name} is {this.props.info.height} and {this.props.info.age} years old
                        </p>
                    </div>
                </div>
                <div className="button-container">
                    <div className="flip-container">
                        <div className={`flipper ${ageChecked ? "flip" : ""}`} onClick={this.reveal}>
                            <div className={`front button`}>
                                How old?
                            </div>
                            <div className={`back button`}>
                                <span className={`result ${ageChecked ? "" : "hide"}`}>{this.props.info.age}</span>
                            </div>
                        </div>
                    </div>
                    <div className="flip-container">
                        <div className={`flipper ${heightChecked ? "flip" : ""}`} onClick={this.reveal}>
                            <div className={`front button`}>
                                How tall?
                            </div>
                            <div className={`back button`}>
                                <span className={`result ${heightChecked ? "" : "hide"}`}>{this.props.info.height}</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
export default Card;