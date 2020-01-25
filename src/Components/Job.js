import React, { Component, Fragment } from 'react';
import { Button } from 'react-bootstrap';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';

//Details Card for a Job when clicked on Details Button in it's Overview card from list of all jobs
export class Job extends Component {
    render() {
        //gets all the data of Job
        let job = this.props.location.state.job;
        return (
            <Fragment>
                {/*Job Detail Card*/}
                <div className="card border-primary mb-3">
                    {/*Card Header*/}
                    <div className="card-header">
                        <div className="float-left">
                            {/*Company Name*/}
                            <h4><small className="text-muted">Company: </small>{job.company.name}</h4>
                            {/*job's location if provided*/}
                            {job.locationNames ?
                                <h5><small className="text-muted">City: </small>{job.locationNames}</h5>
                                :
                                ""
                            }
                            {/*employer's email if provided*/}
                            {job.userEmail ?
                                <Fragment>
                                    <small className="text-muted">CONTACT: </small>
                                    <Button className="badge badge-primary" href={`mailto:${job.userEmail}`} >{job.userEmail}</Button>
                                </Fragment>
                                :
                                ""
                            }
                        </div>
                        {/*button for going back to all jobs' list*/}
                        <div className="float-right">
                            <Link className="btn btn-outline-secondary" to={{ pathname: `/` }} >Back</Link>{' '}
                        </div>
                    </div>
                    {/*Card Body*/}
                    <div className="card-body">
                        {/*Title of Job*/}
                        <h3 className="card-title"><small className="text-muted">Job: </small>{job.title}</h3>
                        {/*Type of Job*/}
                        <h4 className="card-title"><small className="text-muted">Type: </small>{job.commitment.title}</h4>
                        <hr />
                        {/*Job's Full Detailed Description*/}
                        <h6 className="card-subtitle mb-2 ">Details:</h6>
                        <div>
                            {job.description.split("\n").map((i, key) => {
                                return <p key={key}>{i}</p>;
                            })}
                        </div>
                    </div>
                    {/*Card Footer*/}
                    <div className="card-footer text-muted">
                        {/*Check if Job is Published shows with date*/}
                        <div className="float-left">
                            <h6>{job.isPublished ? 'Published on:' : 'Not Published'}</h6>
                            {job.isPublished ? <Moment format="DD-MM-YYYY">{job.postedAt}</Moment> : ''}
                        </div>
                        {/*redirects to the applyUrl given for Applying Job*/}
                        <div className="float-right">
                            <Button variant="outline-primary" href={job.applyUrl} target="_blank">Apply</Button>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Job