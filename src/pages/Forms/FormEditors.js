import React, { Component } from "react";
import { Form, Card, CardBody, Col, Row, CardTitle, CardSubtitle, Container } from "reactstrap";

// Form Editor
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

//Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';

class FormEditors extends Component {
  constructor(props) {
    super(props);
    this.state = {
      breadcrumbItems: [
        { title: "Forms", link: "#" },
        { title: "Form Editors", link: "#" },
      ],
    }
  }

  render() {
    return (
      <React.Fragment>
        
          <Container>

            {/* <Breadcrumbs title="Form Editors" breadcrumbItems={this.state.breadcrumbItems} /> */}

            <Row>
              <Col>
                <Card>
                  <CardBody>
                    <CardTitle>Announce something to your class</CardTitle>
                    

                    <Form method="post">
                      <Editor
                        toolbarClassName="toolbarClassName"
                        wrapperClassName="wrapperClassName"
                        editorClassName="editorClassName"
                      />
                    </Form>

                  </CardBody>
                </Card>
              </Col>
            </Row>

          </Container>
        
      </React.Fragment>
    );
  }
}

export default FormEditors;
