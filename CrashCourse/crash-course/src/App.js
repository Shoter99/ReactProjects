import firebase from './firebase'
import Header from './componets/Header'
import { useEffect, useState } from 'react';
import Tasks from './componets/Tasks';
import TaskForm from './componets/TaskForm'

function useTasks() {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    firebase
    .firestore()
    .collection('tasks')
    .onSnapshot((snapshot) => {
      const newTasks = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }))

      setTasks(newTasks)
      })
  }, [])

  return tasks
}

function App() {
  const tasks = useTasks()
  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks}/>
      <TaskForm />
    </div>
  );
}

export default App;
