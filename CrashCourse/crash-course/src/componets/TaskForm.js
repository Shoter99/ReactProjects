import firebase from '../firebase.js'
import { useState } from 'react'



const TaskForm = () => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [remind, setRemind] = useState(false)
    
    function addTask(e){
        e.preventDefault()

        firebase
        .firestore()
        .collection('tasks')
        .add({
            text,
            day,
            reminder: remind
        })
        .then(() => {
            setText('')
            setDay('')
            setRemind(0)
        })
    }
    
    return (
        <form onSubmit={addTask}>
            <div id='taskName'>
                <label htmlFor="text">Task name</label>
                <input required={true} type="text" name="text" value={text} onChange={e => setText(e.currentTarget.value)} id="text" />
            </div>
            <div id="taskDay">
                <label htmlFor="day">When</label>
                <input required={true} type="text" name="day" id="day" value={day} onChange={e => setDay(e.currentTarget.value)} />
            </div>
            <div id='taskRemind'>
                <label htmlFor="remind">Should I remaind</label>
                <input  type="checkbox" name="remind" id="remind" value={remind} onChange={e => setRemind(e.currentTarget.value)} />
            </div>
                <button type="submit">Add</button>
        </form>
    )
}

export default TaskForm
