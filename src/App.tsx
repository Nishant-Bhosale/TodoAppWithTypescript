import React from "react";
import TodoList from "./components/TodoList";
import NewTodo from "./components/NewTodo";

function App(): React.ReactElement {
	const todos = [{ id: "t1", text: "Finish the project" }];

	const todoAddHandler = (text: string) => {
		console.log(text);
	};

	return (
		<div className="App">
			<NewTodo onAddTodo={todoAddHandler} />
			<TodoList items={todos} />
		</div>
	);
}

export default App;
