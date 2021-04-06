import React, { useRef, useState, useEffect } from 'react'
import { ITodo } from './../types/data';
import List from './List';



interface IApp { }


const App: React.FC<IApp> = () => {

	const [value, setValue] = useState('')
	const [todos, setTodos] = useState<ITodo[]>([])
	const inputRef = useRef<HTMLInputElement>(null)


	const changeInput: React.ChangeEventHandler<HTMLInputElement> = (e) => {
		setValue(e.target.value)
	}


	const addTodo = () => {
		if (value) {
			const newTodo = {
				id: Date.now(),
				title: value,
				complete: false
			}
			setTodos([...todos, newTodo])
			setValue("")
		}
	}

	const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
		if (e.key === 'Enter') {
			addTodo()
		}
	}


	const removeTodo = (id: number): void => {
		const newTodo = todos.filter( todo => todo.id !== id )
		setTodos( newTodo )
	}

	const togleComplete = (id: number): void => {
		const newTodo = todos.map( todo => {
			if ( todo.id === id ) {
				todo.complete = !todo.complete
			}
			return todo
 		})
		 setTodos(newTodo)
	}


	useEffect(() => {
		inputRef.current?.focus()
	}, [])


	return (
		<div>
			<div>
				<input
					value={value}
					onChange={changeInput}
					ref={inputRef}
					onKeyDown={handleKeyDown}
				/>
				<button onClick={addTodo} > Добавить </button>
			</div>
			<List items={todos} 
			removeTodo={ removeTodo }
			togleComplete={ togleComplete }
			/>
		</div>
	)
}

export default App
