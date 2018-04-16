import React, { Component } from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import {Segment,Header,Icon} from 'semantic-ui-react';
import './css/App.css';
/*users*/
import Admin from './components/Admin';
import Employee from './components/Employee';
import Guest from './components/Guest';
/*add*/
import StudentForm from './components/student_add';
import Intern from './components/intern_add';
import OjtCompany from './components/ojt_add';
import Home from './components/Home';
/*delete*/
import StudentDelete from './components/student_delete';
import InternDelete from './components/intern_delete';
import OjtDelete from './components/ojt_delete';
/*search*/
import StudentSearch from './components/student_search';
import InternSearch from './components/intern_search';
import OjtSearch from './components/ojt_search';
/*update*/
import StudentUpdate from './components/student_update';
import InternUpdate from './components/intern_update';
import OjtUpdate from './components/ojt_update';
import ConstantUpdate from './components/constant_update';
/*view*/
import ViewAll from './components/view_all';
import ViewStudent from './components/view_student';
import ViewTwo from './components/view_two';
import ViewCompany from './components/view_company';
import ViewHandled from './components/view_handled';
import ViewCandidates from './components/view_candidates';
import ViewAudit from './components/view_audit';
import ViewIntern from './components/view_intern';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Segment inverted>
        <div className="App-header">
           <Header as='h2' icon textAlign='center'inverted>
            <Icon name='database' circular inverted/>
            <Header.Content>
              OJT Tracking Information System
            </Header.Content>
          </Header>
        </div>
          <br/>
          <Router>
          <div>
            <Route exact={true} path="/" component={Home}/>
            <Route exact={true} path="/admin" component={Admin}/>
            <Route exact={true} path="/employee" component={Employee}/>
            <Route exact={true} path="/guest" component={Guest}/>

            <Route exact={true} path="/student-add" component={StudentForm}/>
            <Route exact={true} path="/intern-add" component={Intern}/>
            <Route exact={true} path="/ojt-add" component={OjtCompany}/>

            <Route exact={true} path="/student-delete" component={StudentDelete}/>
            <Route exact={true} path="/intern-delete" component={InternDelete}/>
            <Route exact={true} path="/ojt-delete" component={OjtDelete}/>

            <Route exact={true} path="/student-search" component={StudentSearch}/>
            <Route exact={true} path="/intern-search" component={InternSearch}/>
            <Route exact={true} path="/ojt-search" component={OjtSearch}/>

            <Route exact={true} path="/student-update" component={StudentUpdate}/>
            <Route exact={true} path="/intern-update" component={InternUpdate}/>
            <Route exact={true} path="/ojt-update" component={OjtUpdate}/>
            <Route exact={true} path="/constant-update" component={ConstantUpdate}/>

            <Route exact={true} path="/view-all" component={ViewAll}/>
            <Route exact={true} path="/view-student" component={ViewStudent}/>
            <Route exact={true} path="/view-two" component={ViewTwo}/>
            <Route exact={true} path="/view-company" component={ViewCompany}/>
            <Route exact={true} path="/view-ojthandled" component={ViewHandled}/>
            <Route exact={true} path="/view-candidates" component={ViewCandidates}/>
            <Route exact={true} path="/view-intern" component={ViewIntern}/>
            <Route exact={true} path="/view-audit" component={ViewAudit}/>
          </div>
          </Router>
          <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
          <br/><br/><br/><br/>
          </Segment>
      </div>
    );
  }
}

export default App;
