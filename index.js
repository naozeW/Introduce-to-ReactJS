import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


class Card extends React.Component {
    change_card_info(){
        this.props.changeState();
    }

    render(){
        const sty = {
            paddingTop: '10%',
            margin: '0 auto',
        };
        const card_sty = {
            margin: '0 auto',
            width: "18rem",
        };
        return(
            <div className="Container" style={sty}>
                <div className="card" style={card_sty}>
                    <img src="https://mdbootstrap.com/img/Photos/Others/photo5.jpg" className="card-img-top"/>
                    <div className="card-body">
                        <h5 className="card-title">ReactJS DEMO</h5>
                        <p className="card-text">{this.props.data}</p>
                        <a className="btn btn-primary btn-block" onClick={() => this.change_card_info()}>Start</a>
                    </div>
                </div>
            </div>
        )
    }
}


class MainPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            which_card_to_show: 0,
            card_information: ['Welcome to ReactJS demo. In this demo we would show somethings about component, props and states',
            'Congratulate, we successfully change the state of the mainpage and switich the card']
        };
    }

    changeState() {
        let c_state = this.state.which_card_to_show;
        this.setState({
            which_card_to_show: 1 - c_state,
        })
    }

    render() {
        return (
            <div>
                Welcome to reactjs demo.
                <Card data={this.state.card_information[this.state.which_card_to_show]}
                changeState={() => this.changeState()}/>
            </div>
        )
    }
}

ReactDOM.render(
  /* <React.StrictMode>
    <App />
  </React.StrictMode>*/
  <MainPage/>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
