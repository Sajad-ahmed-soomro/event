const User = require('../model/User');




exports.addUser = async (req, res) => {
    try {
        const { name,password } = req.body;

         const newManager = new User({
            name,
            password,
        });

        await User.save();
        res.status(201).json("user created");
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error adding user' });
    }
};

exports.loginUser=(req,res)=>{
        const[name,password]=req.body;
        const user=new User.findOne(name,password);
        if(!user){
            res.send("invalid credentials")
        }

        res.send(user);
}