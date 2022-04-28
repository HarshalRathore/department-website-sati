import React, { Component } from 'react'
import { CardBody, Card, CardText, CardTitle, Row, Col, CardImg, Container } from 'reactstrap'
import FormEditors from '../Forms/FormEditors';
import img2 from "../../assets/images/small/img-2.jpg";
import img3 from "../../assets/images/small/img-3.jpg";
import DueDates from "./DueDates";
// import SimpleBar from 'simplebar-react';
import {



    Button,
    ButtonToggle,
    ButtonGroup,
    ButtonToolbar,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    ButtonDropdown,
} from "reactstrap";
import UiButtons from '../Ui/UiButtons';
import RecentlyActivity from '../Dashboard/RecentlyActivity';
export default function DetailedCourse() {
    return (
        <React.Fragment>
            <div className="page-content">
                <Container>

                    <Row>
                        <Col lg={3}>
                            <Card>
                                <Row className="no-gutters align-items-center">
                                    <Col md={4}>
                                        <CardImg className="avatar-md rounded-circle mx-4" src={img2} alt="Skote" />
                                    </Col>
                                    <Col md={8}>

                                        <CardBody>
                                            <CardTitle>Machine Learning</CardTitle>
                                            <Button
                                                color="primary"
                                                className="btn btn-primary btn-lg btn-block "
                                            >
                                                Take Attendance
                                            </Button>
                                            {/* <CardText><small className="text-muted">Last updated 3 mins ago</small></CardText> */}
                                        </CardBody>

                                    </Col>
                                </Row>
                            </Card>
                            <DueDates />
                        </Col>
                        <Col xl={9}>
                            <Row>

                                <FormEditors />
                            </Row>

                            <Row>

                            </Row>
                            <RecentlyActivity />
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>


    )
}