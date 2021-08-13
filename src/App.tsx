import React from "react";
import TodoList from "./components/TodoList";
function App(): React.ReactElement {
	const todos = [{ id: "t1", text: "Finish the project" }];
	return (
		<div className="App">
			<TodoList items={todos} />
		</div>
	);
}

export default App;
