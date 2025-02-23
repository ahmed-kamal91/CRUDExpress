import express from "express"

const app = express();
const port = 3030; //CHANGE PORT IF NEEDED

// so you don't need to add it every time as middleware
app.use(express.json()); 


const users = [
    {"id": 1,"name" : "ahmed", "age" : 12},
    {"id": 2,"name" : "ahmed", "age" : 12},
    {"id": 3,"name" : "ahmed", "age" : 12},
    {"id": 4,"name" : "ali", "age" : 9},
    {"id": 5,"name" : "haassan", "age" : 5},
    {"id": 6,"name" : "sameh", "age" : 3},
    {"id": 7,"name" : "yasser", "age" : 120},
    {"id": 8,"name" : "saber", "age" : 90},
]

// get method [send data]
app.get("/users/:id?", (req, res) => {

    const id = req.params.id;

    // try to convert it to a number
    if (id && !isNaN(id)) {
        
        const numericId = Number(id);

        if (typeof numericId === 'number') { 
            
            // get user
            const foundUser = users.find(users => users.id === numericId);

            if (foundUser) {
                res.json(foundUser); // use json has higher peformance than using send.
            } else {
                res.json({ "msg": "USER NOT FOUND [CHECK ID]" }); 
            }
        }
    }
    else if (typeof id === 'string') {

        const name = id; // for context

        // check the name exist...
        const foundUserByName = users.filter(users => users.name === name);

        if (foundUserByName.length != 0) {
            res.json(foundUserByName); 
        }
        // NAME NOT FOUND
        else {
            res.json({ "msg": "USER  NOT EXIST" });
        }
    }
    else {
        res.json(users); // high performance
    }

});


// post method [adding data from users]
app.post("/users",(req, res) => {

    // get data
    const retrievedUsers = req.body;

    // get the last ID
    retrievedUsers.id = users[users.length - 1].id + 1;

    // append
    users.push(retrievedUsers);

    // feedback
    res.send("USER ADDED!");


})

// update method using put
app.put("/users/:id?", (req,res) => {

    // retrieve id + convert
    const id = Number(req.params.id);

    // check id passed in URL...
    if(id){

        // user finding...
        const foundUser = users.find( users => users.id == id);

        // check exist
        if(foundUser){

            // get passed data
            const retrievedData = req.body;

            // check name exist
            if(retrievedData.name){
                foundUser.name = retrievedData.name;
            }

            // check age exist
            if(retrievedData.age){
                foundUser.age = retrievedData.age;
            }

            res.json({"message" : "USER UPDATE"});      

        }
        // not exist
        else{
            res.json({"message" : "user not found [check inserted ID]"});
        }

    }
    // ID NOT PASSED
    else{
        res.json({"message": "ID NOT PASSED"});
    }

})


app.delete("/users/:id", (req, res) => {

    // retrieve id + convert
    const id = Number(req.params.id);

    // find the index of the user
    const userIndex = users.findIndex(user => user.id === id);

    // remove the user
    users.splice(userIndex, 1);

    // feedback
    res.json({ "message": "USER REMOVED" });

});


app.listen(port, function(){

    console.log("running the server from 3030 port....");
})
