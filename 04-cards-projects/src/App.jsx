import React from 'react'
import Card from './components/card.jsx'
// import User from './components/user.jsx'
const App = () => {
    // const arr = [{user:"sohail"},{user:"atif"},{user:"hidayat"},{user:"rajiya"},{user:"faiz"}];
// console.log(arr);

// const arr = [
//   {
//     name: "Sohail",
//     age: 18
//   },{
//     name: "Atif",
//     age: 20
//   },{                                 //arry of object (backend to frontend data recieve in the form of frontend)
//     name: "Hidayat",
//     age: 37
//   },{
//     name: "Rajiya",
//     age: 34
//   },{
//     name: "Faiz",
//     age: 20
//   }
// ]
// console.log(arr);

const arr1=[
  {
    "brandLogo": "https://logo.clearbit.com/google.com",
    "companyName": "Google",
    "datePosted": "2 weeks ago",
    "post": "Software Engineer",
    "tag1": "Full Time",
    "tag2": "Mid Level",
    "pay": "$140/hour",
    "location": "Mountain View, USA"
  },
  {
    "brandLogo": "https://logo.clearbit.com/microsoft.com",
    "companyName": "Microsoft",
    "datePosted": "1 week ago",
    "post": "Cloud Engineer",
    "tag1": "Full Time",
    "tag2": "Senior Level",
    "pay": "$130/hour",
    "location": "Redmond, USA"
  },
  {
    "brandLogo": "https://logo.clearbit.com/amazon.com",
    "companyName": "Amazon",
    "datePosted": "5 days ago",
    "post": "Backend Developer",
    "tag1": "Full Time",
    "tag2": "Mid Level",
    "pay": "$110/hour",
    "location": "Seattle, USA"
  },
  {
    "brandLogo": "https://logo.clearbit.com/meta.com",
    "companyName": "Meta",
    "datePosted": "3 weeks ago",
    "post": "Frontend Engineer",
    "tag1": "Full Time",
    "tag2": "Senior Level",
    "pay": "$135/hour",
    "location": "Menlo Park, USA"
  },
  {
    "brandLogo": "https://logo.clearbit.com/apple.com",
    "companyName": "Apple",
    "datePosted": "4 days ago",
    "post": "iOS Developer",
    "tag1": "Full Time",
    "tag2": "Mid Level",
    "pay": "$125/hour",
    "location": "Cupertino, USA"
  },
  {
    "brandLogo": "https://logo.clearbit.com/netflix.com",
    "companyName": "Netflix",
    "datePosted": "1 week ago",
    "post": "Platform Engineer",
    "tag1": "Full Time",
    "tag2": "Senior Level",
    "pay": "$150/hour",
    "location": "Los Gatos, USA"
  },
  {
    "brandLogo": "https://logo.clearbit.com/tesla.com",
    "companyName": "Tesla",
    "datePosted": "6 days ago",
    "post": "AI Engineer",
    "tag1": "Full Time",
    "tag2": "Senior Level",
    "pay": "$145/hour",
    "location": "Austin, USA"
  },
  {
    "brandLogo": "https://logo.clearbit.com/ibm.com",
    "companyName": "IBM",
    "datePosted": "2 weeks ago",
    "post": "Data Scientist",
    "tag1": "Full Time",
    "tag2": "Mid Level",
    "pay": "$115/hour",
    "location": "New York, USA"
  },
  {
    "brandLogo": "https://logo.clearbit.com/oracle.com",
    "companyName": "Oracle",
    "datePosted": "3 days ago",
    "post": "Database Engineer",
    "tag1": "Full Time",
    "tag2": "Senior Level",
    "pay": "$120/hour",
    "location": "Redwood City, USA"
  },
  {
    "brandLogo": "https://logo.clearbit.com/adobe.com",
    "companyName": "Adobe",
    "datePosted": "1 week ago",
    "post": "UI/UX Engineer",
    "tag1": "Full Time",
    "tag2": "Mid Level",
    "pay": "$105/hour",
    "location": "San Jose, USA"
  }
]
console.log(arr1);
  return (
    <div>
  {/* {arr.map(function(elem){
    return <h1>elem*3</h1>
  })} */}
      {arr1.map(function(elem){
        return <Card companyName={elem.companyName} post={elem.post} />
      })}
    </div>
  )
}

export default App
