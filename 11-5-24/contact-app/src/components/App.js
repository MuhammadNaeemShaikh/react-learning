import AddContact from './AddContact';
import Header from './Header';
import ContactList from './ContactList';
import './App.css';
import { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from 'react-router-dom';

function App() {
  const [contacts, setContact] = useState([]);
  const localStorageKey = 'contacts';

  const addContactHandler = (contact) => {
    setContact([...contacts, contact]);
  };

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(contacts));
  }, [contacts]);

  useEffect(() => {
    const getContact = JSON.parse(localStorage.getItem(localStorageKey));
    console.log(getContact);
    if (getContact.length > 0) {
      setContact([getContact]);
    }
  }, []);

  return (
    <div>
      <Router>
        <Header />
        <Routes>
          {' '}
          <Route path="/" element={<ContactList contacts={contacts} />} />
          <Route
            path="/add"
            element={<AddContact addContactHandler={addContactHandler} />}
          />
          {/* <AddContact addContactHandler={addContactHandler} /> */}
          {/* <ContactList contacts={contacts} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
