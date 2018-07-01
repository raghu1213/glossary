import express from 'express'
import { SearchGlossary, AddToGlossary, DeleteFromGlossary } from '../glossaryStore'

const router = express.Router();

router.get("/search", (req, res) => {
    res.send(SearchGlossary(req.query.searchString));

});
router.post("/add", (req, res) => {
    res.send(AddToGlossary(req.body.title, req.body.description));
});

router.post("/delete", (req, res) => {
    res.send(DeleteFromGlossary(req.query.title));
});
export default router;
