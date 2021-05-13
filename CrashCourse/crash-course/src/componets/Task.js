import firebase from '../firebase'

function deleteTask(id){
    firebase
    .firestore()
    .collection('tasks')
    .doc(id)
    .delete()
}
function toggleReminder(id, reminder){
    firebase
    .firestore()
    .collection('tasks')
    .doc(id)
    .update({
        reminder: !reminder
    })
}

const Task = ({task}) => {
    return (
        <div className={`task ${task.reminder ? 'reminder' : ''}  ` } onDoubleClick={() => toggleReminder(task.id, task.reminder)}>
            <div  className='firstLine'>
                <h3>{task.text} </h3>
                <span className='delBtn' onClick={() => deleteTask(task.id)}>❌</span>
            </div>
            <p>{task.day}</p>
        </div>
    )


}

export default Task