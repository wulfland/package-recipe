/**
 * Unit tests for the index.js
 */

describe('index.js', () => {
  it('console.log the text "Hello world!"', () => {
    const indexMock = jest.spyOn(console, 'log')

    require('../src/index')

    expect(indexMock).toHaveBeenCalledWith('Hello world!')
  })
})
