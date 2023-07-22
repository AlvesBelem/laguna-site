import { Router, Request, Response } from "express";
import * as PageController from '../src/controllers/pageController';
import * as SearchController from '../src/controllers/searchController';

const router = Router();

router.get('/', PageController.home);
router.get('/products', PageController.products);
router.get('/fishes', PageController.fishes);
router.get('/store', PageController.store);

router.get('/search', SearchController.search);

export default router;