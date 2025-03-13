const event=require('../model/Event')


exports.createEvent=async(req,res)=>{
    const [name,description,catagory,eventDate,time]=req.body;
    const event = new Event({ name, description, catagory,date, category, reminder });
    await event.save();
}


exports.getEventById=async(req,res)=>{
    const [id]=req.body;
    const foundevent =event.findById(id); 
    if(!foundevent){
        res.send("event not found");
    }
    res.send(foundevent);
}



exports.getAllEvents = async (req, res) => {
    try {
        const { sortBy } = req.query; 
        let sortOptions = {};

        if (sortBy === "date") {
            sortOptions.date = 1; 
        } else if (sortBy === "category") {
            sortOptions.category = 1;
        }
        const events = await Event.find().sort(sortOptions);

        if (!events.length) {
            return res.status(404).json({ message: "No events found" });
        }

        res.status(200).json(events);
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
};
