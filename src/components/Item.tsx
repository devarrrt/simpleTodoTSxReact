import React from 'react'
import { ITodo } from './../types/data';



interface IItem extends ITodo {  
	togleComplete: ( id: number ) => void,
	removeTodo: ( id: number ) => void
}



const Item: React.FC<IItem> = ({ id, title, complete, removeTodo,togleComplete }) => {

	return (
		<div>
			<input type="checkbox"  
			checked={ complete } 
			onChange={ ()=> togleComplete(id) }
			/>
			{title}
			<button onClick={ () => removeTodo(id) } > x </button>
		</div>
	)
}

export default Item
