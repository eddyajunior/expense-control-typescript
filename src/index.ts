import express from 'express'
import itensRouter from './presentation/routers/itens.router';
import expensesRouter from './presentation/routers/expense.router';

// Porta do servidor
const PORT = process.env.PORT || 4000
// Host do servidor
const HOSTNAME = process.env.HOSTNAME || 'http://localhost'
// App Express
const app = express()

// Endpoint raiz
app.get('/', (req, res) => {
    res.send('API - Controle de Despesas v1.0.0')
})

// Rotas
app.use('/', itensRouter)

app.use('/', expensesRouter)

// Resposta padrão para quaisquer outras requisições:
app.use((req, res) => {
    res.status(404)
})
// Inicia o sevidor
app.listen(PORT, () => {
    console.log(`Servidor rodando com sucesso ${HOSTNAME}:${PORT}`)
})