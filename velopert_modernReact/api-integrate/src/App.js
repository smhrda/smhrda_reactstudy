import React from 'react';
import { UsersProvider } from './UsersContext';
import Users from "./Users";


function App() {
  return (
    <UsersProvider>
      <Users/>
    </UsersProvider>
  );
}

export default App;
