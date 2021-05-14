import React from 'react';
import { Parallax } from 'react-materialize';

const About = () => {
  return (
    <div>
      <Parallax
        image={<img alt='' src='parallax-1.jpg' />}
        options={{
          responsiveThreshold: 0,
        }}
      />
      <div className='section-about white'>
        <div className='row container'>
          <h2 className='header'>What We Do</h2>
          <p className='grey-text text-darken-3 lighten-3'>
            It is easier to sell a concept than it is to sell the execution.
            However, with Zaxximo, we are attempting to reach the crossroads of
            minimalism and functionality. We believe in task automation made
            simply, made efficient, and made effective for staff members and
            administrators alike
          </p>
        </div>
      </div>
      <Parallax
        image={<img alt='' src='parallax-2.jpg' />}
        options={{
          responsiveThreshold: 0,
        }}
      />
      <div className='section-about white'>
        <div className='row container'>
          <h2 className='header'>About Me</h2>
          <p className='grey-text text-darken-3 lighten-3'>
            I have worked in roles where I have personally felt overburdened
            with changes to the schedule, and overburdened with responsibilities
            that I didn't believe were mine, when in reality they were and that
            I had just not been properly notified. I created this concept of
            instant notification and automation of tasks that doesn't instill
            paranoia in staff members, and one that doesn't result in frustrated
            supervisors
          </p>
        </div>
      </div>
      <Parallax
        image={<img alt='' src='parallax-3.jpg' />}
        options={{
          responsiveThreshold: 0,
        }}
      />
    </div>
  );
};

export default About;
