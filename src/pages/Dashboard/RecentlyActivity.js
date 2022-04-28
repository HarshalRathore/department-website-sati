import React, { Component } from 'react';
import { Col, Row, Card, CardBody, CardTitle, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, CardSubtitle, CardImg, CardText, CardHeader, CardImgOverlay, CardFooter, CardColumns, Container, CardGroup } from "reactstrap";

//Simple bar
import SimpleBar from "simplebar-react";

class RecentlyActivity extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menu: false,
        }
    }

    render() {
        return (
            <React.Fragment>
                <Col lg={12}>
                    <Card>
                        <CardBody>
                            <Dropdown className="float-end" isOpen={this.state.menu} toggle={() => this.setState({ menu: !this.state.menu })}>
                                <DropdownToggle tag="i" className="darrow-none card-drop" aria-expanded="false">
                                    <i className="mdi mdi-dots-vertical"></i>
                                </DropdownToggle>
                                <DropdownMenu className="dropdown-menu-end">

                                    <DropdownItem href="">Sales Report</DropdownItem>

                                    <DropdownItem href="">Export Report</DropdownItem>

                                    <DropdownItem href="">Profit</DropdownItem>

                                    <DropdownItem href="">Action</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>

                            <h4 className="card-title mb-4">Courses</h4>

                            <SimpleBar style={{ maxHeight: "330px" }}>
                                <ul className="list-unstyled ">
                                <Row>
                                    <Col lg={6}>
                                    <li className="activity-list">
                                        <Card color="dark" className="text-light">
                                            <CardBody>
                                                <CardTitle className="mb-4 text-white"><i className="mdi mdi-alert-circle-outline me-3"></i>Dark Card</CardTitle>
                                                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                            </CardBody>
                                        </Card>
                                    </li>
                                    </Col>
                                    <Col lg={6}>
                                    <li className="activity-list">
                                        <Card color="primary" className="text-white-50">
                                            <CardBody>
                                                <CardTitle className="mb-4 text-white"><i className="mdi mdi-bullseye-arrow me-3"></i> Primary Card</CardTitle>
                                                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                            </CardBody>
                                        </Card>
                                    </li>
                                    </Col>
                                    <li className="activity-list">
                                        <Card color="success" className="text-white-50">
                                            <CardBody>
                                                <CardTitle className="mb-4 text-white"><i className="mdi mdi-check-all me-3"></i> Success Card</CardTitle>
                                                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                            </CardBody>
                                        </Card>
                                    </li>
                                    <li className="activity-list">
                                        <Card color="info" className="text-white-50">
                                            <CardBody>
                                                <CardTitle className="mb-4 text-white"><i className="mdi mdi-alert-circle-outline me-3"></i>Info Card</CardTitle>
                                                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                            </CardBody>
                                        </Card>
                                    </li>
                                    <li className="activity-list">
                                        <Card color="warning" className="text-white-50">
                                            <CardBody>
                                                <CardTitle className="mb-4 text-white"><i className="mdi mdi-alert-outline me-3"></i>Warning Card</CardTitle>
                                                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                            </CardBody>
                                        </Card>
                                    </li>
                                    <li className="activity-list">
                                        <Card color="danger" className="text-white-50">
                                            <CardBody>
                                                <CardTitle className="mb-4 text-white"><i className="mdi mdi-block-helper me-3"></i>Danger Card</CardTitle>
                                                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                            </CardBody>
                                        </Card>
                                    </li>
                                    <li className="activity-list">
                                        <Card color="dark" className="text-light">
                                            <CardBody>
                                                <CardTitle className="mb-4 text-white"><i className="mdi mdi-alert-circle-outline me-3"></i>Dark Card</CardTitle>
                                                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                            </CardBody>
                                        </Card>
                                    </li>
                                    
                                </Row>
                                </ul>
                            </SimpleBar>
                        </CardBody>
                    </Card>
                </Col>
            </React.Fragment>
        );
    }
}

export default RecentlyActivity;