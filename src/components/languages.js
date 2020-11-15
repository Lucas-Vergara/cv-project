import '../general.scss'
import React, { Component } from 'react'
import {onChangeHandler, submitHandler} from './helper'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Language extends Component {

    constructor(props) {
        super(props)
        this.state = {
            editing: false,
            language: 'Idioma',
            level: 'Nivel de dominio'
        }

        this.onChangeHandler = onChangeHandler.bind(this)
        this.submitHandler = submitHandler.bind(this)
    }

    render() {
        let {editing, language, level} = this.state
        if(!editing) {
            return(
                <div id="languages">
                    <span> {language} - </span> <span> {level} </span>
                    <div>  
                        <FontAwesomeIcon icon="pencil-alt" className='edit' onClick={() => this.setState({ editing: true })}/>
                    </div>
                </div>
            )
        } else {
            return(
                <form onSubmit={this.submitHandler} className='form'>
                    <input type='text' name='language' value={language} onChange={this.onChangeHandler} />
                    <input type='text' name='level' value={level} onChange={this.onChangeHandler} />
                    <button type='submit'>Aceptar</button>
                </form>
            )
        }
    }
}

export default Language