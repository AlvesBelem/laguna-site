import {Request, Response} from 'express';

import { AllItens } from '../models/allItens';
import { createMenuObject } from '../helpers/createMenuObject';

export const search = (req: Request, res: Response) => {

    let query: string = req.query.q as string;

    if(!query) {
        res.redirect('/');
        return;
    }

    let list = AllItens.getFromName(query);
   
    res.render('pages/page', {
        menu: createMenuObject(''),
        list,
        query


    });
};