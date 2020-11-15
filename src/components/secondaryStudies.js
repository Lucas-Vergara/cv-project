import '../general.scss'
import React, { Component } from 'react'
import {onChangeHandler, submitHandler} from './helper'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class SecondaryStudies extends Component {

    constructor(props) {
        super(props)
        this.state = {
            editing: false, 
            title: 'Nombre del curso',
            place: 'Institución o centro educativo',
            years: '2018'
        }

        this.onChangeHandler = onChangeHandler.bind(this)
        this.submitHandler = submitHandler.bind(this)
    }

    render () {
        let {editing, title, place, years} = this.state
        if (!editing) {
            return (
                <li id='secondaryStudies'>
                    <span className='highlight1'> {title} - </span>
                    <span className='highlight2'> {place} - </span>
                    <span> {years} </span>
                    <FontAwesomeIcon icon="pencil-alt" className='edit' onClick={() => this.setState({ editing: true })}/>
                </li>
                
            )
            
        } else {
            return (
                <div id='work'>
                    <form onSubmit={this.submitHandler} className='form'>
                        <input type='text' name='title' value={title} onChange={this.onChangeHandler} />
                        <input type='text' name='place' value={place} onChange={this.onChangeHandler} />
                        <input type='text' name='years' value={years} onChange={this.onChangeHandler} />
                        <button type='submit'>Aceptar</button>
                    </form>
                </div>
            )
        }
        
    }
    
}

export default SecondaryStudies