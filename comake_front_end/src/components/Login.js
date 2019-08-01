import React, {useState} from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import axios from 'axios';
import Logo from '../images/logo.png'


function Login(props) {
  const [inputData, setInputData] = useState({email: "", password:""})

  const handleInput = e => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const loginHandler = e => {
    e.preventDefault()
    const url =
        "https://co-make.herokuapp.com/auth/login";
      axios
        .post(url, inputData)
        .then( res => {

          props.setMessage('')
          console.log("Success!", res)
          props.setToken(res.data.token)
          props.setLocalId(res.data.id)
          props.setZip(res.data.zipCode)
          props.history.push("/");
        })

        .catch(err => {
          console.log("Login PROBLEM0", err);
        });
  }

  return (

    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' color='teal' textAlign='center'>
          <Image src={Logo} /> Log-in to your account
        </Header>
        <Header as="h4" color='green' textAlign='center'>{props.message}</Header>
        <Form size='large' onSubmit={loginHandler}>
          <Segment stacked>
            <Form.Input
            fluid icon='user'
            name="email"
            value={inputData.email}
            onChange={handleInput}
            iconPosition='left'
            placeholder='E-mail address'
             />

            <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Password'
              type='password'
              name="password"
              value={inputData.password}
              onChange={handleInput}
            />

            <Button type="submit" color='facebook' fluid size='large'>
              Login
            </Button>
          </Segment>
        </Form>
        <Message>
          New to us?
          <Button className="register-button"
          onClick={()=> props.history.push('/register')}
          content='Sign Up'
          positive
          size='mini' />
        </Message>
      </Grid.Column>
    </Grid>
  )
}


export default Login

  //   mapPropsToValues() {
  //     return {
  //       email: "",
  //       password: ""

  //     };
  //   },
  //   validationSchema: Yup.object().shape({
  //     email: Yup.string()
  //       .email()
  //       .required(),
  //     password: Yup.string()
  //       // .min(6)
  //       .required()
  //   }),
  //   handleSubmit(values, formikBag) {
  //     console.log(values)
  //     const url =
  //       "https://co-make.herokuapp.com/auth/login";
  //     axios
  //       .post(url, values)
  //       .then( res => {

  //         formikBag.props.setMessage('')
  //         console.log("Success!", res)
  //         formikBag.props.setToken(res.data.token)
  //         formikBag.props.setLocalId(res.data.id)
  //         formikBag.props.setZip(res.data.zipCode)
  //         formikBag.props.history.push("/");
  //       })

  //       .catch(err => {
  //         console.log(err);
  //       });
  //   }
  // })(Login);