import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import PhysicsComponent from './GameEngine/Physics';
import MathVector from './GameEngine/MathVector';

test('App - Render app', () => {
  render(<App />);
});