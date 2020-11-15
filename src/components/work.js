import '../general.scss'
import React, { Component } from 'react'
import {onChangeHandler, submitHandler, hover} from './helper'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



class Work extends Component {

    constructor(props) {
        super(props)
        this.state = {
            editing: false,
            title: 'Puesto que ocupaste',
            place: 'Empresa y lugar',
            years: 'Fecha inicio - Fecha fin',
            description: 'Descripción del puesto y responsabilidades. En lugar de listar tareas, explica brevemente ¿Que conseguiste en este puesto?, ¿Como aplicaste tus conocimientos para el beneficio de la empresa?',
            
        }

        this.onChangeHandler = onChangeHandler.bind(this)
        this.submitHandler = submitHandler.bind(this)
    }

    render () {
        let {editing, title, place, years, description} = this.state
        if (!editing) {
            return (
                <div id='work' >
                    <div>
                        <nav className='highlight1'>{title}</nav><nav>{place}</nav>
                    </div>
                    <div className='highlight2'>
                        {years}
                    </div>
                    <div>
                        {description}
                        <FontAwesomeIcon icon="pencil-alt" className='edit' onClick={() => this.setState({ editing: true })}/>
                    </div>
                </div>
            )
        }
        else {
            return (
                <div id='work'>
                    <form onSubmit={this.submitHandler} className='form'>
                        <input type='text' name='title' value={title} onChange={this.onChangeHandler} />
                        <input type='text' name='place' value={place} onChange={this.onChangeHandler} />
                        <input type='text' name='years' value={years} onChange={this.onChangeHandler} />
                        <input type='text' name='description' value={description} onChange={this.onChangeHandler} />            
                        <button type='submit'>Aceptar</button>
                    </form>
                </div>
            )
        }
    }
}

export default Work