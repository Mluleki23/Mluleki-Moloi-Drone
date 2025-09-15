import React from 'react'
import Layout from './layout';
import { Link } from 'react-router-dom';

export default function Content1() {
  return (
    <div>
      <h1>Welcome to Mluleki Drone</h1>
      <p>If you want to Order click this Button</p>
      <button type="submit">
        <Link to="/admin/content3">Order Now</Link>
      </button>
      <form action="/order" method="get"></form>
    </div>
  );
}
