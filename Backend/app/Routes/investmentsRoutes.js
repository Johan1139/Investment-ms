const { Router } = require('express');
const investmentController = require('../Controllers/investmentsController');

class InvestmentRouter {
  constructor() {
    this.investmentRouter = Router();
    this.config();
  }

  config() {
    this.investmentRouter.post('/investment', investmentController.create);
    this.investmentRouter.get('/investment/:id', investmentController.getInvestmentsByProject);
  }
}
const router = new InvestmentRouter();
module.exports = router.investmentRouter;
