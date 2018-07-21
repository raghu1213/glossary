import express from 'express'
import { SearchGlossary, AddToGlossary, DeleteFromGlossary } from '../dbUtils'

const router = express.Router();

router.get("/search", async (req, res) => {
    res.send(await SearchGlossary(req.query.searchString));

});


router.post("/add", async (req, res) => {
    res.send(await AddToGlossary(req.body.title, req.body.description));
});

router.post("/delete", async (req, res) => {
    res.send(await DeleteFromGlossary(req.query.title));
});
export default router;
