import React, { Component } from "react";
import { connect } from "react-redux";
import { map, isEmpty, size } from "lodash";
import PropTypes from "prop-types";
import {
  Button,
  Card,
  CardBody,
  Col,
  Container,
  Input,
  InputGroup,
  Row,
  Table,
} from "reactstrap";
import { Link, withRouter } from "react-router-dom";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

//Import Product Images
import { getCartData } from "../../store/actions";

class EcommerceCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productList: [],
      breadcrumbItems: [
        { title: "Ecommerce", link: "#" },
        { title: "Cart", link: "#" },
      ],
    };
  }

  componentDidMount() {
    const {
      cartData: { products },
      onGetCartData,
    } = this.props;
    onGetCartData();
    this.setState({ productList: products });
  }

  componentDidUpdate(prevProps) {
    // const student :{
    // }
    const {
      cartData: { products },
    } = this.props;
    if (
      !isEmpty(products) &&
      size(products) !== size(prevProps.cartData.products)
    ) {
      this.setState({ productList: products });
    }
  }

  removeCartItem = (id) => {
    let productList = this.state.productList;
    const filtered = productList.filter(function (item) {
      return item.id !== id;
    });

    this.setState({ productList: filtered });
  };

  countUP = (id, prev_data_attr) => {
    this.setState({
      productList: this.state.productList.map((p) =>
        p.id === id ? { ...p, data_attr: prev_data_attr + 1 } : p
      ),
    });
  };

  countDown = (id, prev_data_attr) => {
    this.setState({
      productList: this.state.productList.map((p) =>
        p.id === id ? { ...p, data_attr: prev_data_attr - 1 } : p
      ),
    });
  };

  render() {
  
    const { productList } = this.state;

    return (
      <React.Fragment>
        <div className="page-content">
          <Container fluid>
            <Breadcrumbs
              title="Ecommerce"
              breadcrumbItems={this.state.breadcrumbItems}
            />
            <Row>
              <Col lg="12">
                <Card>
                  <CardBody>
                    <div className="table-responsive">
                      <Table className="table align-middle mb-0 table-nowrap">
                        <thead className="bg-light">
                          <tr>
                            <th>Enrollment No.</th>
                            <th>Student Name</th>
                            <th colspan="3">Attendance</th>
                            
                            
                          </tr>
                          <tr>
                            <th></th>
                            <th></th>
                              <th>Today</th>
                              <th>Today</th>
                              <th>Today</th>
                              <th>Today</th>
                              <th>Today</th>
                              <th>Today</th>
                              <th>Today</th>
                          </tr>
                        </thead>
                        <tbody>
                          {map(productList, (product) => (
                            <tr key={product.id}>
                              <td>
                               {product.id}
                              </td>
                              <td>
                                <h5 className="font-size-14 text-truncate">
                                  <Link
                                    to={
                                      "/ecommerce-product-details/" + product.id
                                    }
                                    className="text-dark"
                                  >
                                    {product.name}
                                  </Link>
                                </h5>
                                
                              </td>
                              <td>P</td>
                              <td>A</td>
                              <td>A</td>
                              <td>P</td>
                              <td>L</td>
                              <td>A</td>
                              <td>

                              <div class="btn-group" role="group" aria-label="Basic example">
  <button type="button" class="btn btn-success">P</button>
  <button type="button" class="btn btn-danger">A</button>
  <button type="button" class="btn btn-warning">L</button>
</div>
                                {/* <div
                                  style={{ width: "120px" }}
                                  className="product-cart-touchspin"
                                >
                                  <InputGroup className="bootstrap-touchspin bootstrap-touchspin-injected">
                                    <span className="input-group-btn input-group-prepend">
                                      <Button
                                        color=""
                                        className="bootstrap-touchspin-up"
                                        onClick={() => {
                                          this.countDown(
                                            product.id,
                                            product.data_attr
                                          );
                                        }}
                                      >
                                        -
                                      </Button>
                                    </span>

                                    <Input
                                      type="text"
                                      value={product.data_attr}
                                      name="demo_vertical"
                                      readOnly
                                      className="form-control"
                                    />
                                    <span className="input-group-btn input-group-append">
                                      <Button
                                        color=""
                                        className="bootstrap-touchspin-down"
                                        onClick={() => {
                                          this.countUP(
                                            product.id,
                                            product.data_attr
                                          );
                                        }}
                                      >
                                        +
                                      </Button>
                                    </span>
                                  </InputGroup>
                                </div> */}
                              </td>
                              {/* <td>$ {product.total}</td>
                              <td style={{ width: "90px" }} className="text-center">
                                <Link
                                  to="#"
                                  onClick={() =>
                                    this.removeCartItem(product.id)
                                  }
                                  className="action-icon text-danger"
                                >
                                  {" "}
                                  <i className="mdi mdi-trash-can font-size-18" />
                                </Link>
                              </td> */}
                            </tr>
                          ))}
                          <tr className="bg-light text-end">
                            <th scope="row" colSpan="5">
                            Total Present :
                            </th>

                            <td>23</td>
                          </tr>
                          <tr className="bg-light text-end">
                            <th scope="row" colSpan="5">
                              Absent :
                            </th>

                            <td>10</td>
                          </tr>
                        </tbody>
                      </Table>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </React.Fragment>
    );
  }
}

EcommerceCart.propTypes = {
  cartData: PropTypes.any,
  onGetCartData: PropTypes.func,
};

const mapStateToProps = (state) => ({
  cartData: state.Ecommerce.cartData,
});

const mapDispatchToProps = (dispatch) => ({
  onGetCartData: () => dispatch(getCartData()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(EcommerceCart));
