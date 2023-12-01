import React from 'react';
import styles from '../styles/App.css';
const Post = () => {
    return (
        <div className='post'>
            <div className='post__content'>
                <strong>1. Javascript</strong>
                <div>JS - язык программирования</div>
            </div>
            <div className='post__btns'>
                <button>Удалить</button>
            </div>
        </div>
    );
};

export default Post;
