module.exports = {

    user: (app, req, res) => {

        req.assert("_name", "The name is invalid.").notEmpty()
        req.assert("_password", "The password is invalid.").notEmpty()
        req.assert("_email", "The email is invalid.").notEmpty()

        const errors = req.validationErrors()

        if(errors) {

            app.utils.error.send(errors, req, res)

            return false

        } else {

            return true

        }

    }

}