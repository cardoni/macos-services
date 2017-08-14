import pkg from '../package.json';

const REQUIRED_PACKAGE_KEYS = [
  // 'dependencies',
  'description',
  'devDependencies',
  // 'main',
  'name',
  'repository',
  'scripts',
  'version',
];

describe('Project Package and Service Basics', () => {
  it('\'package.json\' file exists', () => {
    expect(pkg).toBeDefined();
  });

  it('\'package.json\' contains keys', () => {
    expect(Reflect.ownKeys(pkg).length).toBeGreaterThan(0);
  });

  it('\'package.json\' contains values', () => {
    Object.keys(pkg).forEach((key) => {
      expect(pkg[key]).toBeDefined();
    });
  });

  it('\'package.json\' contains all _required_ keys', () => {
    expect(Reflect.ownKeys(pkg)).toEqual(expect.arrayContaining(REQUIRED_PACKAGE_KEYS));
  });
});
