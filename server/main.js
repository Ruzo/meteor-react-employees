import { Meteor } from 'meteor/meteor';
import {Employees} from '../imports/collections/employees';
import {helpers} from 'faker';



Meteor.startup(() => {
  let recordsCount = Employees.find({}).count();
  if(!recordsCount){
    for(let i = 1; i<=1000; i++){
      let {name, email, phone} = helpers.createCard();
      let image = `https://robohash.org/${name}?set=set2`;
      Employees.insert({name, email, phone, image});
    }
  }

  // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  // ! Make sure to run 'meteor remove autopublish' in console !
  // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

  Meteor.publish('employees', (limitCount) => {
    return Employees.find({}, {limit: limitCount});
  });

});
