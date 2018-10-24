import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { showStudents } from '../actions/studentActions';
class Pairing extends Component {
    componentWillMount() {
        this.props.showStudents();

        console.log(this.props.students);
    }

    render() {
        const newPairs = [];
        var len = this.props.students.length;

        console.log(Math.floor((Math.random() * len)))
        if (len > 0) {
            console.log(len);
            for (let i = 0; i < (Math.floor(len / 2)); i++) {
                var exist = false
                var index1 = Math.floor(Math.random() * len);
                var index2 = Math.floor(Math.random() * len);
                var rand1 = this.props.students[index1]._id;
                var rand2 = this.props.students[index2]._id;
                for (let index = 0; index < newPairs.length; index++) {
                    if (newPairs[index].rand1 === rand1 || newPairs[index].rand2 === rand1 ||
                        newPairs[index].rand1 === rand2 || newPairs[index].rand2 === rand2 ||
                        rand1 === rand2) {
                        exist = true;
                    }
                }
                if (exist === false) {
                    var student1 = (this.props.students)[index1].name
                    var student2 = (this.props.students)[index2].name
                    newPairs.push({
                        rand1: rand1, rand2: rand2, student1: student1,
                        student2: student2
                    })
                }
            }
            console.log(newPairs)
        }
        const Pairings = newPairs.map(pair => (
            <div className="row" key={pair.rand1}>
                <div className="col-sm-6 record">
                    {pair.student1}
                </div>
                <div className="col-sm-6 record" >
                    {pair.student2}
                </div>
            </div>
        ));


        return (
            <div>
                {Pairings}
            </div>
        )
    }
}
Pairing.propTypes = {
    showStudents: PropTypes.func.isRequired,
    students: PropTypes.array.isRequired,
}
const mapStateToProps = state => ({
    students: state.student.students
});
//001708 7173995
export default connect(mapStateToProps, { showStudents })(Pairing);

