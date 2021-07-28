import React, { Component} from "react";
import '../App.css';

class ItemCount extends Component{
    stock = this.props.stock;
    constructor(props) {
        super(props);
        this.state = {in: props.inicial};
      }

    addOn = () => {
        const stock = parseInt(document.getElementById("count").value);
        if (this.stock >= stock){
            alert("Producto/s agregado/s");
        }
    }
    incrementar=()=>{
        let input = document.getElementById("count");
        if (input.value<this.stock){
            // eslint-disable-next-line react/no-direct-mutation-state
            this.setState({in:(++this.state.in)});
            input.value = this.state.in;
        }
    }
    decrementar=()=>{
        let input = document.getElementById("count");
        if (input.value>this.props.inicial){
        // eslint-disable-next-line react/no-direct-mutation-state
        this.setState({in:(--this.state.in)});
        input.value= this.state.in;       
        }else{
             input.value= this.props.inicial;
        }
    }
    render() {
        return(
           <div>
                <input type="number" id="count" defaultValue={this.state.in}></input>
                <button onClick={this.incrementar}>+</button>
                <button onClick={this.decrementar}>-</button>
                <button onClick={this.addOn}>Add to cart</button>
            </div> 
        );
    }
}

export default ItemCount;