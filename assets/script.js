

//this is a array 
var topics = ['HTML', 'CSS', 'Git', 'JavaScript'];

//Math function that helps us select a random number
var randomTopic = topics[Math.floor(Math.random() * topics.length)];

//create a new function named <listTopics>
function listTopics() {
    for (var x = 0; x < topics.length; x++) {
      console.log(topics[x]);
    }
  }


// loopin array ->topics
// for (var x = 0; x < topics.length; x++) {
//     console.log(topics[x]);
//    }

//var topic = "HTML";

function selectTopic() {
    if (randomTopic=== 'HTML') {
      console.log("Let's study HTML!");
    } else if (randomTopic=== 'CSS') {
      console.log("Let's study CSS!");
    } else if (randomTopic=== 'Git') {
      console.log("Let's study Git!");
    } else if (randomTopic=== 'JavaScript') {
      console.log("Let's study JavaScript!");
    } else {
      console.log('Please try again!');
    }
  }

  //code to execute
  console.log('Here are the topics we learned through Prework:');
  listTopics();

  console.log('Which topic should we study first?');
  selectTopic();
