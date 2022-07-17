import { useState } from 'react';
import List from './components/List';
import data from './data';
import './App.css';

export default function App() {
    const [friends, setFriends] = useState(data);
    return (
      <main>
        <section>
          <h2>{friends.length} birthdays today</h2>
          <List friends={friends} />
          <button onClick={ () => setFriends([])}>Clear All</button>
        </section>
      </main>
    );
}
