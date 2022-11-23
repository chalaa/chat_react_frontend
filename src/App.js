import React from 'react'
import LeftComponent from './components/LeftComponent';
import RightComponent from './components/RightComponent';

function App() {
  return (
    <div class="main-wrapper">
    <div class="container">
      <div class="page-content">
        <div class="container mt-5">
          <div class="row">
            < LeftComponent/>
            < RightComponent/>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default App;
