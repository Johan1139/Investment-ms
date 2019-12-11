const log4js = require('../Utils/Logger');
const logUtils = require('../Utils/LogUtils');
const InvestmentsSchema = require('../Validators/InversementsSchema');
const Validator = require('../Validators/Validator');
const { BaseError } = require('../Utils/ErrorHandler');
const investmentService = require('../Services/investmentsService');

class InvestmentsController {
  async getInvestmentsByProject(req, res, next) {
    const logName = 'Get Investments By Project: ';
    const logger = logUtils.getLoggerWithId(log4js, logName);
    const { id } = req.params;

    logger.info(`Start InvestmentsController.getInvestmentsByIdProject, params: ${JSON.stringify(id)}`);

    try {
      return investmentService.getInvestmentsByIdProject(id, { logger, logName })
        .then((response) => res.send(response))
        .catch((error) => next(new BaseError(error.message)));
    } catch (error) {
      return next(error);
    }
  }

  async createInvestment(req, res, next) {
    const logName = 'Create Investment: ';
    const logger = logUtils.getLoggerWithId(log4js, logName);
    const { body } = req;
    logger.info(`Start investmentsController.create: params ${JSON.stringify(body)}`);

    try {
      Validator(InvestmentsSchema).validateRequest(body);

      return investmentService.createInvestment(body, { logger, logName })
        .then((response) => res.send({ message: 'Create Investment', response }))
        .catch((error) => next(new BaseError(error.message)));
    } catch (error) {
      return next(error);
    }
  }
}

const investmentsController = new InvestmentsController();
module.exports = investmentsController;
