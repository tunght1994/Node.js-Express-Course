const Task = require('../models/Task')


const getAllTasks = async (req,  res) => {
    try {
        const tasks = await Task.find({})
        res.status(201).json({
            success: true,
            data: tasks
        })
    } catch (error) {
        res.status(500).json({ msg : error })
    }

}

const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body)
        res.status(201).json({ 
            success : true,
            data: task
         }) 
    } catch (error) {
        res.status(500).json({ msg : error })
    }
}


const getTask = async (req, res) => {
    try {
        const {id: taskID} = req.params
        const task = await Task.findOne({_id: taskID})
        if(!task) return res.status(404).json({msg: `ID khong ton tai : ${taskID}`})
        res.status(201).json({
            success: true,
            data: task
        })
    } catch (error) {
        res.status(500).json({ msg : error })
    }
}


const updateTask = async (req, res) => {
    try {
        const {id: taskID} = req.params
        const task = await Task.findOneAndUpdate({_id: taskID}, req.body , {
            new: true,
            runValidators: true,
        })
        res.status(201).json({
            success: true,
            data: task
        })
    } catch (error) {
        res.status(500).json({ msg : error })
    }
}


const deleteTask = (req, res) => {
    res.send('delete Task')
}


module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}