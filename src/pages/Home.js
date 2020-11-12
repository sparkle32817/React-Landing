import React from 'react';

import {
  Banner,
  About,
  Vision,
  Mission,
  Task,
  Method,
  Tech
} from '../components/home';

const Home = () => {
  return (
    <React.Fragment>
      <Banner />
      <About />
      <Vision />
      <Mission />
      <Task />
      <Method />
      <Tech />
    </React.Fragment>
  )
}

export default Home
