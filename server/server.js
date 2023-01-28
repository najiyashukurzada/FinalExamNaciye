const mongoose = require('mongoose')
const express =  require('express')
const cors = require('cors')
const PORT = 8080

const app = express()

app.use(express.json())
app.use(cors())

const UserSchema = new mongoose.Schema({
    name: String,
    subject: String,
    description: String,
})

const UserModel = mongoose.model("User", UserSchema)

mongoose.set("strictQuery", false)
mongoose.connect(`mongodb+srv://najiya:najiya@cluster0.ldwafk6.mongodb.net/?retryWrites=true&w=majority`)
        .then(() =>  console.log("connected"))
        .catch(() =>  console.error(err))


app.get('/user' , (req, res) => {
    UserModel.find({}, (error, data) => {
        if(error) res.status(500).send({error})
        res.send(data)
    })
})

app.get('/user/:id', async(req, res) => {
    const {id} = req.params
    const User = await UserModel.findById(id)
    return res.status(200).send({"User": User})
})

app.post('/user', (req, res) =>{
    const newUser = new UserModel({
        ...req.body
    })
    newUser.save()
    res.send(newUser)
})

app.delete('/user/:id', async(req, res) => {
    const {id} = req.params
    const deleteUser = await UserModel.findByIdAndDelete(id)
    res.send(deleteUser)
})

app.listen( PORT, ()=> {
    console.log(`Server is running ${PORT}`)
})