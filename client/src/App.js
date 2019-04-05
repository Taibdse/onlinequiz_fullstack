import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import $ from 'jquery';

import UserIndex from './components/user/index/UserIndex';
import UserRegister from './components/user/register/UserRegister';
import TestOnline from './components/user/testOnline/TestOnline';
import FinishTest from './components/user/finishTest/FinishTest';
import LoginUser from './components/user/login/LoginUser';
import AdminPage from './components/admin/index/IndexAdmin';
import CandidateManagement from './components/admin/candidateManagement/CandidateManagement';
import ExamManagement from './components/admin/examManagement/ExamManagement';
import TestManagement from './components/admin/testManagement/TestManagement';
import QuestionsBank from './components/admin/questionsBank/QuestionsBank';
import FormQuestion from './components/admin/questionsBank/FormQuestion';

window.jQuery = window.$ = $;

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Route exact path="/user" component={UserIndex}/>          
          <Route exact path="/user/register" component={UserRegister}/>          
          <Route exact path="/user/test_online" component={TestOnline}/>          
          <Route exact path="/user/finish_test" component={FinishTest}/>          
          <Route exact path="/user/login" component={LoginUser}/>      
          
          <Route exact path="/admin" component={() => (<Redirect to="/admin/candidate_manage" />)}/>      
          <Route exact path="/admin/candidate_manage" component={CandidateManagement}/>      
          <Route exact path="/admin/candidate_manage/test_result/:candidate_id" component={CandidateManagement}/>      
          <Route exact path="/admin/exam_manage" component={ExamManagement}/>      
          <Route exact path="/admin/test_manage" component={TestManagement}/>      
          <Route exact path="/admin/questions_bank" component={QuestionsBank}/>    
          <Route exact path="/admin/questions_bank/edit/:questionId" component={FormQuestion}/>    
          <Route exact path="/admin/questions_bank/add" component={FormQuestion}/>    
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
