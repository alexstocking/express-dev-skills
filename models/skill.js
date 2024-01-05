const skills = [
  {id: 1, skill: 'HTML', difficulty: 'Easy', proficiency: '8/10', description: 'The ability to create basic HTML, creating the outline for webpages.'},
  {id: 2, skill: 'CSS', difficulty: 'Easy', proficiency: '8/10', description: 'Adding styling to HTML elements.'},
  {id: 3, skill: 'JavaScript Functions', difficulty: 'Slightly Challenging', proficiency: '7/10', description: 'Using JavaScript to create functions that will add functionality to a webpage.'},
  {id: 4, skill: 'HTTP Methods(Verbs)', difficulty: 'Challenging', proficiency: '6/10', description: 'A list of request methods that indicate the desired action to be performed on a resource.'},
  {id: 5, skill: 'Express', difficulty: 'Challenging', proficiency: '5/10', description: 'A web application framework that helps building a website.'},
  {id: 6, skill: 'Model-View-Controller(MVC)', difficulty: 'Challenging', proficiency: '6/10', description: 'A software architectural pattern used for designing and organizing applications, particularly in the context of web development.'},
]

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    update
  };
	
  function getOne(id) {
    id = parseInt(id)
    return skills.find(skill => skill.id === id)
  }

  function getAll() {
    return skills;
  }

  function create(skill) {
    skill.id = Date.now() % 1000
    skills.push(skill)
    console.log(skill.id)
  }

  function deleteOne(id) {
    id = parseInt(id)
    const idx = skills.findIndex(skill => skill.id === id)
    skills.splice(idx, 1)
  }

  function update(id, updatedSkill) {
    id = parseInt(id)
    const skill = skills.find(skill => skill.id === id)
    Object.assign(skill, updatedSkill)
  }