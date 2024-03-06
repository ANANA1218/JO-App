import EpreuveRepository from '../repository/epreuveRepository.js';

const EpreuveService = {
  getAllEpreuves: () => EpreuveRepository.getAll(),
  getEpreuveById: (id) => EpreuveRepository.getById(id),
  createEpreuve: (epreuve) => EpreuveRepository.create(epreuve),
  updateEpreuve: (id, epreuveData) => EpreuveRepository.update(id, epreuveData),
  deleteEpreuve: (id) => EpreuveRepository.delete(id),
};

export default EpreuveService;
