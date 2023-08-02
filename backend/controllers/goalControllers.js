const asyncHandler = require('express-async-handler');

//@desc    Get goal: 
//@route   GET /api/goals
//@access  Private
const getGoals = asyncHandler(async (req, res) => {
    res.status(200).json({ message: "get goals" });
})


//@desc    Set goal: 
//@route   POST /api/goals
//@access  Private
const setGoal = asyncHandler(async (req, res) => {
    if(!req.body.text){
        res.status(400)
        throw new Error('Please add a text field ')
    }
    res.status(200).json({message:'Set Goal'})
})


//@desc    Update goal:
//@route   PUT /api/goals/:id 
//@access  Private
const updateGoal =asyncHandler( async (req, res) => {
    res.status(200).json({ message: `Update goals ${req.params.id}` });
})


//@desc    delete gridAutoColumns: 
//@route   Delete /api/goals
//@access  Private
const deleteGoal = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Delete goals ${req.params.id}` });
})

module.exports = {
    getGoals, setGoal, updateGoal, deleteGoal,
}