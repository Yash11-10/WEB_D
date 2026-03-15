function userForm(req,res){

    res.write(`
    <form action="/submit" method="post">
        <input type="text" placeholder="Enter Your Name" name="name" />
        <input type="text" placeholder="Enter Your Email" name="Email" />
        <input type="text" placeholder="Enter Your age" name="age" />
        <button>Submit</button>
    </form>
    `);

}

module.exports = userForm;