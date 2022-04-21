const Spiderman = require('./../app/spiderman')

describe("Unit Test for Spiderman Class", () => {
    test('1) Create a Spiderman object', () => {
      const andrewGarfield = new Spiderman("Spiderman Sony", 31, 'Andrew Garfield', 31, "Sony");
      expect(andrewGarfield.name).toBe("Spiderman Sony")
      expect(andrewGarfield.age).toBe(31)
      expect(andrewGarfield.actor).toBe("Andrew Garfield")
      expect(andrewGarfield.movies).toBe(31)
      expect(andrewGarfield.studio).toBe("Sony")
      
    });
    test("2) Use the method getInfo()", ()=>{
        const TomHolland = new Spiderman("Spiderman Marvel", 25, "Tom Holland", 5, "Marvel")
        expect(TomHolland.getInfo()).toBe("Hey, I'm Tom Holland from Marvel studio")
    })
  })