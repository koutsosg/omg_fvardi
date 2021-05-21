import React from "react";
import { Card } from "semantic-ui-react";

import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
export const Linktopage = ({ services = {}, classes = {}, info }) => {
  return (
    <>
      <Container classname={`${classes.container}`}>
        <h1 className={`${classes.mainheader} `}>{`${info.header}`}</h1>
        <Row className={`${classes.row}`}>
          {services.map((service) => (
            <Col className={`${classes.col}`}>
              <Link to={service.to} className={`${classes.link} `}>
                <Card className={`${classes.card} `}>
                  <Card.Content className={`${classes.cardcontent} `} extra>
                    {service.sicon}
                    <h2 className={`${classes.cardheader} `}>
                      {service.title}
                    </h2>
                  </Card.Content>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};
