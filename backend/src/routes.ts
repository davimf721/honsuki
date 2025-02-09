import express from "express";
import { addBook, getBooks } from "./controllers/booksController";
import { addReview, getReviews } from "./controllers/reviewsController";

const router = express.Router();

router.post("/books", addBook);
router.get("/books", getBooks);
router.post("/reviews", addReview);
router.get("/reviews", getReviews);

export default router;