import db from "../config/db.js";

// fetch todos by user's id
export const getTodos = (req, res) => {
  // console.log("user request \n",req)
  const query = 'SELECT * FROM todos WHERE user_id = ?';
  db.query(query, [req.user.id])
    .then(results => {
      res.status(200).json(results[0]);
    })
    .catch(err => {
      console.log(err);
    })
}

// adding todo to the list...
export const addTodo = async (req, res) => {
  const { title } = req.body;

  if (!title) return res.status(400).json({ error: "Title is required" });

  const query = "INSERT INTO todos (title, user_id) VALUES (?, ?)";
  db.query(query, [title, req.user.id])
    .then(result => {
      res.status(201).json({
        message: "Todo created successfully",
        todo: {
          id: result[0].insertId,
          title, completed: false
        }
      });
    })
    .catch(err => {
      console.error("Error creating todo:", err);
      res.status(500).json({ error: "Internal server error" });
    })
}

//deleting todo by id...
export const deleteTodo = async (req, res) => {

  const query = "DELETE FROM todos WHERE id = ? AND user_id = ?";
  db.query(query, [req.query.id, req.user.id])
    .then(result => {
      if (!result[0].affectedRows) return res.status(400).json({ message: "Unable to delete." })
      res.json({ message: 'Todo deleted' })
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: 'Failed to delete todo' })
    })
}


// toggle the todo completed....
export const toggleTodo = async (req, res) => {

  const query = 'UPDATE todos SET completed = NOT completed WHERE id = ? AND user_id = ?';
  db.query(query, [req.query.id, req.user.id])
    .then(result => {
      if (!result[0].affectedRows) return res.status(400).json({ message: "Unable to toggle due to Unauthorized user." })
      res.json({ id: req.query.id })
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ error: 'Failed to toggle todo' })
    })
}