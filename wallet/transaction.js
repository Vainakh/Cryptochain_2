class Transaction {
  constructor({ senderWallet, recipient, amount }) {
    this.senderWallet = senderWallet;
    this.recipient = recipient;
    this.amount = amount;
  }
}

module.exports = Transaction;