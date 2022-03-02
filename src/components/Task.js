function Task(props) {

  return (
    <div className="task-card">
      <div className="task-card-half">
        <h1>{props.task.name}</h1>
        {props.task.isDone                                 // <== UPDATE
          ? <span>DONE ✅</span>
          : <span>PENDING ⌛</span>
        }

        <h2> Task Description </h2>
        <p>{props.task.description}</p>

        <button className="add" onClick={() => { }}>
        {props.task.isDone                                 // <== UPDATE
            ? <span>UNDO ❌</span>
            : <span>✔️</span>
          }
        </button>

      </div>
    </div>
  );
}

export default Task;
