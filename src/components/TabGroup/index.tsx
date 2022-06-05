import React, { useState } from 'react';
import './styles.scss';

interface TabGroupProps {
  currentTab: string;
  tabs: {[key: string]: JSX.Element};
}

const TabGroup: React.FC<TabGroupProps> = ({currentTab, tabs}) => {

  const [selectedTab, setSelectedTab] = useState(currentTab);
  const tabHeaders = Object.keys(tabs);

  const handleSelect = (selectedValue: string) => {
    setSelectedTab(selectedValue);
  }

  return (
    <div
      className="tab-group">
      <div
        className="tabs">
        {
          tabHeaders.map((tabHeader, index) => (
            <span
              id={`tab-${index}`}
              className={`tab ${selectedTab === tabHeader ? 'selected-tab' : ''}`}
              onClick={() => handleSelect(tabHeader)}>
              {tabHeader}
            </span>
          ))
        }
      </div>
      <div
        className="content">
        {tabs[selectedTab]}
      </div>
    </div>
  );
}

export default TabGroup;
