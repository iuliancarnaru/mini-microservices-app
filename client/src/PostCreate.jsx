import React, { useState } from 'react';
import axios from 'axios';

const PostCreate = () => {
  const [title, setTitle] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    await axios.post('http://posts.com/posts/create', {
      title,
    });

    setTitle('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            value={title}
            name="title"
            type="text"
            id="title"
            className="form-control"
            onChange={(event) => setTitle(event.target.value)}
          />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default PostCreate;
