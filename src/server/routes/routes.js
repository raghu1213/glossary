import express from 'express'
import GlossaryStore from '../glossaryStore'

const router = express.Router();

router.get("/search", (req, res) =>{
res.send(GlossaryStore(req.query.searchString))}
);

export default router;
