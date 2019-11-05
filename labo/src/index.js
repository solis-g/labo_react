/*
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
*/

import React from 'react';
import ReactDOM from 'react-dom';
import StudentForm from './student/StudentForm';
import StudentsList from './student/StudentsList';

import './index.css';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            students: [],
            err: ''
        }
    }

    saveStudent(student) {
        const students = this.state.students.slice();
        if (!students.find((current) => {
            return current.carnet === student.carnet;
        })) {
            students.push(student);
            this.setState({ students, err: '' });
        } else {
            this.setState({ err: "Imposible realizar la acción, el estudiante ya existe" })
        }

    }

    deleteStudent(carnet) {
        const students = this.state.students.filter(function (ele) {
            return ele.carnet !== carnet;
        });
        this.setState({ students });
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div>{this.state.err}</div>
                    <StudentForm onSave={(student) => {
                        this.saveStudent(student)
                    }} />
                </div>
                <StudentsList students={this.state.students} onDelete={(carnet) => {
                    this.deleteStudent(carnet);
                }} />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
