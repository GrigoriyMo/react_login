import React from 'react';
import { Flex, Button, TextField, defaultTheme, Provider } from '@adobe/react-spectrum';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: '',
      password: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleChange(event) {
    this.setState({ login: event });
  }

  handlePasswordChange(event) {
    this.setState({ password: event });
  }

  handleSubmit(event) {
    if (this.props.correctLogin == this.state.login &&
      this.props.correctPassword == this.state.password
      ) {
      alert('Отправленное имя: ' + this.state.login);
      this.setState({ login: '' });
      this.setState({ password: '' });
    }
    event.preventDefault();
  }

  render() {
    return <Provider theme={defaultTheme}>
      <fieldset>
        <form onSubmit={this.handleSubmit}>
          <Flex direction="column" gap="size-100" alignItems="center">

            <label> <p> Имя пользователя:</p>
              <TextField value={this.state.login} onChange={this.handleChange}>
              </TextField>
            </label>

            <label> <p> Пароль: </p>
              <TextField type="password" value={this.state.password} onChange={this.handlePasswordChange}>
              </TextField>
            </label>

            <Button type="submit " variant="primary">
              Войти
            </Button>

          </Flex>
        </form>
      </fieldset>
    </Provider>
  }
}

export default Form;