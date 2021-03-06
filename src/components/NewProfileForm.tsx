import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const inputParam = (props) => (
    <TextField
        name={props.name}
        hintText={props.description}
        floatingLabelText={props.description}
        type={props.type}
        style={{
            width: '25%'
        }}
        {...props.input}
        {...props}
    />
);

class NewProfileForm extends React.Component {

    render() {
        const { handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit}>
                {
                    this.props.params.map(function(param) {
                        return (
                            <div>
                                <Field component={inputParam} {...param} />
                            </div>
                        )
                    })
                }

                <div>
                    <RaisedButton type="submit" label="submit" primary={true} />
                </div>
            </form>
        );
    }
}

export default NewProfileForm = reduxForm({
    form: 'newProfile'
})(NewProfileForm);