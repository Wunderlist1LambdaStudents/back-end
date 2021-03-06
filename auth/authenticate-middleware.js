/* 
  complete the middleware code to check if the user is logged in
  before granting access to the next middleware/route handler
*/
const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
  const token = req.headers.authorization

  if (token) {
    const secret =
      process.env.JWT_SECRET ||
      'lifehappenswhereveryouare,whetheryoumakeitornot!'
    jwt.verify(token, secret, (error, decodedToken) => {
      if (error) {
        // the token is invalid
        res.status(401).json({ message: 'Invalid Credentials' })
      } else {
        // the token is good
        req.jwt = decodedToken

        next()
      }
    })
  } else {
    res.status(401).json({ you: 'No credentials provided' })
  }
}
