import './index.css'

const BannerCardItem = props => {
  const {cardItems} = props
  const {headerText, description, className} = cardItems
  return (
    <div className="listContainer">
      <li className={className}>
        <h1>{headerText}</h1>
        <p>{description}</p>
        <button className="button">Show More</button>
      </li>
    </div>
  )
}

export default BannerCardItem
