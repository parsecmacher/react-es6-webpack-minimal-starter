import React from 'react';
import ReactDOM from 'react-dom';
import Contact from './Contact';

ReactDOM.render((
    <div>
        <Contact name="Dante" city="Santa Clara" email="d@intuit.com"></Contact>
        <Contact name="Muzaffar" city="Fremont" email="m@intuit.com"></Contact>
        <Contact name="Abishek" city="Sunnyvale" email="a@intuit.com"></Contact>
    </div>
  ),
  document.getElementById('example')
);
