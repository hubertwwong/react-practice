import React from 'react';

function App() {
  const mainDivStyle = {
    backgroundColor: "gray"
  }
  const headerStyle = {
    border: "1px solid green",
    backgroundColor: "red",
    height: 100,
    width: 100,

  }
  const mainStyle = {
    fontFamily: "Helvetica-Nune",
    fontSize: "4em",
    color: "green",
    height: 400,
    width: 800
  }
  const footerStyle = {
    fontSize: "2em",
    textAlign: "center",
    backgroundColor: "blue"
  }

  function sayDay() {
    let h = Math.random() * 24;
    if (h < 12) {
      return "Good morning";
    } else {
      return "Good afternoon";
    }
  }

  return (
    <div style={mainDivStyle}>
      <header style={headerStyle}>header</header>
      <main style={mainStyle}>{sayDay()}</main>
      <footer style={footerStyle}>footer</footer>
    </div>
  )
}

export default App;