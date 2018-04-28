import React, { Component } from "react";
import { BrowserRouter, Route } from 'react-router-dom';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import MatToolbar from './MatToolbar';
import MatTable from './MatTable';
import SelectField from "material-ui/SelectField";
import MenuItem from "material-ui/MenuItem";
import TextField from "material-ui/TextField";
import orderBy from "lodash/orderBy";
import Details from './components/Details/Details';

class App extends Component {
    state = {
        data: [
            {
                "first_name": "Paul",
                "last_name": "Adam",
                "email": "paul.adam@gmail.com",
                "phone": "9821153547",
                "dob": 271708200,
                "active": true
            },
            {
                "first_name": "Greg",
                "last_name": "William",
                "email": "wil.greg@yahoo.com",
                "phone": "9121133547",
                "dob": 36087300,
                "active": false
            },
            {
                "first_name": "Charles",
                "last_name": "Fernandes",
                "email": "charles.f@rediffmail.com",
                "phone": "9221133547",
                "dob": 346357800,
                "active": true
            }
        ],
        query: "",
        columnToQuery: "name"
    };

    render() {
        const lowerCaseQuery = this.state.query.toLowerCase();

        return (
            
            <BrowserRouter>
          <div>
            <Route exact={true} path='/' render={() => (
                <MuiThemeProvider>
                <div>
                    <MatToolbar />
                    <div style={{ display: "flex" }}>
                        <div style={{ display: "flex", margin: "auto" }}>
                            <TextField
                                floatingLabelText="Search"
                                value={this.state.query}
                                onChange={e => this.setState({ query: e.target.value })}
                                floatingLabelFixed
                            />
                            <SelectField
                                style={{ marginLeft: "1em" }}
                                floatingLabelText="Column to search in"
                                value={this.state.columnToQuery}
                                onChange={(event, index, value) =>
                                    this.setState({ columnToQuery: value })
                                }
                            >
                                <MenuItem value="email" primaryText="Email ID" />
                            </SelectField>
                        </div>
                    </div>
                    <MatTable
                        headers={[
                            {
                                name: "Name",
                                prop: "name"
                            },
                            {
                                name: "Date Of Birth",
                                prop: "dob"
                            },
                            {
                                name: "Email ID",
                                prop: "email"
                            },
                            {
                                name: "Age",
                                prop: "age"
                            },
                            {
                                name: "Mobile Number",
                                prop: "mobile"
                            },
                            {
                                name: "Active",
                                prop: "active"
                            },
                            {
                                name: "Action",
                                prop: "action"
                            }
                        ]}
                        data={orderBy(
                            this.state.query
                                ? this.state.data.filter(x =>
                                    x[this.state.columnToQuery]
                                        .toLowerCase()
                                        .includes(lowerCaseQuery)
                                )
                                : this.state.data
                        )}
                    />
                </div>
                
            </MuiThemeProvider>
            )} />
            <Route exact={true} path='/details' render={() => (
              <div className="App3">
                <Details name={"Max"}/>
              </div>
            )} />
           
          </div>
        </BrowserRouter>
        );

    }

}

export default App;