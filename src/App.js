import FormToDo from './components/FormToDo'
import ToDoList from './components/ToDoList'
import React from 'react'
import './App.css'

class App extends React.Component {
	constructor() {
		super()
		this.state = {
			listState: [],
		}
	}
	addTask = (data) => {
		this.setState({ listState: this.state.listState.concat(data) })
	}

	deleteList = (id) => {
		const filteredList = this.state.listState.filter((el) => {
			if (el.id !== id) {
				return [el]
			}
		})
		
		this.setState({ listState: filteredList })
	}
	render() {
		return (
			<div className='App'>
				<h1>List to do:{this.state.listState.length}</h1>
				<FormToDo onAddTask={this.addTask} />
				<ToDoList
					text={this.state.listState}
					onDeleteList={this.deleteList}
				/>
			</div>
		)
	}
}

export default App
