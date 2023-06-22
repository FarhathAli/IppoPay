import React , {useState} from 'react';
import './Test.css';

const Test = () => {
    const [password, setPassword] = useState('');
    const [stepsRequired, setStepsRequired] = useState(0);
  
    // Function to handle password input change
    const handlePasswordChange = (event) => {
      const newPassword = event.target.value;
      setPassword(newPassword);
      setStepsRequired(calculateStepsRequired(newPassword));
    };
  
    // Function to calculate the number of steps required to make the password strong
    const calculateStepsRequired = (password) => {
      let steps = 0;
  
      // Check password length
      if (password.length < 6) {
        steps += 6 - password.length;
      } else if (password.length > 20) {
        steps += password.length - 20;
      }
  
      // Check for at least one lowercase letter, one uppercase letter, and one digit
      const lowercaseRegex = /[a-z]/;
      const uppercaseRegex = /[A-Z]/;
      const digitRegex = /[0-9]/;
  
      if (!lowercaseRegex.test(password)) {
        steps++;
      }
      if (!uppercaseRegex.test(password)) {
        steps++;
      }
      if (!digitRegex.test(password)) {
        steps++;
      }
  
      // Check for three repeating characters in a row
      for (let i = 0; i < password.length - 2; i++) {
        if (
          password[i] === password[i + 1] &&
          password[i + 1] === password[i + 2]
        ) {
          steps++;
          break;
        }
      }
  
      return steps;
    };

  return (
    <div className='formTest'>
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={handlePasswordChange}
      />
      <span>Steps required: {stepsRequired}</span>
    </div>
  )
}

export default Test