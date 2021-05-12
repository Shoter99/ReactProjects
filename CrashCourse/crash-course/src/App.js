import firebase from './firebase'
import Header from './componets/Header'
<<<<<<< Updated upstream
=======
import { useEffect, useState } from 'react';
import Tasks from './componets/Tasks';
import TaskForm from './componets/TaskForm'
import Footer from './componets/Footer'
>>>>>>> Stashed changes


function App() {
  const firebaseApp = firebase.apps[0]
  return (
    <div className="container">
      <Header />
<<<<<<< Updated upstream
=======
      <Tasks tasks={tasks}/>
      <TaskForm />
      <Footer />
>>>>>>> Stashed changes
    </div>
  );
}

export default App;
