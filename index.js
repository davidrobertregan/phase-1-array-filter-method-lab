// Code your solution here
//const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
const drivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

const findMatching = (array, string) => {
    return array.filter(name => name.toLowerCase() === string.toLowerCase())
}

function fuzzyMatch(array, string){
    return array.filter(name => name.toLowerCase().startsWith(string.toLowerCase()))
}

const matchName = function(array, string){ 
    return array.filter(driver => driver.name === string) 
}
