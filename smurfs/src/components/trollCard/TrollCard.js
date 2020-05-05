import React, { useState, useEffect } from "react";
import Axios from "axios";
import {
  Card,
  Icon,
  Image,
  Dimmer,
  Loader,
  Button,
  Container,
} from "semantic-ui-react";
import { connect } from "react-redux";
import { trollCardActions } from "../../store/actions/trollCardActions";
import { fetchPexelImage } from "../../store/actions/pexelAction";
import { deteteTroll } from "../../store/actions/deleteAction"
import { trollsPostAction } from '../../store/actions/trollPostAction'

function TrollCard(props) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    props.trollCardActions();
  }, []);

  useEffect(() => {
    props.fetchPexelImage();
  }, []);

  // useEffect(() => {
  //   props.deteteTroll()
  // }, [])

  useEffect(() => {
    Axios.get("http://localhost:3333/smurfs")
      // .then(res =>  console.log("%c FORM TROLLCARD", "color:cornflowerblue", res.data))
      .then((res) => {
        setData(res.data);
      })
      .then(setIsLoading(false))
      .catch((err) => console.error(err));
  }, [props.name]);

  //WE need to make an axios call here in order to get Data from server, render eard.

  return (
    <>
      <Container className="card_container">
        {props.isImageLoading && isLoading ? (
          <Dimmer active inverted>
            <Loader>Loading...</Loader>
          </Dimmer>
        ) : (
          data.map((item) => {
            return (
              <Card key={item.id} style={{ margin:"20px 0", width:"200px" } }>
                <Image src={props.trollImage} wrapped ui={false} />
                <Card.Content>
                  <Card.Header>{item.name}</Card.Header>
                  <Card.Meta>I am {item.age} years old!</Card.Meta>
                  <Card.Description>{item.Description}</Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <a>
                    <Icon name="gem" />
                    I'm {item.height} tall!!!
                  </a>
                </Card.Content>
                <Card.Content extra>
                  <Button size="tiny" color="red" onClick={deteteTroll(item.id )}>
                    Delete
                  </Button>
                </Card.Content>
              </Card>
            );
          })
        )}
      </Container>
      
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    name: state.trollCardReducer.name,
    age: state.trollCardReducer.age,
    height: state.trollCardReducer.height,
    isLoading: state.trollCardReducer.isLoading,
    isImageLoading: state.pexelsReducer.isImageLoading,
    trollImage: state.pexelsReducer.trollImage,
  };
};

export default connect(mapStateToProps, { trollCardActions, fetchPexelImage, deteteTroll, trollsPostAction })(
  TrollCard
);
