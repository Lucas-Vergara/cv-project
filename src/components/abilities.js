import '../general.scss'
import React, { Component } from 'react'
import {onChangeHandler, submitHandler} from './helper'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Abilities extends Component {

    constructor(props) {
        super(props)
        this.state = {
            editing: false,
            content: 'Habilidad técnica',
        }

        this.onChangeHandler = onChangeHandler.bind(this)
        this.submitHandler = submitHandler.bind(this)
    }

    render() {
        let {editing, content} = this.state
        if (!editing) {
            return (
                <div id='abilities'> 
                    {content} 
                    <FontAwesomeIcon icon="pencil-alt" className='edit' onClick={() => this.setState({ editing: true })}/>
                </div>
            )
        } else {
            <form onSubmit={this.submitHandler} className='form'>
                <input type='text' name='content' value={content} onChange={this.onChangeHandler} />
                <button type='submit'>Aceptar</button>
            </form>
        }
    }
}

export default Abilities