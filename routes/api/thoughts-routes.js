const router = require('express').Router();

const {
    getAllThoughts,
    getSingleThought,
    createNewThought,
    updateThought,
    deleteThought,
    addReaction,
    deleteReaction

} = require('../../controllers/thoughts-controller');

router
 .route('/')
 .get(getAllThoughts);

router
 .route('/:id')
 .get(getSingleThought)
 .put(updateThought)
 .delete(deleteThought);

router
 .route('/:userId')
 .post(createNewThought)

router
 .route('/:thoughtId/reactions')
 .post(addReaction)

router
 .route('/:thoughts/:thoughtId/reactions')
 .delete(deleteReaction)

model.exports = router;