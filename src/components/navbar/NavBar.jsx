import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <div>
      <ul>
        <Link to="/">Accueil</Link><br />
        <Link to="/gestionnaire">Gestionnaire </Link><br />
      </ul>
    </div>
  )
}
