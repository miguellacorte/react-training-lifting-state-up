import React from "react";
 
function Summary(props) {
  console.log(props)
  return (

    <div>
      <h1>TASKS COMPLETED:</h1>
      <p className="tasks-completed">{props.tasksCompleted}</p>
    </div>
  );
}
 
export default Summary;