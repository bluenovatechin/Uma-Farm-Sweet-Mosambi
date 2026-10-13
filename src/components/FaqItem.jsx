import React from 'react';
import Icon from './Icon';

export default function FaqItem({ question, children, defaultOpen = false }) {
  return (
    <details className="faq-item" open={defaultOpen ? true : undefined}>
      <summary>
        {question}
        <span className="plus">
          <Icon name="i-plus" />
        </span>
      </summary>
      <div className="answer">{children}</div>
    </details>
  );
}
