import React from 'react';
import './timeline.css';

// Timeline component
// Props:
// - items: array of timeline items with { year, side, colorClass, icon, entries }
// - className: additional wrapper class
export default function Timeline({ items = [], className = '', style = {} }) {
  // Render a single step
  const renderStep = (item, idx) => {
    const { year, side = 'vt-right', colorClass = 'vt-blue', icon = '', entries = [] } = item;
    return (
      <div key={idx} className={`vt-step ${side} ${colorClass}`}>
        <div className="vt-column">
          <div className="vt-start-point" />
          <div className="vt-end-point" />
        </div>
        <div className="vt-content">
          <div className="vt-header">
            <h2 className="vt-cat">{year}</h2>
          </div>
          <div className="vt-splitter">
            <div className="vt-line" />
            <div className="vt-icon">
              <div className="vt-icon-wrap">
                {icon ? <img src={icon} alt="icon" className="image-fluid" /> : null}
              </div>
            </div>
          </div>
          <div className="vt-body">
            {entries.map((e, i) => (
              <React.Fragment key={i}>
                {e.title ? <h3 className="vt-title">{e.title}</h3> : null}
                {e.text ? <p>{e.text}</p> : null}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const renderStartStep = (item) => {
    const { side = 'vt-right', colorClass = 'vt-blue' } = item;
    return (
      <div key="start" className={`vt-step ${side} ${colorClass}`}>
        <div className="vt-column" />
      </div>
    );
  };

  return (
    <div className={`vertical-timeline ${className}`} style={style}>
      {items.length > 0 ? renderStartStep(items[0]) : null}
      {items.map((it, i) => renderStep(it, i))}
    </div>
  );
}
