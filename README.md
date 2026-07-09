# timeline

A lightweight, customizable React vertical timeline component adapted from a static HTML/CSS demo. It renders responsive vertical timelines with years, icons, colored lanes, and multiple entries per item. Designed for easy integration — pass an `items` array and include the bundled CSS; works with React 16+ and is bundled with `microbundle` for a small footprint. Ideal for portfolios, project histories, changelogs, and roadmaps.

<div align="center">
  <img src="https://raw.githubusercontent.com/nima-shokri/timeline/master/assets/img/html-timeline.png?v=1" alt="Timeline Preview" /> 
</div>

## Install

```bash
npm install @nimsho/vertical-timeline
```

## Usage

```jsx
import Timeline from '@nimsho/vertical-timeline';
import '@nimsho/vertical-timeline/dist/timeline-react.css';

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
  }
];

export default function App() {
  return (
    <div style={{ padding: 20, background: '#212429', minHeight: '100vh' }}>
      <Timeline items={items} />
    </div>
  );
}
```
