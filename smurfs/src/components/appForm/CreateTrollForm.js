import React, { useState } from "react";
import { Form, Button, Select } from "semantic-ui-react";
import { selectOptions, heightSelectOption } from "./selectFormValues";
import { connect } from 'react-redux' 
import { trollFormResults } from '../../store/actions/formActions'

function CreateTrollForm(props) {
  const [trollName, setTrollName] = useState("");
  const [trollAge, setTrollAge] = useState("");
  const [trollHeight, setTrollHeight] = useState("");
  const [trollDescription, setTrollDescription] = useState("");

  console.log("FROM FROM CREATOR", trollName, trollAge, trollHeight, trollDescription)
  
    const handleSubmit = (event) => {
      event.preventDefault();
      props.trollFormResults({trollName,trollAge,trollHeight})
    //   setTrollName("")
    //   setTrollAge("")
    //   setTrollHeight("")
    };

  return (
    <Form className="form_style" onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Input
          fluid
          label="Troll Name"
          type="text"
          placeholder="What's your Trolls name?"
          name="trollName"
          onChange={(event) => setTrollName(event.target.value)}
          value={trollName.name}
          width={6}
        />
        <Form.Select
          control={Select}
          fluid
          label="How old is your Troll?"
          options={selectOptions}
          placeholder="Age"
          name="trollAge"
          onChange={(event, { value }) => setTrollAge(value)}
          value={trollAge}
          width={5}
        />
        <Form.Select
          control={Select}
          fluid
          label="How tall is your Troll?"
          options={heightSelectOption}
          placeholder="Height"
          name="trollHeight"
          onChange={(event, { value }) => setTrollHeight(value)}
          value={trollHeight}
          width={5}
        />
      </Form.Group>
      <Form.Group>
        <Form.TextArea
            width={16}
            label="Tell About Your Troll!"
            placeholder="Description"
            name="trollDescription"
            onChange={(event) => setTrollDescription(event.target.value)}
            value={trollDescription}
        />
      </Form.Group>
      <Button type="submit" color="yellow">
        Troll Creator!
      </Button>
    </Form>
  );
}

const mapPropstoState = (state) => {
    return {
        name: state.name,
        age: state.age,
        height: state.height,
    }
}

export default connect(mapPropstoState,{trollFormResults})(CreateTrollForm);
