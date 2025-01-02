import express from 'express'

const expensesRouter = express.Router()

expensesRouter.get('/expenses', (req, res) => {
    res.send('Cria nova despesa')
})

export default expensesRouter