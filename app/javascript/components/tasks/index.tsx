import * as React from "react"

export default class Index extends React.Component<any, any>{
  render() {
    const rows = [];
    this.props.tasks.forEach((task) => {
      rows.push(
        <tr>
          <td>{task.description}</td>
          <td>{task.priority}</td>
        </tr>
      );
    })

    return (
      <div>
      { this.props.notice }
      <h1>Posts</h1>

      <table>
        <thead>
          <tr>
            <th>Description</th>
            <th>Priority</th>
          </tr>
        </thead>

        <tbody>{rows}</tbody>
      </table>
      <br />
      </div>
    )
  }
}

