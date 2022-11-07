import React from "react";
import Spinner from 'react-bootstrap/Spinner';

export default function Loading() {
  return <div className="loading">
       <Spinner animation="border" required ="grow" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  </div>
}
