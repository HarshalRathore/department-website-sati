import React, { Component } from 'react';
import { Card, CardBody, Col, Table } from "reactstrap";

class DueDates extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menu: false,
        }
    }

    render() {
        return (
            <React.Fragment>
                <Col>
                    <Card>
                        <CardBody>
                            

                            {/* <h4 className="card-title mb-3">Schedule</h4> */}

                            <div>
                                <div className="text-center">
                                    <p className="mb-2">Upcoming</p>
                                    {/* <h4>4</h4> */}
                                </div>

                                <div className="table-responsive mt-4">
                                    <Table hover className=" mb-0 table-centered table-nowrap">
                                        <tbody>
                                            <tr>
                                                <td style={{ width: "60px" }}>
                                                    <div className="avatar-xs">
                                                        <div className="avatar-title rounded-circle bg-light">
                                                        <h5 className="font-size-14 mb-0">Due</h5>

                                                        </div>
                                                    </div>
                                                </td>

                                                <td>
                                                    <h5 className="font-size-14 mb-0">Assignment 1</h5>
                                                </td>
                                                <td><div id="spak-chart1"></div></td>
                                                <td>
                                                    <p className="text-muted mb-0">14 Jan</p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style={{ width: "60px" }}>
                                                    <div className="avatar-xs">
                                                        <div className="avatar-title rounded-circle bg-light">
                                                        <h5 className="font-size-14 mb-0">Due</h5>

                                                        </div>
                                                    </div>
                                                </td>

                                                <td>
                                                    <h5 className="font-size-14 mb-0">Assignment 2</h5>
                                                </td>
                                                <td><div id="spak-chart1"></div></td>
                                                <td>
                                                    <p className="text-muted mb-0">15 Jan</p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style={{ width: "60px" }}>
                                                    <div className="avatar-xs">
                                                        <div className="avatar-title rounded-circle bg-light">
                                                        <h5 className="font-size-14 mb-0">Due</h5>

                                                        </div>
                                                    </div>
                                                </td>

                                                <td>
                                                    <h5 className="font-size-14 mb-0">Assignment-3</h5>
                                                </td>
                                                <td><div id="spak-chart1"></div></td>
                                                <td>
                                                    <p className="text-muted mb-0">16Jan</p>
                                                </td>
                                            </tr>
                                            
                                            <tr>
                                                <td style={{ width: "60px" }}>
                                                    <div className="avatar-xs">
                                                        <div className="avatar-title rounded-circle bg-light">
                                                        <h5 className="font-size-14 mb-0">Due</h5>

                                                        </div>
                                                    </div>
                                                </td>

                                                <td>
                                                    <h5 className="font-size-14 mb-0">Assignment-4</h5>
                                                </td>
                                                <td><div id="spak-chart1"></div></td>
                                                <td>
                                                    <p className="text-muted mb-0">20Feb</p>
                                                </td>
                                            </tr>
                                            
                                        </tbody>
                                    </Table>
                                </div>

                                
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            </React.Fragment>
        );
    }
}

export default DueDates;