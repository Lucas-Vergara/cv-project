import '../general.scss'
import React, { Component } from 'react'
import {onChangeHandler, submitHandler} from './helper'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Certificates extends Component {

    constructor(props) {
        super(props)
        this.state = {
            editing: false,
            certificate: 'Certificación',
            entity: 'Entidad',

        }

        this.onChangeHandler = onChangeHandler.bind(this)
        this.submitHandler = submitHandler.bind(this)
    }

    render() {
        let {editing, certificate, entity} = this.state
        if (!editing) {
            return(
                <div id="certificates">
                    <div> {certificate} </div>
                    <div className="highlight1"> {entity} </div>
                    <FontAwesomeIcon icon="pencil-alt" className='edit' onClick={() => this.setState({ editing: true })}/>
                </div>
            )
        } else {
            return(
                <form onSubmit={this.submitHandler} className='form'>
                    <input type='text' name='certificate' value={certificate} onChange={this.onChangeHandler} />
                    <input type='text' name='entity' value={entity} onChange={this.onChangeHandler} />
                    <button type='submit'>Aceptar</button>
                </form>
            )
        }
    }
}

export default Certificates