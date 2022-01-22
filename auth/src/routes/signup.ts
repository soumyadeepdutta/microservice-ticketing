import express from 'express';
import { DatabaseConnectionError } from '../errors/database-connection-error';
import { RequestValidationError } from '../errors/request-validation-error';
const router = express.Router()

router.post('/api/users/signup', (req, res) => {
    throw new DatabaseConnectionError()
    res.send('hi, user')
})

export { router as signupRouter }