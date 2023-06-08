import React from 'react';
import Form from 'react-bootstrap/Form';

const Filter = ({ handleTitleChange, handleRatingChange }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <Form.Control
            type="text"
            placeholder="Title"
            onChange={handleTitleChange}
          />
        </div>
        <div className="col-md-6">
          <Form.Control as="select" onChange={handleRatingChange}>
            <option value="">All Ratings</option>
            <option value="1">1 star</option>
            <option value="2">2 stars</option>
            <option value="3">3 stars</option>
            <option value="4">4 stars</option>
            <option value="5">5 stars</option>
          </Form.Control>
        </div>
      </div>
    </div>
  );
};

export default Filter;
