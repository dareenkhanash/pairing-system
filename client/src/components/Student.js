import React, { Component } from 'react'
import StudentGrid from './StudentGrid';
import axios from 'axios';

class Student extends Component {
    constructor() {
        super();
        this.state = {
            name: null,
            level: null,
            students: []

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
        axios.post('api/students/add', newStudent)
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
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
                        <div class="col-sm-6">
                            Name
                        </div>
                        <div class="col-sm-6">
                            Levels
                        </div>
                    </div>
                    <StudentGrid />

                </div>
            </div>
        )
    }
}

export default Student;
