import React from 'react';
import  ReactDOM  from 'react-dom/client';

function Greeting(){
    return (
        <div>
        <div>
            <h3>My First Component</h3>
            <ul>
                <li>
                    <a href='#'>hello world</a>
                </li>
            </ul>
        </div>
        <h2>hii</h2>
        </div>
    );
}

//create element function
// function Greeting(){
//     return React.createElement('h2',{},'hello world')
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Greeting />);