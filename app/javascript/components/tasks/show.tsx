import * as React from "react"

export default class Show extends React.Component<any, any>{
  render() {
    this.props.tasks.forEach((task) => {
      rows.push(
        <tr>
          <td>{task.description}</td>
        </tr>
      )
    })
    return (
      <div>
        <h1>Tasks</h1>
      </div>
    )
  }
}
