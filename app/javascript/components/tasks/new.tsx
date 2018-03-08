import * as React from "react"
import {FormFor, Label, TextField, NumberField, Submit} from "react-rails-form-helpers"

export default class New extends React.Component<any, any>{
  render() {
    return (
    <FormFor url="/tasks" method="post" name="task" csrfToken="hola mundo">
      <Label htmlFor="description">Description</Label>
      <TextField id="description" name="description" />
      <input type="hidden" name="authenticity_token" value="hola mundo" />

      <Label htmlFor="priority">Priority</Label>
      <NumberField name="priority" />
      <Submit value="Submit" />
    </FormFor>
    )
  }
}
