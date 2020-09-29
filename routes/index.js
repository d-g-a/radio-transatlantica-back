const router = require('express').Router();
const {catchErrors, isAuth, checkRole } = require("../middlewares/index")
const {getShows,
       getShow,
       createShow,
       updateShow,
       deleteShow} = require('../controllers/show')

const {getGuests,
       getGuest,
       createGuest,
       updateGuest,
       deleteGuest} = require('../controllers/guest')       

const {getAllEditorials,
       getOneEditorial,
       createEditorial,
       updateEditorial,
       deleteEditorial} = require('../controllers/editorial')

const {getAllProfiles,
       addShowLoved,
       deleteShowLoved } = require('../controllers/user')


router.get('/', (req, res, next) => {
  res.status(200).json({ msg: 'Working' });
});

//============SHOWS============

router.get('/shows', catchErrors(getShows))
router.get('/shows/:showId', catchErrors(getShow))
router.post('/shows', isAuth, checkRole("ADMIN"), catchErrors(createShow))
router.put('/shows/:showId', isAuth, checkRole("ADMIN"), catchErrors(updateShow))
router.delete('/shows/:showId',isAuth,checkRole("ADMIN"), catchErrors(deleteShow) )


//==============GUEST==============

router.get('/guests', catchErrors(getGuests))
router.get('/guests/:guestId', catchErrors(getGuest))
router.post('/guests', isAuth, checkRole("ADMIN"), catchErrors(createGuest))
router.put('/guests/:guestId', isAuth, checkRole("ADMIN"), catchErrors(updateGuest))
router.delete('/guests/:guestId', isAuth, checkRole("ADMIN"), catchErrors(deleteGuest))

//============EDITORIAL============

router.get('/editorial', catchErrors(getAllEditorials))
router.get('/editorial/:editorialId', catchErrors(getOneEditorial))
router.post('/editorial', isAuth, checkRole("ADMIN"), catchErrors(createEditorial))
router.put('/editorial/:editorialId', isAuth, checkRole("ADMIN"), catchErrors(updateEditorial))
router.delete('/editorial/:editorialId', isAuth, checkRole("ADMIN"), catchErrors(deleteEditorial))


//============USER==============

router.get('/users', isAuth, checkRole("ADMIN"), catchErrors(getAllProfiles))

router.put('/addlove', isAuth, catchErrors(addShowLoved))
router.delete('/addlove', isAuth, catchErrors(deleteShowLoved))


module.exports = router;
