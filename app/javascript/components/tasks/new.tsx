import * as React from "react"

export default class New extends React.Component<any, any>{
  render() {
    return (
    <form action="/tasks" method="post">
      <label htmlFor="task_description">Description</label>
      <input type="text" id="task_description" name="task[description]" />
      <input type="hidden" name="authenticity_token" value="hola mundo" />

      <label htmlFor="task_priority">Priority</label>
      <input type="number" id="task_priority" name="task[priority]" />
      <input type="submit" value="Submit" />
    </form>
    )
  }
}
