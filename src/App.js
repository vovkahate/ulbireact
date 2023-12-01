import { useState } from 'react';
import Post from './components/Post';

function App() {
    const [value, setValue] = useState('Текст в инпуте');

    return (
        <div className='App'>
            <Post />
        </div>
    );
}

export default App;
