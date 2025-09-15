import React from 'react'
import Content1 from './content1';
import { BrowserRouter,Link,Outlet,Routes,Route } from 'react-router-dom'

export default function Layout() {
  return (
    <div>
      <nav>
        <a>
          <Link to="/">Content1</Link>
          <Link to="/content">Content2</Link>
          <Link to="/admin/content3">Content3</Link>
        </a>
      </nav>
      <Outlet />
      <footer>This is my Footer</footer>
    </div>
  );
}
