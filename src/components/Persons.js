import React from "react";
import { Card } from "semantic-ui-react";
import { Header, Modal } from "semantic-ui-react";

import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";


const Persons = ({
  info = {},
  services = {},
  color = "white",
  classes = {},
  cols = {},
}) => {
  cols = {
    xs: 12,
    sm: 12,
    md: 6,
    lg: 4,
    ...cols,
  };

  return (
    <>
      <div style={{ backgroundColor: color }} className={`${classes.maindiv}`}>
        <div className={`${classes.topcontain} `}>
          <h3 className={`${classes.title} `}>
            <span className={`${classes.span} `}></span>
            {info.title}
            <span className={`${classes.span} `}></span>
          </h3>

          <h2 className={`${classes.subtitle} omg-subtitle`}>
            {info.subtitle}
          </h2>
          <p
            style={{ paddingBottom: `1.75em` }}
            className={`${classes.parag}  text-center`}
          >
            {info.text}
          </p>
          <Container classname={`${classes.container}`}>
            <h1 className={`${classes.mainheader} `}>{`${info.header}`}</h1>
            <Row className={`${classes.row}`}>
              {services.map((service) => (
                <Col className={`${classes.col}`}>
                  <Modal
                    closeIcon
                    trigger={
                      <Link to="#" className={`${classes.link} `}>
                        <Card className={`${classes.card} `}>
                          <Card.Content
                            className={`${classes.cardcontent} `}
                            extra
                          >
                            {service.sicon}
                            <h2 className={`${classes.cardheader} `}>
                              {service.title}
                            </h2>
                          </Card.Content>
                        </Card>
                      </Link>
                    }
                  >
                    <Header icon={service.modicon} content={service.modtitle} />

                    <Modal.Content className={`${classes.modalcontent}`}>
                      {service.modinside}
                    </Modal.Content>
                    <Modal.Actions>
                      {/*    <Button color="gray">
                    <Icon name="checkmark" color="gray" />
                  </Button> */}
                    </Modal.Actions>
                  </Modal>
                </Col>
              ))}
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
};
export default Persons;
