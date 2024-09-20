/*
Create an object called facebookProfile. The object should have 3 properties:

your name
the number of friends you have, and
an array of messages you've posted (as strings)
The object should also have 4 methods:

postMessage(message) - adds a new message string to the array
deleteMessage(index) - removes the message corresponding to the index provided
addFriend() - increases the friend count by 1
removeFriend() - decreases the friend count by 1
*/

const facebookProfile = {
    name: "Dylan",
    friends: 100,
    messages: ["Hello!", "Goodbye!", "Another message!"],
    postMessage: function(message) {
        this.messages.push(message);
    },
    deleteMessage: function(index) {
        this.messages.splice(index, 1);
    },
    addFriend: function() {
        this.friends++;
    },
    removeFriend: function() {
        this.friends--;
    }
};

console.log(facebookProfile);
facebookProfile.postMessage("Another message!");
console.log(facebookProfile);
facebookProfile.deleteMessage(1);
console.log(facebookProfile);
facebookProfile.addFriend();
console.log(facebookProfile);
facebookProfile.removeFriend();
console.log(facebookProfile);

