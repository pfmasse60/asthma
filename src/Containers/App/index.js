import Login from '../Login';
import Configure from '../Configure';
import Home from '../Home';
import './App.css';

const appStyle = {
  height: '250px',
  display: 'flex'
};

function App() {
  const handleSubmit = data => {
    const json = JSON.stringify(data, null, 4);
    console.clear();
    console.log(json);
};
return (
  <div style={appStyle}>
    <Home />
  </div>
);
}

export default App;
