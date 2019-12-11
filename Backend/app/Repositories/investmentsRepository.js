const DB = require('../Utils/DataBase');

class InvestmentsRepositories {
  constructor() {
    this.createInvestment = (investments) => DB('investments').insert(investments).returning('*');
    this.getInvestmentByIdProject = (id) => DB('investments').select('*').where({ idUser: id });
  }
}

const investmentsRepository = new InvestmentsRepositories();
module.exports = investmentsRepository;
