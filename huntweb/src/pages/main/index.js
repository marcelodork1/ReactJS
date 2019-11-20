import React, {Component} from 'react';
import api from '../../services/api';
import { async } from 'rxjs/internal/scheduler/async';

import './styles.css';

export default class Main extends Component{

    state = {
        products: [],
    }

    componentDidMount(){
        this.loadProducts();
    }

    loadProducts = async() => {
        const response = await api.get('/products')

        this.setState({products: response.data.docs})

        console.log(response.data.docs);

    };

    render(){

        const {products } = this.state;

    //return <h1>Hello Teste de React Native Contagem: {this.state.products.length}</h1>
    return (
        <div className="product-list">
{this.state.products.map(product => (   
    <article key={product._id}>
    <strong>{product.title}</strong>
    <p>{product.description}</p>

    <a href="">Acessar</a>
    </article>
))}
        </div>
    )
    }
}