import { render, screen } from '@testing-library/react';
import App from '../App';
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'

describe('renders Homepage', () => {

  it('renders home landing page', () => {
    render(<App />);
    const home = screen.getByRole('heading', {
      name: "Página Inicial",
    });
    expect(home).toBeInTheDocument();
  })

  it ('renders nav bar', () => {
  render(<App />);
  const navHome = screen.getByText('Home');
  const navShorten = screen.getByText('Encurtador');
  const navAbout = screen.getByText('About');
  expect(navHome).toBeInTheDocument();
  expect(navShorten).toBeInTheDocument();
  expect(navAbout).toBeInTheDocument();
  })

  it ('renders footer bar', () => {
    render(<Footer />);
  })

})

