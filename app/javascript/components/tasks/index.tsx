import * as React from "react"

export default class Index extends React.Component<any, any>{
  render(){
    var AmCharts = require("@amcharts/amcharts3-react");
    const rows = [];

    this.props.tasks.forEach((task) => {
      rows.push(
        <tr>
          <td>{task.description}</td>
          <td>{task.priority}</td>
        </tr>
      )
    })

    return (
      <AmCharts.React
        style={{
          width: "100%",
          height: "500px"
        }}
        options={{
          "type": "serial",
          "theme": "light",
        }}
      />

      <div>
        { this.props.notice }
      <h1>Tasks</h1>
      <table>
        <thead>
          <th>Description</th>
          <th>Priority</th>
        </thead>
        <tbody>{rows}</tbody>
      </table>
      </div>
    )
  }
}
