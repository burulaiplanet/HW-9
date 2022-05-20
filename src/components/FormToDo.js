import React, { Fragment } from 'react'
import styles from './ToDoList.module.css'
class FormToDo extends React.Component {
	constructor() {
		super()
		this.state = {
			listInput: '',
		}
	}
	handlerChange = (event) => {
		this.setState({
			listInput: event.target.value,
		})
	}
	handlesubmit = (event) => {
		event.preventDefault()
		const data = {
			id: Math.random().toString(),
			title: this.state.listInput,
		}
		if (data.title.trim().length > 0) {
			this.props.onAddTask(data)
		} else {
			alert('write something')
		}
		this.setState({ listInput: '' })
	}
	render() {
		return (
			<Fragment>
				<form onSubmit={this.handlesubmit}>
					<input className={styles.input}
						value={this.state.listInput}
						type='text'
						onChange={this.handlerChange}
					/>
					<button>Add</button>
				</form>
			</Fragment>
		)
	}
}

export default FormToDo
