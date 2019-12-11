const InvestmentRepository = require('../Repositories/investmentsRepository');
const log4js = require('../Utils/Logger');

const defaultLogger = log4js.getLogger('InvestmentService');

class InvestmentService {
  async getInvestmentsByIdProject(id, options) {
    const { logger = defaultLogger } = options;
    logger.info(`Start InvestmentsService.getInvestmentsByIdProject: params ${JSON.stringify(id)}`);

    return InvestmentRepository.getInvestmentByIdProject(id);
  }

  async createInvestment(investment, options) {
    const { logger = defaultLogger } = options;
    logger.info(`Start InvestmentService.createInvestment: params ${JSON.stringify(investment)}`);

    return InvestmentRepository.createInvestment(investment);
  }
}

const investmentService = new InvestmentService();
module.exports = investmentService;
