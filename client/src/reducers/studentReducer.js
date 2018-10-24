import { ADD_STUDENT, SHOW_STUDENTS } from '../actions/types';
const intialState = {
    students: [],
    student: {}
}
export default function (state = intialState, action) {
    switch (action.type) {
        case ADD_STUDENT:
            return {
                ...state,
                student: action.payload
            }
        case SHOW_STUDENTS:
            return {
                ...state,
                students: action.payload
            }

        default:
            return state;
    }

}