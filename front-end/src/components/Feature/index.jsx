import PropTypes from 'prop-types'

import '../../styles/Feature.scss'

function Feature({ name, title, content }) {
  const imageSrc = `/icon-${name}.png`
  return (
    <div className="feature-item">
      <img src={imageSrc} alt={`${name} Icon`} className="feature-icon" />
      <h3 className="feature-item-title">{title}</h3>
      <p>{content}</p>
    </div>
  )
}

Feature.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
}
export default Feature
