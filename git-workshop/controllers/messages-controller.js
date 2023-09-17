const getMessage = (req,res) => {
  const message = req.params.message;
  res.send(`tu message es ${message}`)
}

export { getMessage }
