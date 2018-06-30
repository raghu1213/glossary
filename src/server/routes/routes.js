import express from 'express'
import { SearchGlossary, AddToGlossary } from '../glossaryStore'

const router = express.Router();

router.get("/search", (req, res) => {
    res.send(SearchGlossary(req.query.searchString));

});
router.post("/add", (req, res) => {
    res.send(AddToGlossary(req.body.text, req.body.value));
});
export default router;
