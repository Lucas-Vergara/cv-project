import '../general.scss'
import React, { Component } from 'react'
import {onChangeHandler, submitHandler} from './helper'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class OtherInterest extends Component {
    constructor(props) {
        super(props)
        this.state = {
            editing: false, 
            icon: 'Icono',
            content: '¿Porque esta es una de tus aficiones? ¿Que te aporta?',
        }

        this.onChangeHandler = onChangeHandler.bind(this)
        this.submitHandler = submitHandler.bind(this)
    }

    render() {
        let {editing, icon, content} = this.state
        if(!editing) {
            return(
                <div id="otherInterests">
                    <div> {icon} </div>
                    <div> {content} </div>
                    <FontAwesomeIcon icon="pencil-alt" className='edit' onClick={() => this.setState({ editing: true })}/>
                </div>
            )
        } else {
            return(
                <form onSubmit={this.submitHandler} className='form'>
                    <input type='text' name='icon' value={icon} onChange={this.onChangeHandler} />
                    <input type='text' name='content' value={content} onChange={this.onChangeHandler} />
                    <button type='submit'>Aceptar</button>
                </form>
            )
        }
    }
}

export default OtherInterest