import React, { useState } from "react";
import { Form, Button, Select } from "semantic-ui-react";
import { selectOptions, heightSelectOption } from "./selectFormValues";
import { connect } from 'react-redux' 
import { trollsPostAction } from '../../store/actions/trollPostAction'

function CreateTrollForm(props) {
  const [name, setname] = useState("");
  const [age, setage] = useState("");
  const [height, setheight] = useState("");
  const [description, setdescription] = useState("");

    const handleSubmit = (event) => {
      event.preventDefault();
      props.trollsPostAction({name,age,height})
    //   setname("")
    //   setage("")
    //   setheight("")
    };

  return (
    <Form className="form_style" onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Input
          fluid
          label="Troll Name"
          type="text"
          placeholder="What's your Trolls name?"
          name="name"
          onChange={(event) => setname(event.target.value)}
          value={name.name}
          width={6}
        />
        <Form.Select
          control={Select}
          fluid
          label="How old is your Troll?"
          options={selectOptions}
          placeholder="Age"
          name="age"
          onChange={(event, { value }) => setage(value)}
          value={age}
          width={5}
        />
        <Form.Select
          control={Select}
          fluid
          label="How tall is your Troll?"
          options={heightSelectOption}
          placeholder="Height"
          name="height"
          onChange={(event, { value }) => setheight(value)}
          value={height}
          width={5}
        />
      </Form.Group>
      <Form.Group>
        <Form.TextArea
            width={16}
            label="Tell About Your Troll!"
            placeholder="Description"
            name="description"
            onChange={(event) => setdescription(event.target.value)}
            value={description}
        />
      </Form.Group>
      {
        props.isSubmitting ? (
          <Button loading type="submit" color="yellow">
          Troll Creator!
        </Button>          
        ) : (
      <Button type="submit" color="yellow">
        Troll Creator!
      </Button>

        )
      }
    </Form>
  );
}

const mapPropstoState = (state) => {
    return {
        name: state.formReducer.name,
        age: state.formReducer.age,
        height: state.formReducer.height,
        description:state.formReducer.description,
        isSubmitting:state.formReducer.isSubmitting
    }
}

export default connect(mapPropstoState,{trollsPostAction})(CreateTrollForm);
