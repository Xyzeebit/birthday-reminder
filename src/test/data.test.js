import data from "../data";

describe("data", () => {
  it("should return a correct data snapshot", () => {
    expect(data).toMatchInlineSnapshot(`
      Array [
        Object {
          "age": 35,
          "id": 1,
          "name": "Kim Peters",
          "photo": "https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        Object {
          "age": 27,
          "id": 2,
          "name": "John Rock",
          "photo": "https://images.pexels.com/photos/1080213/pexels-photo-1080213.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        Object {
          "age": 32,
          "id": 3,
          "name": "Esther Von",
          "photo": "https://images.pexels.com/photos/1081685/pexels-photo-1081685.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        Object {
          "age": 38,
          "id": 4,
          "name": "Nelson Bill",
          "photo": "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        Object {
          "age": 23,
          "id": 5,
          "name": "Michael Joseph",
          "photo": "https://images.pexels.com/photos/1559486/pexels-photo-1559486.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
      ]
    `);
  });
});
