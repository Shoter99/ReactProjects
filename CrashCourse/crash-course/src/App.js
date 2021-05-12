import firebase from './firebase'
import Header from './componets/Header'


function App() {
  const firebaseApp = firebase.apps[0]
  return (
    <div className="container">
      <Header />
    </div>
  );
}

export default App;
