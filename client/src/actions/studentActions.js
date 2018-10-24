import { ADD_STUDENT, SHOW_STUDENTS } from './types';
export const addStudent = (newStudent) => dispatch => {

    console.log("add")
    fetch('api/students/add', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(newStudent)

    }).then(res => res.json())
        .then(student => dispatch({
            type: ADD_STUDENT,
            payload: student
        })
        );
};
export const showStudents = () => dispatch => {

    fetch('api/students')
        .then(res => res.json())
        .then(students => dispatch({
            type: SHOW_STUDENTS,
            payload: students
        })
        );
};