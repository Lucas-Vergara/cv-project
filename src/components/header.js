import '../general.scss'
import React, { Component } from 'react'
import {onChangeHandler, submitHandler} from './helper'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Header extends Component {

    constructor(props) {
        super(props)
        this.state = {
            editing: false,
            name: 'Nombre',
            title: 'Título',
            adress: 'Dirección',
            email: 'Correo Electrónico',
            phone: 'Número Telefónico',
        }

        this.onChangeHandler = onChangeHandler.bind(this)
        this.submitHandler = submitHandler.bind(this)
    }

    render() {
        let {editing, name, title, adress, email, phone} = this.state
        if (!editing) {
            return (
                <div id='header'>
                    <h1 className='highlight1'> {name} </h1>
                    <h2 className='highlight2'> {title} </h2>
                    <div>
                        <span> <FontAwesomeIcon icon='map-marker-alt' /> {adress} </span>
                        <span> <FontAwesomeIcon icon='envelope' /> {email} </span>
                        <span> <FontAwesomeIcon icon='phone-alt' /> {phone} </span>
                        <FontAwesomeIcon icon="pencil-alt" className='edit' onClick={() => this.setState({ editing: true })}/>

                    </div>
                </div>
            )
        } else {
            return (
                <div id='header'>
                    <form onSubmit={this.submitHandler} className='form'>
                        <input type='text' name='name' value={name} onChange={this.onChangeHandler} />
                        <input type='text' name='title' value={title} onChange={this.onChangeHandler} />
                        <input type='text' name='adress' value={adress} onChange={this.onChangeHandler} />
                        <input type='text' name='email' value={email} onChange={this.onChangeHandler} />
                        <input type='text' name='phone' value={phone} onChange={this.onChangeHandler} />
                        <button type='submit'>Aceptar</button>
                    </form>
                </div>
            )
        }

        
    }
}

export default Header