import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as courseActions from '../../actions/courseActions';

class CoursesPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            course: { title: "" }
        };

        this.onTitleChange = this.onTitleChange.bind(this);
        this.onClickSave = this.onClickSave.bind(this);
    }

    onTitleChange(e) {
        const course = this.state.course;
        course.title = e.target.value;
        this.setState({ course });
    }

    onClickSave(e) {
        e.preventDefault();
        this.props.dispatch(courseActions.createCourse(this.state.course));
    }


    render() {
        return (
            <div>
                <h1>Courses</h1>
                <h2>Add Course</h2>
                <input type="text"
                    onChange={this.onTitleChange}
                    value={this.state.course.title}
                />
                <input type="submit"
                    value="save"
                    onClick={this.onClickSave}
                />
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        courses: state.courses
    };
};

// const mapDispatchToProps = (dispatch) => {
// return {
//     bindActionCreators()
// }
// }

export default connect(mapStateToProps)(CoursesPage);


