import React, { Fragment, useState } from 'react'; //useState for Hook
import gql from 'graphql-tag';
import JobItem from './JobItem';
import { useQuery } from '@apollo/react-hooks';

//Query for GraphQL Job API
const JOBS_QUERY = gql`
  {
    jobs {
        id
        title
        isPublished
        postedAt
        company {
            name
        }
        userEmail
        locationNames
        applyUrl
        commitment{
            title
        }
        description
    }
  }
`;



function Jobs() {

    {/*Hook for getting data from searchTerm*/}
    const [searchTerm, setSearchTerm] = useState('');
    {/*Changes Value of searchTerm as user inputs*/}
    const handleChange = event => { 
        setSearchTerm(event.target.value);
    };

    {/*Passing Query and getting data from GraphQL Job API*/}
    const { loading, error, data } = useQuery(JOBS_QUERY);
    //while query is running
    if (loading) return <h5>Loading...</h5>
    //error handling if query fails
    if (error) console.log(error)
    //query successful data is loaded from GraphQL Job API
    return (
        <Fragment>
            {/*Search Box for Filtering*/}
            <input className="form-control mr-sm-2" type="text" placeholder="Job or Company" value={searchTerm} onChange={handleChange} />
            <hr />
            {
                //mapping the data
                data.jobs.map(job => (
                    //Filtering Jobs
                    //if job's title or company's name matches that of searchTerm them it will be passed to JobItem.Js else not
                    (job.title.toUpperCase().indexOf(searchTerm.toUpperCase()) !== -1 || job.company.name.toUpperCase().indexOf(searchTerm.toUpperCase()) !== -1) ?
                    //JobItem is given the data for that job as job array
                    <JobItem key={job.id} job={job}/>
                    : ""
                ))
            }
        </Fragment>
    )
}

export default Jobs
