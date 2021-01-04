import React, { useState } from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'
// import { db } from '../../firebase/Firebase';

function TodoList() {
  const [todos, setTodos] = useState([])

// ||...or(または)
// 入力された値が空白文字だった場合、新規作成されない
  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return
    }

    //... = 括弧を外してくれる
    const newTodos = [todo, ...todos]

    setTodos(newTodos)
  }

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTodos(prev => prev.map((item) => (item.id === todoId ? newValue : item))
    )
  }

  const removeTodo = (id) => {
    const removeArr = [...todos].filter((todo) => todo.id !== id)

    setTodos(removeArr)
  }

  const completeTodo = (id) => {
    let updateTodo = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete
      }
      return todo
    })
    setTodos(updateTodo)
  }

// onsubmit = 送信ボタンが押された時に起動するイベント

  return (
    <div>
      <h1>What's the plan for Today?</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </div>
  )
}

export default TodoList
