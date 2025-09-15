import React from 'react'
import { Link } from 'react-router-dom';

export default function Content2() {
  return (
    <div>
      <h1>This my content two</h1>
      <form>
        <label>First name:</label>
        <br />
        <input type="text" id="fname" name="fname" />
        <br />
        <label>Last name:</label>
        <br />
        <input type="text" id="lname" name="lname" />
        <br />
        <br />
        <button type="submit">
          <Link to="/">Order Now</Link>
        </button>
      </form>
    </div>
  );
}
