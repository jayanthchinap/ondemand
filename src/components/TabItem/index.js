import './index.css'

const TabItem = props => {
  const {tabDetails, updateActiveTabId, isActive} = props
  const {displayText, tabId} = tabDetails

  const isActiveClassName = isActive ? 'active-tab-btn' : ''

  const onClickTabItem = () => {
    updateActiveTabId(tabId)
  }

  return (
    <li className="tab-item-container ">
      <button
        type="button"
        onClick={onClickTabItem}
        className={`tab-btn ${isActiveClassName}`}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
