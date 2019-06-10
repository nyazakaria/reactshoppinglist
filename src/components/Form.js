import React from 'react';
import "../styles.css";

class Form extends React.Component {

    constructor(props){
        super(props);

       this.state = {
            name: ' ',
            quantity: 0
        }
    }

     handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        this.props.addArticle(this.state);
        this.setState({name:' ', quantity:0})
    }

    render(){
        return (
                <>
                <div>{this.props.title}</div>
                <form onSubmit={this.handleSubmit}>
                <input type="number"  className='quantity' placeholder='Quantité' value={this.state.quantity} 
                onChange={
                    event => this.setState({quantity: event.target.value})}/>
                <input type="text" placeholder='Article' value={this.state.name}
                onChange={event => this.setState({name: event.target.value})}/>
                <button type="submit" className="btn btn-success btn-md">Ajouter</button>
                </form>
                </>
        );
    }
}

export default Form;