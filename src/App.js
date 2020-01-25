import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Jobs from './Components/Jobs';
import Job from './Components/Job';
import './App.css';
//Client for GraphQL Job API 
const client = new ApolloClient({
  uri: 'https://api.graphql.jobs/'
})

function App() {
  return (
    //Passing Client to Provider
    <ApolloProvider client={client}>
      {/*Routing Links*/}
      <Router>
        <div className="container">
          <h1 className='display-1 my-3'>JOBS Listing</h1>
          {/*Route to Jobs.Js(List of All Jobs like an Overview)*/}
          <Route exact path="/" component={Jobs} />
          {/*Route to Job.Js(All Details of Single Job) and passing props for all data of Job*/}
          <Route exact path="/Job/:id" render={props => <Job {...props} />} />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
