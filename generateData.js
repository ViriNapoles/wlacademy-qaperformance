const { func } = require('assert-plus');
const Faker = require('faker');

function generateProjectData (projectContext, events, done){
    const projectName = Faker.random.words(2);
    projectContext.vars.projectName = projectName;
    return done();
}

function generateTaskData (taskContext, events, done){
    const taskName = Faker.random.words(3);
    const updateTaskContent = Faker.random.words(4);
    taskContext.vars.taskName = taskName;
    taskContext.vars.updateTaskContent = updateTaskContent;
    return done();
}

module.exports = {
    generateProjectData,
    generateTaskData
};