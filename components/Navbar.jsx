import React from 'react';
import Link from 'next/link';

class Navbar extends React.Component {

  wrapperRef = React.createRef();

  state = {
    open: false
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  handleClickOutside = (event) => {
    if (this.wrapperRef && !this.wrapperRef.current.contains(event.target)) {
      this.setState(prevState => {
        if (prevState.open) {
          return {
            open: !prevState.open
          };
        }

        return prevState;
      })
    }
  }

  handleNavbarToggle = () => {
    this.setState(prevState => ({
      open: !prevState.open
    }))
  }

  render() {
    return (
      <nav ref={this.wrapperRef}>
        <div className="navbar-toggler">
          <button className="navbar-toggler-button" onClick={() => this.handleNavbarToggle()}>
            <i className={this.state.open ? "fas fa-times fa-x2" : "fas fa-paint-brush fa-x2"}></i>
          </button>
        </div> 
        <div className={this.state.open ? "navbar open" : "navbar" }>
          <ul className="navbar-links">
            <li className="">
              <Link href="/">
                <a className="">
                  Home
                </a>
              </Link>
            </li>
            <li className="">
              <Link href="/images">
              <a className="">
                Images
              </a>
              </Link>
            </li>
            <li className="">
              <Link href="/about">
                <a className="">
                  About
                </a>
              </Link>
            </li>  
          </ul>
        </div>
      </nav>
    );
  }
};

export default Navbar;
