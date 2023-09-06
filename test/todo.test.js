const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../index"); // Replace with the path to your Express app
const expect = chai.expect;

chai.use(chaiHttp);

describe("GET /api/todos", () => {
  it("should return all todos", (done) => {
    chai
      .request("http://localhost:3000")
      .get("/api/todos")
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an("array");
        done();
      });
  });
});

describe("POST /api/todos", () => {
  it("should add a new todo", (done) => {
    const newTodo = {
      title: "Test Todo",
      completed: false,
    };

    chai
      .request("http://localhost:3000")
      .post("/api/todos")
      .send(newTodo)
      .end((err, res) => {
        expect(res).to.have.status(201);
        expect(res.body).to.be.an("object");
        expect(res.body.title).to.equal(newTodo.title);
        expect(res.body.completed).to.equal(newTodo.completed);
        done();
      });
  });
});

describe("PUT /api/todos/:id", () => {
  it("should update a todo", (done) => {
    const updatedTodo = {
      title: "Updated Todo",
      completed: true,
    };

    const id = "_your_test id here"; //send any test ID from db
    // Assuming you have a valid todo ID
    const todoIdToUpdate = id;

    chai
      .request("http://localhost:3000")
      .put(`/api/todos/${todoIdToUpdate}`)
      .send(updatedTodo)
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an("object");
        expect(res.body.title).to.equal(updatedTodo.title);
        expect(res.body.completed).to.equal(updatedTodo.completed);
        done();
      });
  });
});

const deleteID = "_your_test id here"; //send any test ID from db
describe("DELETE /api/todos/:id", () => {
  it("should delete a todo", (done) => {
    // Assuming you have a valid todo ID to delete
    const todoIdToDelete = deleteID;

    chai
      .request("http://localhost:3000")
      .delete(`/api/todos/${todoIdToDelete}`)
      .end((err, res) => {
        expect(res).to.have.status(204); // 204 indicates a successful deletion with no content
        done();
      });
  });
});
