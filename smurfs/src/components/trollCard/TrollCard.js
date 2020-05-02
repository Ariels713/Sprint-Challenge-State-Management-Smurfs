import React, { useEffect } from "react";
import { Card, Icon, Image, Dimmer, Loader } from "semantic-ui-react";
import { connect } from "react-redux";
import { trollCardActions } from "../../store/actions/trollCardActions";
import { fetchPexelImage } from "../../store/actions/pexelAction"

function TrollCard(props) {
  useEffect(() => {
    props.trollCardActions()
  }, []);

  useEffect(() => {
    props.fetchPexelImage()
  }, [])

  return (
    <>
    {
      props.isImageLoading ? (
        <Dimmer active inverted>
          <Loader>Loading...</Loader>
        </Dimmer>
      ) : (
        <Card style={{margin:"5% 5%"}}>
          <Image src={props.trollImage} wrapped ui={false} />
          <Card.Content>
      <Card.Header>{props.trollName}</Card.Header>
      <Card.Meta>I am {props.trollAge} years old!</Card.Meta>
            <Card.Description>
              Daniel is a comedian living in Nashville.
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name="gem" />
              I'm {props.trollHeight} tall!!!
            </a>
          </Card.Content>
        </Card>

      )
    }
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    
    trollName: state.trollCardReducer.trollName,
    trollAge: state.trollCardReducer.trollAge,
    trollHeight: state.trollCardReducer.trollHeight,
    isLoading: state.trollCardReducer.isLoading,
    isImageLoading:state.pexelsReducer.isImageLoading,
    trollImage: state.pexelsReducer.trollImage
  };
};



export default connect(mapStateToProps, { trollCardActions, fetchPexelImage })(TrollCard);
