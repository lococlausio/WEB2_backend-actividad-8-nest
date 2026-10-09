import { Test, TestingModule } from '@nestjs/testing';
import { EmprendedoresController } from './emprendedores.controller';
import { EmprendedoresService } from './emprendedores.service';

describe('EmprendedoresController', () => {
  let controller: EmprendedoresController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EmprendedoresController],
      providers: [EmprendedoresService],
    }).compile();

    controller = module.get<EmprendedoresController>(EmprendedoresController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
