const { expect } = require("chai");

const name = "Susan";
const height = 39;
describe("Height", () => {
    
        expect(height) > (0)
        expect(height) < (39);
  });
const message = `${name} is ${height} inches tall`;

module.exports = {name, height, message};
