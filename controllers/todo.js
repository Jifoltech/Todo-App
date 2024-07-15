const Todo = require("../models/Todo");
const moment = require("moment");

const homeController = async (req, res, next) => {
  try {
    const todos = await Todo.find({}).sort({ createdAt: -1 });
    res.locals.moment = moment;
    res.render("index", { title: "List todo", todos });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const addTodoFormController = (req, res, next) => {
  try {
    res.render("newTodo", { title: "Add todo" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const updateTodoFormController = async (req, res, next) => {
  try {
    const { id } = req.query;
    if (!id) {
      return res.status(404).send("ID parameter is required");
    }
    const todo = await Todo.findById(id);
    if (!todo) {
      return res.status(400).send("Todo not found");
    }
    res.render("updateTodo", { title: "Update todo", todo });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const deleteTodoFormController = (req, res, next) => {
  try {
    const { id } = req.query;
    res.render("deleteTodo", { title: "Delete todo", id });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const addTodoContoller = async (req, res, next) => {
  try {
    const { title, desc } = req.body;
    if (!title) {
      res.status(404).json({ message: "Title is required" });
    }
    const todos = new Todo({ title, desc });
    await todos.save();
    res.redirect("/");
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const updateTodoContoller = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { title, desc } = req.body;
    const todo = await Todo.findById(id);
    if (!todo) {
      return res.status(400).send("Todo not found");
    }
    todo.title = title;
    todo.desc = desc;
    await todo.save();
    res.redirect("/");
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const deleteTodoController = async (req, res, next) => {
  try {
    const { id, confirm } = req.query;
    if (confirm === "yes") {
      await Todo.findByIdAndDelete(id);
    }
    res.redirect("/");
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  homeController,
  addTodoFormController,
  updateTodoFormController,
  deleteTodoFormController,
  addTodoContoller,
  updateTodoContoller,
  deleteTodoController,
};
