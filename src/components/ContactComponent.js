import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem, Button, Label, Col, Row } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Link } from 'react-router-dom';

class Contact extends Component {

    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    

    validate(firstname,lastname,telnum,email){
        const errors ={
            firstname : "",
            lastname : "",
            telnum : "",
            email : ""
        }
        if (this.state.touched.firstname &&  firstname.length < 3)
            errors.firstname = "Atleat 3 characters.";
        else if (this.state.touched.firstname &&  firstname.length >10)
            errors.firstname = "Max 10 characters.";
        
        if (this.state.touched.lastname &&  lastname.length < 3)
            errors.lastname = "Atleat 3 characters.";
        else if (this.state.touched.lastname &&  lastname.length >10)
            errors.lastname = "Max 10 characters.";

        const regex =/^\d+$/;
        if (this.state.touched.telnum && !regex.test(telnum))
            errors.telnum = "Only numbers";
        else if (this.state.touched.telnum && telnum.length  !== 10 )
            errors.telnum = "Number should have 10 digits";
            
        if (this.state.touched.email && email.split("").filter(x => x === '@').length !== 1)
            errors.email = "Email has invalid format";
        
        return errors;
    }

    

    handleSubmit(values) {
        console.log("Current State is : " + JSON.stringify(values));
        alert("Current State is : " + JSON.stringify(values));
    }

    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                            <BreadcrumbItem active>Contact Us</BreadcrumbItem>
                        </Breadcrumb>
                    </div>
                    <div className="col-12">
                        <h3>Contact Us</h3>
                        <hr />
                    </div>
                </div>
                <div className="row row-content">
                    <div className="col-12">
                    <h3>Location Information</h3>
                    </div>
                    <div className="col-12 col-sm-4 offset-sm-1">
                            <h5>Our Address</h5>
                            <address>
                            121, Clear Water Bay Road<br />
                            Clear Water Bay, Kowloon<br />
                            HONG KONG<br />
                            <i className="fa fa-phone"></i>: +852 1234 5678<br />
                            <i className="fa fa-fax"></i>: +852 8765 4321<br />
                            <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
                            </address>
                    </div>
                    <div className="col-12 col-sm-6 offset-sm-1">
                        <h5>Map of our Location</h5>
                    </div>
                    <div className="col-12 col-sm-11 offset-sm-1">
                        <div className="btn-group" role="group">
                            <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                            <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                            <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                        </div>
                    </div>
                </div>
                <div className="row row-content">
                    <div className="col-12">
                        <h3>Send us your Feedback</h3>
                    </div>
                    <div className="col-12 col-md-9">
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Label htmlfor="firstname" md={2}>First Name</Label>
                                <Col md={10}>
                                    <Control.text model=".firstname" className="form-control" id="firstname" name="firstname" placeholder="First Name"  />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlfor="lastname" md={2}>Last Name</Label>
                                <Col md={10}>
                                    <Control.text model=".lastname" className="form-control" id="lastname" name="lastname" placeholder="Last Name" />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlfor="telnum" md={2}>Tel. Number</Label>
                                <Col md={10}>
                                    <Control.text model=".telnum" className="form-control" id="telnum" name="telnum" placeholder="Tel. Number" />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlfor="email" md={2}>Email</Label>
                                <Col md={10}>
                                    <Control.text model=".email" className="form-control" id="email" name="email" placeholder="Email" />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{size : 6 , offset : 2}}>
                                    <div className="form-check pl-0">
                                        <Label check>
                                            <Control.checkbox model=".agree" className="form-check d-inline-block" name="agree" />{" "}
                                            <strong>May we contact you?</strong>
                                        </Label>
                                    </div>
                                </Col>
                                <Col md={{size : 3 , offset : 1}}>
                                    <Control.select model=".contactType" className="form-control" name="contactType" >
                                        <option>Tel.</option>
                                        <option>Email</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlfor="message" md={2}>Your Feedback</Label>
                                <Col md={10}>
                                    <Control.textarea model=".message" className="form-control" id="message" name="message"  rows={12} />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{size: 10, offset: 2}}>
                                    <Button type="submit" color="primary">
                                        Sent Feedback
                                    </Button>
                                </Col>
                            </Row>
                        </LocalForm>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;