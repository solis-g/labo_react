import React from 'react';
import Student from './Student';


class StudentForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { carnet: '', horario: '', schedule: '' };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // Manejador del evento de submit, ejecuta la funcion saveStudent
    // Pasada por props
    handleSubmit(event) {
        event.preventDefault();
        // Se necesitan validaciones de entrada
        let student = new Student(this.state.carnet, this.state.horario, this.state.schedule);
        this.props.onSave(student);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const horario = target.horario;

        this.setState({
            [horario]: value
        });
    }

    // Label + input
    // TODO: Necesita se modificado para funcionar con todos los tipos de entrada
    renderInput(horario,placeholder, type = "text") {
        return (
            /* Se un fragmento React, para establecer que este código se hijo directo en el resultado */
            <fieldset>
                <label htmlFor={horario}>{horario}</label>
                <input
                    type={type}
                    horario={horario} id={horario}
                    value={this.state[horario]}
                    placeholder= {placeholder}
                    onChange={this.handleInputChange}/>
            </fieldset>
        );
    }

    render() {
        return (
            <form id="contact" action="" onSubmit={this.handleSubmit}>
                <h3>Student Form</h3>
                {this.renderInput("ingrese el carnet: ","")}
                {this.renderInput("horario: ","")}
                {this.renderInput("schedule: ","")}
                <fieldset>
                    <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
                </fieldset>
            </form>
        );
    }
}
export default StudentForm;