import React from 'react'
import styles from './ToDoList.module.css'

class ToDoList extends React.Component {
	render() {
		return (
			<div>
				{this.props.text.map((el) => {
					return (
						<div className={styles.div} key={el.id}>
							<li>{el.title}</li>
							<button
								onClick={() => this.props.onDeleteList(el.id)}
							>
								Delete
							</button>
						</div>
					)
				})}
			</div>
		)
	}
}
export default ToDoList
