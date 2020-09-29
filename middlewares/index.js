exports.isAuth = (req, res, next) => {
    if (req.isAuthenticated()) {
      next()
    } else {
      res.redirect("/login")
    }
  }
  
  exports.checkRole = role => (req, res, next) => {
    if (role === req.user.role) {
      next()
    } else {
      res.redirect("/")
    }
  }

exports.catchErrors = ctlr => (req, res, next) => 
ctlr(req, res).catch(next)

exports.setLocals = app => (req, res, next) => {
    if (req.isAuthenticated()) {
      app.locals.user = req.user
      app.locals.admin = req.user.role === "ADMIN"
      app.locals.guest = req.user.role === "GUEST"
    } else {
      app.locals.user = false
      app.locals.admin = false
      app.locals.guest = false
    }
    next()
  }