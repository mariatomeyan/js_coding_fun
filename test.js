// ******************** TASK 1 ********************
const task1 = [
  "apple",
  "pear",
  "lemon",
  "orange",
  "pineapple",
  "tomato",
  "lettuce",
  "mango",
  "apple",
  "pineapple",
  "lemon",
  "pear",
  "pear",
];

// Count how many Apples, Pears, Lemons, Oranges, Pineapples, Tomatoes, Mangos and Bananas are in the list.

function countItems(item, items) {
    var key = item.charAt(0).toUpperCase() + item.slice(1)
    return {
    [key]:  items.filter((x) => x.toLowerCase() === item.toLowerCase()).length,
    };
}

(function(){
 var res = countItems('apple', task1)
 console.log(res)
})();




// ******************** TASK 2 ********************

// a) What is the performance, in terms of, Big O notation, of the below code?
// b) Write a solution that has better performance
// c) What is the performance of your new solution?

const domains = { // Example to show data shape only.
    "one.com": { policy: "block" },
    "two.com": { policy: "none" },
    "three.com": { policy: "none" },
    "four.com": { policy: "block" },
}

const getBlockPolicyState = (domains) => {
    numDomains = Object.keys(domains).length;
    anyBlockedDomain = false;
    areAllDomainsBlocked = false;
    blockedDomains = []

    for (let i = 0; i < numDomains; i++) {
         if(Object.entries(domains)[i][1].policy === "block") {
             anyBlockedDomain = true
             blockedDomains.push(Object.entries(domains)[i])
         }
    }
    areAllDomainsBlocked = blockedDomains.length === numDomains ? true : false
    return { anyBlockedDomain, areAllDomainsBlocked };
};


(function(){
   console.log(getBlockPolicyState(domains))
})();



// ******************** TASK 3 ********************

// Find the first recurring character of the below lists
let task8 = [
    [2,5,1,2,3,5,1,2,4],
    [2,1,1,2,3,5,1,2,4],
    [2,3,4,5],
    [2,5,5,2,3,5,1,2,4]
]

function getFirstRecurringCharacter(list) {
    let hash = new Set();

    for (let i = 0; i <= list.length - 1; i++) {
        let character = list[i];
        if (hash.has(character))
            return character;
        else
            hash.add(character);
    }

    return undefined;
}

(function(){
    task8.map(item => {
     let res = getFirstRecurringCharacter(item)
        console.log('Recurring character is: ', res)
    })
})();

