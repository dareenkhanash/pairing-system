import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { showStudents } from '../actions/studentActions';

class StudentGrid extends Component {
    componentWillMount() {
        this.props.showStudents();

    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.newStudent) {
            this.props.students.unshift(nextProps.newStudent)
        }
    }
    render() {
        const Students = this.props.students.map(student => (
            <div className="row" key={student.id}>
                <div className="col-sm-6 record">
                    {student.name}
                </div>
                <div className="col-sm-6 record" >
                    {student.level}
                </div>
            </div>
        ));
        return (
            <div>
                {Students}
            </div>
        )
    }
}
StudentGrid.propTypes = {
    showStudents: PropTypes.func.isRequired,
    students: PropTypes.array.isRequired,
    newStudent: PropTypes.object
}
const mapStateToProps = state => ({
    students: state.student.students,
    newStudent: state.student.student
});
//001708 7173995
export default connect(mapStateToProps, { showStudents })(StudentGrid);

