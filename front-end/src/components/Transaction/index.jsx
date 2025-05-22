import PropTypes from 'prop-types'

import '../../styles/Transaction.scss'

function Transaction({ type, number, amount }) {
  return (
    <section className="account">
      <div className="account-content-wrapper">
        <h3 className="account-title">
          Argent Bank {type}({`x${number}`})
        </h3>
        <p className="account-amount">{`$ ${amount}`}</p>
        <p className="account-amount-description">Available Balance</p>
      </div>
      <div className="account-content-wrapper cta">
        <button className="transaction-button">View transactions</button>
      </div>
    </section>
  )
}

Transaction.propTypes = {
  type: PropTypes.string.isRequired, // Validation pour une prop de type 'number'
  number: PropTypes.number.isRequired, // Validation pour une prop de type 'number'
  amount: PropTypes.string.isRequired, // Validation pour une prop de type 'number'
}

export default Transaction
