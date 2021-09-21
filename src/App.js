import * as React from 'react';
import Box from '@mui/material/Box';
import { makeStyles } from '@material-ui/styles';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

const useStyles = makeStyles({
  tab:{
    borderRadius: "60px",
    fill: "red"
  },
  paper: {
    margin: "100px",
  }
});

export default function NavTabs() {
  const classes = useStyles();
  return (
    
    <Box>
      <Box m={5}>
        <Typography variant="h5" gutterBottom component="div" fontWeight="bold" align="center">
          Here's What You Can Expect For 1000s<br/>Of Leads. In Seconds. Using AI.
        </Typography>
      </Box>

      <Paper className={classes.paper}>
      <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="m-4 mb-3 d-flex justify-content-between">
        <Tab eventKey="LinkedIn Personalisation" title="LinkedIn Personalisation">
          <Tab.Container id="left-tabs-example" className="w-50 p-3 m-5" defaultActiveKey="first">
            <Row className="w-100 p-3 m-5">
              <Col sm={3}>
                <Nav variant="pills" className="flex-column">
                  <Nav.Item>
                    <Nav.Link eventKey="first">Personalised with linkedIn recent activity</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">Personalised with linkedIn recent recommendation</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third">Personalised with Achievements</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="fourth">Personalised with Bio/Job Description</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col sm={9} mr={10}>
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <Card style={{ maxWidth: '18rem', minWidth: '10px', marginLeft: '70px' }}>
                      <Card.Body>
                        <Card.Title className="mb-2 text-muted">Personalised with linkedIn recent activity</Card.Title>
                        <Card.Text>
                          Some quick example text to build on the card title and make up the bulk of
                          the card's content.
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <Card style={{ maxWidth: '18rem', minWidth: '10px', marginLeft: '70px' }}>
                        <Card.Body>
                          <Card.Title className="mb-2 text-muted">Personalised with linkedIn recent recommendation</Card.Title>
                          <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                          </Card.Text>
                        </Card.Body>
                      </Card>
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    <Card style={{ maxWidth: '18rem', minWidth: '10px', marginLeft: '70px' }}>
                        <Card.Body>
                          <Card.Title className="mb-2 text-muted">Personalised with Achievements</Card.Title>
                          <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                          </Card.Text>
                        </Card.Body>
                      </Card>
                  </Tab.Pane>
                  <Tab.Pane eventKey="fourth">
                    <Card style={{maxWidth: '18rem', minWidth: '10px', marginLeft: '70px' }}>
                        <Card.Body>
                          <Card.Title className="mb-2 text-muted">Personalised with Bio/Job Description</Card.Title>
                          <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                          </Card.Text>
                        </Card.Body>
                      </Card>
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </Tab>
        <Tab eventKey="Personalised Icebreakers" title="Personalised Icebreakers">
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row className="w-100 p-3 m-5">
              <Col sm={3}>
                <Nav variant="pills" className="flex-column">
                  <Nav.Item>
                    <Nav.Link eventKey="first">Personalised with linkedIn recent activity</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">Personalised with linkedIn recent recommendation</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third">Personalised with Achievements</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="fourth">Personalised with Bio/Job Description</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col sm={9}>
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <Card style={{ maxWidth: '18rem', minWidth: '10px', marginLeft: '70px' }}>
                      <Card.Body>
                        <Card.Title className="mb-2 text-muted">Personalised with linkedIn recent activity</Card.Title>
                        <Card.Text>
                          Some quick example text to build on the card title and make up the bulk of
                          the card's content.
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <Card style={{ maxWidth: '18rem', minWidth: '10px', marginLeft: '70px' }}>
                        <Card.Body>
                          <Card.Title className="mb-2 text-muted">Personalised with linkedIn recent recommendation</Card.Title>
                          <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                          </Card.Text>
                        </Card.Body>
                      </Card>
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    <Card style={{ maxWidth: '18rem', minWidth: '10px', marginLeft: '70px' }}>
                        <Card.Body>
                          <Card.Title className="mb-2 text-muted">Personalised with Achievements</Card.Title>
                          <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                          </Card.Text>
                        </Card.Body>
                      </Card>
                  </Tab.Pane>
                  <Tab.Pane eventKey="fourth">
                    <Card style={{ maxWidth: '18rem', minWidth: '10px', marginLeft: '70px' }}>
                        <Card.Body>
                          <Card.Title className="mb-2 text-muted">Personalised with Bio/Job Description</Card.Title>
                          <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                          </Card.Text>
                        </Card.Body>
                      </Card>
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </Tab>
        <Tab eventKey="Backlink Personalization" title="Backlink Personalization">
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row className="w-100 p-3 m-5">
              <Col sm={3}>
                <Nav variant="pills" className="flex-column">
                  <Nav.Item>
                    <Nav.Link eventKey="first">Personalised with linkedIn recent activity</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">Personalised with linkedIn recent recommendation</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third">Personalised with Achievements</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="fourth">Personalised with Bio/Job Description</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col sm={9}>
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <Card style={{ maxWidth: '18rem', minWidth: '10px', marginLeft: '70px' }}>
                      <Card.Body>
                        <Card.Title className="mb-2 text-muted">Personalised with linkedIn recent activity</Card.Title>
                        <Card.Text>
                          Some quick example text to build on the card title and make up the bulk of
                          the card's content.
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <Card style={{ maxWidth: '18rem', minWidth: '10px', marginLeft: '70px' }}>
                        <Card.Body>
                          <Card.Title className="mb-2 text-muted">Personalised with linkedIn recent recommendation</Card.Title>
                          <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                          </Card.Text>
                        </Card.Body>
                      </Card>
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    <Card style={{ maxWidth: '18rem', minWidth: '10px', marginLeft: '70px' }}>
                        <Card.Body>
                          <Card.Title className="mb-2 text-muted">Personalised with Achievements</Card.Title>
                          <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                          </Card.Text>
                        </Card.Body>
                      </Card>
                  </Tab.Pane>
                  <Tab.Pane eventKey="fourth">
                    <Card style={{ maxWidth: '18rem', minWidth: '10px', marginLeft: '70px' }}>
                        <Card.Body>
                          <Card.Title className="mb-2 text-muted">Personalised with Bio/Job Description</Card.Title>
                          <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                          </Card.Text>
                        </Card.Body>
                      </Card>
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </Tab>
        <Tab eventKey="Contextual Pitches" title="Contextual Pitches">
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row className="w-100 p-3 m-5">
              <Col sm={3}>
                <Nav variant="pills" className="flex-column">
                  <Nav.Item>
                    <Nav.Link eventKey="first">Personalised with linkedIn recent activity</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">Personalised with linkedIn recent recommendation</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third">Personalised with Achievements</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="fourth">Personalised with Bio/Job Description</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col sm={9}>
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <Card style={{ maxWidth: '18rem', minWidth: '10px', marginLeft: '70px' }}>
                      <Card.Body>
                        <Card.Title className="mb-2 text-muted">Personalised with linkedIn recent activity</Card.Title>
                        <Card.Text>
                          Some quick example text to build on the card title and make up the bulk of
                          the card's content.
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <Card style={{ maxWidth: '18rem', minWidth: '10px', marginLeft: '70px' }}>
                        <Card.Body>
                          <Card.Title className="mb-2 text-muted">Personalised with linkedIn recent recommendation</Card.Title>
                          <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                          </Card.Text>
                        </Card.Body>
                      </Card>
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    <Card style={{ maxWidth: '18rem', minWidth: '10px', marginLeft: '70px' }}>
                        <Card.Body>
                          <Card.Title className="mb-2 text-muted">Personalised with Achievements</Card.Title>
                          <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                          </Card.Text>
                        </Card.Body>
                      </Card>
                  </Tab.Pane>
                  <Tab.Pane eventKey="fourth">
                    <Card style={{ maxWidth: '18rem', minWidth: '10px', marginLeft: '70px' }}>
                        <Card.Body>
                          <Card.Title className="mb-2 text-muted">Personalised with Bio/Job Description</Card.Title>
                          <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                          </Card.Text>
                        </Card.Body>
                      </Card>
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </Tab>
      </Tabs>
      </Paper>
    </Box>
  );
}
