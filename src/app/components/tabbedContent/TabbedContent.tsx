import React, { useState } from 'react';

import TabbedContentStyled from './TabbedContent.styled';

export interface TabItem {
  title: string;
  text: string;
}

export interface Props {
  className?: string;
  title?: string;
  tabs: TabItem[];
  defaultTabIndex?: number;
}

const TabbedContent = ({
  className,
  title,
  tabs,
  defaultTabIndex = 0,
}: Props) => {
  const [activeTabIndex, setActiveTabIndex] = useState<number>(
    defaultTabIndex < tabs.length ? defaultTabIndex : 0
  );

  if (!tabs || tabs.length < 1) return null;

  const handleTabClick = (index: number) => {
    setActiveTabIndex(index);
  };

  return (
    <TabbedContentStyled className={className}>
      {title && <h2 className="tabbed-content__title">{title}</h2>}
      <div className="tabbed-content__tabs">
        {tabs.map((tab, idx) => (
          <button
            key={idx}
            id={`tabbed-content-tab-${idx}`}
            className={`tabbed-content__tab ${
              activeTabIndex === idx ? 'tabbed-content__tab--active' : ''
            }`}
            onClick={() => handleTabClick(idx)}
            type="button"
            role="tab"
            aria-selected={activeTabIndex === idx}
            aria-controls={`tabbed-content-panel-${idx}`}
          >
            {tab.title}
          </button>
        ))}
      </div>

      <div className="tabbed-content__content">
        {tabs.map((tab, idx) => (
          <div
            key={idx}
            id={`tabbed-content-panel-${idx}`}
            className={`tabbed-content__panel ${
              activeTabIndex === idx ? 'tabbed-content__panel--active' : ''
            }`}
            role="tabpanel"
            aria-labelledby={`tabbed-content-tab-${idx}`}
          >
            <div
              className="tabbed-content__text"
              dangerouslySetInnerHTML={{ __html: tab.text }}
            />
          </div>
        ))}
      </div>
    </TabbedContentStyled>
  );
};

export default TabbedContent;
