import React, { Fragment } from 'react';
import { Button } from 'react-bootstrap';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';
import Truncate from 'react-truncate';

//Overview Card for each job filtered in Jobs.JS
function JobItem({ job }) {
    return (
        <Fragment>
            {/*displaying the Job as Overview Card for list*/}
            <div className="card border-primary mb-3">
                {/*Card Header*/}
                <div className="card-header">
                    <div className="float-left">
                        {/*Company Name*/}
                        <h5><small className="text-muted">Company: </small>{job.company.name}</h5>
                        {/*job's location if provided*/}
                        {job.locationNames ?
                            <h6><small className="text-muted">City: </small>{job.locationNames}</h6>
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
                    {/*button for full details*/}
                    <div className="float-right">
                        <Link className="btn btn-outline-secondary float-right" to={{ pathname: `/job/${job.id}`, state: { job } }} >Details</Link>
                    </div>
                </div>
                {/*Card Body*/}
                <div className="card-body">
                    {/*Title of Job*/}
                    <h4 className="card-title"><small className="text-muted">Job: </small>{job.title}</h4>
                    {/*Type of Job*/}
                    <h5 className="card-title"><small className="text-muted">Type: </small>{job.commitment.title}</h5>
                    <hr />
                    {/*Job's Description 2 lines*/}
                    <h6 className="card-subtitle mb-2 text-muted">Overview:</h6>
                    <p className="card-text">
                        <Truncate lines={1}>{job.description}</Truncate>
                    </p>
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
        </Fragment >
    )
}

export default JobItem