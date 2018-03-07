import * as React from "react"
import PropTypes from "prop-types"

export default class New extends React.Component<any, any>{
  render() {
    return (
    <form action="/tasks" method="post">
      <label htmlFor="description">Description</label>
      <input type="text" id="description" name="task[description]" />

      <label htmlFor="priority">Priority</label>
      <input type="number" id="priority" name="task[priority]" />
      <input type="submit" value="Submit"/>
    </form>
    )
  }
}
