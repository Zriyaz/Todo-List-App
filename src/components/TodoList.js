import React from "react"
import TodoItem from "./TodoItem"

export default class TodoList extends React.Component{
  render(){
    return(
      <div>
        Hello from TodoList
        <TodoItem />
      </div>
    )
  }
}