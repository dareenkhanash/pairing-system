import React, { Component } from 'react'
import StudentGrid from './StudentGrid';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addStudent } from '../actions/studentActions';
import axios from 'axios';

class Student extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: null,
            level: null
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });

    }
    onSubmit(e) {
        e.preventDefault();
        console.log(this.state.name)
        const newStudent = {
            name: this.state.name,
            level: this.state.level
        }
        this.props.addStudent(newStudent);
    }
    render() {
        return (
            <div>
                <h1>Student</h1>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <input
                            type="text"
                            name="name"
                            className="form-control form-control-sm"
                            placeholder="Full Name"
                            value={this.state.name}
                            onChange={this.onChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="number"
                            name="level"
                            className="form-control form-control-sm"
                            placeholder="Level(1-5)"
                            value={this.state.level}
                            onChange={this.onChange}
                            required
                        />
                    </div>
                    <button type="submit" class="btn btn-primary">Add</button>
                </form>
                <div>
                    <div class="row">
                        <div class="col-sm-6 title">
                            Name
                        </div>
                        <div class="col-sm-6 title">
                            Levels
                        </div>
                    </div>
                    <StudentGrid />

                </div>
            </div>
        )
    }
}

Student.propTypes = {
    addStudent: PropTypes.func.isRequired
}

export default connect(null, { addStudent })(Student);
