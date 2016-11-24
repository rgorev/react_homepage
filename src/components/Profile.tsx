import * as React from 'react';
import {Component, PropTypes} from 'react';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {Card, CardHeader, CardText} from 'material-ui/Card';

export class Profile extends Component {
    render() {
        return (
            <div>
                <br/>
                <Card style={{width: '30%'}}>
                    <CardHeader
                        title={this.props.name}
                        actAsExpander={true}
                    />

                    <CardText>
                        Param 1: {this.props.param1}
                    </CardText>
                </Card>
            </div>
        );
    }
}
