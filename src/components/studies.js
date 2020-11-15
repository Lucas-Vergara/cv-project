import '../general.scss'
import React, { Component } from 'react'
import {onChangeHandler, submitHandler} from './helper'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Studies extends Component {

    constructor (props) {
        super(props)
        this.state = {
            editing: false,
            title: 'Titulación que obtuviste',
            years: 'Fecha inicio - Fecha fin',
            place: 'Institución o centro educativo',
        }


        this.onChangeHandler = onChangeHandler.bind(this)
        this.submitHandler = submitHandler.bind(this)
    }



    render () {
        let {editing, title, years, place} = this.state
        if (!editing) {
            return (
                <div id='studies'>
                    <div className='highlight1'>
                        {title}
                    </div>
                    <div className='highlight3'>
                        {years}
                    </div>
                    <div className='highlight2'>
                        {place}
                        <FontAwesomeIcon icon="pencil-alt" className='edit' onClick={() => this.setState({ editing: true })}/>
                    </div>
                </div>
            )
        } else {
            return (
                <div id='studies'>
                    <form onSubmit={this.submitHandler} className='form'>
                        <input type='text' name='title' value={title} onChange={this.onChangeHandler} />
                        <input type='text' name='years' value={years} onChange={this.onChangeHandler} />
                        <input type='text' name='place' value={place} onChange={this.onChangeHandler} />
                        <button type='submit'>Aceptar</button>
                    </form>
                </div>
            )
        }
    }
}

export default Studies