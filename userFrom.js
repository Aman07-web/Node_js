function userform(req, resp) {
  resp.write(`
    <h1>User Form</h1>
    <form action="/userdataSubmit" method="POST">
      <input type="text" name="name" placeholder="Enter your name" /><br><br>
      <input type="password" name="password" placeholder="Enter your password" /><br><br>
      <button type="submit">Submit</button>
    </form>
  `);
  resp.end();
}

module.exports = userform;