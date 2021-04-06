import React from 'react'
import Item from './Item';
import { ITodo } from './../types/data';



interface IList {
	items: ITodo[],
	togleComplete: ( id: number ) => void,
	removeTodo: ( id: number ) => void
}


const List: React.FC<IList> = ({ items, removeTodo, togleComplete }) => {
	return (
		<div>
			{ items.map( item=> (
				<Item key={ item.id }  { ...item }  
				removeTodo={ removeTodo }
				togleComplete={ togleComplete }  />
			))}
		</div>
	)
}

export default List
