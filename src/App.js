
import './App.css';
import logo from './assest/logo.svg' 
function App() {
  return (
    <div>
      <div className='log'>
      <img className='logo' src={logo} alt='Logo' />
      </div>
      <h1 className='textcolor'>Facebook helps you connect and share with the people in your life.</h1>
      <div className='fromc'>
      <div className='form'>
        <input type='text' placeholder='Please Enter Email Adresss'/>
        <input type='password' placeholder='Please Enter Password'/>
        <div>
         <button className='login'>Log In</button>
        </div>
        <h5>Forgotten password?</h5>
        <hr></hr>
        <div>
          <button className='register'>Create new account</button>
        </div>
      </div>
      </div>
    </div>
  );
}

export default App;
