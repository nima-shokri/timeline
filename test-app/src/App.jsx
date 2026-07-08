import React from 'react';
import Timeline from 'timeline-react';
import 'timeline-react/dist/timeline-react.css';

const items = [
  {
    year: '2021',
    side: 'vt-right',
    colorClass: 'vt-blue',
    icon: '/assets/img/icons/1.png',
    entries: [
      { title: 'Subject', text: 'Example text for 2021.' }
    ]
  },
  {
    year: '2022',
    side: 'vt-left',
    colorClass: 'vt-orange',
    icon: '/assets/img/icons/2.png',
    entries: [
      { title: 'Subject', text: 'Example text for 2022.' }
    ]
  },
  {
    year: '2023',
    side: 'vt-right',
    colorClass: 'vt-pink',
    icon: '/assets/img/icons/2.png',
    entries: [
      { title: 'Subject', text: 'Example text for 2023.' }
    ]
  }
];

export default function App() {
  return (
    <div style={{ padding: 50, background: '#212429', minHeight: '100vh', overflowX: 'hidden' }}>
      <Timeline items={items} />
    </div>
  );
}
