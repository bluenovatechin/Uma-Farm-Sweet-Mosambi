import React from 'react';

export default function OrchardPlan() {
  const xs = [40, 120, 200, 280];
  const ys = [30, 90, 150, 210];

  return (
    <figure className="plan">
      <div className="plan-head">
        <strong>Orchard layout</strong>
        <span>20 x 20 ft grid</span>
      </div>
      <div className="plan-canvas">
        <svg viewBox="0 0 320 250" role="img" aria-labelledby="planTitle">
          <title id="planTitle">
            Diagram of the orchard: trees planted 20 feet apart in rows, with a drip line running along each row
          </title>
          <g id="orchardRows">
            {ys.map((y) => (
              <React.Fragment key={`row-${y}`}>
                <line x1={20} x2={300} y1={y + 14} y2={y + 14} className="drip" />
                {xs.map((x) => (
                  <React.Fragment key={`tree-${x}-${y}`}>
                    <circle cx={x} cy={y} r={24} className="canopy" />
                    <circle cx={x} cy={y} r={7} className="tree" />
                  </React.Fragment>
                ))}
              </React.Fragment>
            ))}
          </g>
          <line className="dim" x1={40} y1={232} x2={120} y2={232} />
          <line className="dim" x1={40} y1={226} x2={40} y2={238} />
          <line className="dim" x1={120} y1={226} x2={120} y2={238} />
          <text x={80} y={248} textAnchor="middle">20 ft</text>
        </svg>
      </div>
      <figcaption>
        <span><i className="legend-dot"></i>Mosambi tree</span>
        <span><i className="legend-dash"></i>Drip line</span>
      </figcaption>
    </figure>
  );
}
