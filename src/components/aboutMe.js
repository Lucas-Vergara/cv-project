import '../general.scss'
import React, { Component } from 'react'
import {onChangeHandler, submitHandler} from './helper'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class AboutMe extends Component {

    constructor(props) {
        super(props)
        this.state = {
            editing: false,
            content: 'Información personal, metas, intereces, etc.'
        }

        this.onChangeHandler = onChangeHandler.bind(this)
        this.submitHandler = submitHandler.bind(this)
    }

    render() {
        let {editing, content} = this.state
        if (!editing) {
            return (
                <div id='aboutMe'>
                    {content}
                    <FontAwesomeIcon icon="pencil-alt" className='edit' onClick={() => this.setState({ editing: true })}/>
                </div>
                
            )
        } else {
            return (
                <div id='aboutMe'>
                    <form onSubmit={this.submitHandler} className='form'>
                        <input type='text' name='content' value={content} onChange={this.onChangeHandler} />
                        <button type='submit'>Aceptar</button>
                    </form>
                </div>
            )
        }

    }

}



export default AboutMe