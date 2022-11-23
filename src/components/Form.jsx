import React from 'react';
import { Button, defaultTheme, Provider } from '@adobe/react-spectrum';

class Form extends React.Component {
  constructor() {
    super();
    this.stage = {
      login: '',
      password: ''
    }
  }
  render() {
    return <Provider theme={defaultTheme}>
      <fieldset>
        <form>
          <div>
            <sp-field-label for="name-0">Name</sp-field-label>
            <sp-textfield id="name-0" placeholder="Enter your name"></sp-textfield>
            <label for="GET-name">Name:</label>
            <input type="text" name="name" id="GET-name" />
          </div>
          <div>
            <label for="password">Password:</label>
            <input type="password" name="" id="password" />
          </div>
          <Button variant="accent">
            Войти
          </Button>
        </form>
      </fieldset>
    </Provider>
  }
}

export default Form;