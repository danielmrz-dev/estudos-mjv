import { UniqueIdService } from "./unique-id.service";

describe(UniqueIdService.name, () => {

  let prot = UniqueIdService.prototype;
  let service: UniqueIdService;

  beforeEach(() => {
    service = new UniqueIdService();
  });
  

  it(`${prot.generateUniqueIdWithPrefix.name}() should generate unique id when called with prefix `, () => {
    const id = service.generateUniqueIdWithPrefix('app');
    expect(id.startsWith('app')).toBeTrue();
  });

  it(`${prot.generateUniqueIdWithPrefix.name}() should not generate duplicated ids when called multiple times`, () => {
    const ids = new Set();
    for (let i = 0; i < 50; i++) {
      ids.add(service.generateUniqueIdWithPrefix('app'));
    }
    expect(ids.size).toEqual(50);
  });

  it(`${prot.getNumberOfGeneratedIds.name}() should return correct number of generated ids when called`, () => {
    const ids = new Set();
    for (let i = 0; i < 50; i++) {
      ids.add(service.generateUniqueIdWithPrefix('app'));
    }
    expect(service.getNumberOfGeneratedIds()).toEqual(50);
  });

  it(`${prot.generateUniqueIdWithPrefix.name}() should throw error if prefix is not provided`, () => {
    const invalidValues = ['213-', '%%%-', '@$#'];
    invalidValues.forEach(value => {
      expect(() => service.generateUniqueIdWithPrefix(value))
        .withContext(`O prefixo '${value}' é válido.`)
        .toThrow(new Error('Prefix must be provided.'));
    })
  });
  
  
  

});
