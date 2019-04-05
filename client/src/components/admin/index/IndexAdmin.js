import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import CandidateManagement from '../candidateManagement/CandidateManagement';
import ExamManagement from '../examManagement/ExamManagement';
import TestManagement from '../testManagement/TestManagement';
import QuestionsBank from '../questionsBank/QuestionsBank';
import AppNavbar from '../../common/navbar/AppNavbar';

class AdminPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        console.log(this.props);
        console.log(this.props.match);
    }

    componentDidMount = () => {
        console.log('mounted');
    }

    render() {
        return (
            <React.Fragment>
                <AppNavbar/>
                <Router>
                    <Switch>
                        <Route exact path="/admin" component={() => (<Redirect to="/admin/candidate_manage" />)}/>      
                        <Route exact path="/admin/candidate_manage" component={CandidateManagement}/>      
                        <Route exact path="/admin/exam_manage" component={ExamManagement}/>      
                        <Route exact path="/admin/test_manage" component={TestManagement}/>      
                        <Route exact path="/admin/questions_bank" component={QuestionsBank}/>    
                    </Switch> 
                </Router>
            </React.Fragment>
        );
    }
}

AdminPage.propTypes = {};

export default AdminPage;
