
// const so = document.getElementById("count")
// console.log(so)
// console.dir(so)
// num = 0
// function countup(){
//     num += 1
//     so.textContent = num
// }
// function countdown(){
//     num -= 1
//     so.textContent = num
// }

// const timer = document.getElementById("timer");
// const start = document.getElementById("start");
// const stop = document.getElementById("stop");
// const result = document.getElementById("result");
// let id = undefined;
// start.onclick = function(){
//     console.log("hello word");
//     let value = timer.value;
//     console.log(value);
//     id = setInterval(function() {
//         value = value - 1;
//         result.innerHTML = value;
//         if( value === 0) {
//             clearInterval(id);
//             result.innerHTML = "Finish";
//         }
//     }, 1000);
// };
// stop.onclick = function() {
//     if(id) {
//         clearInterval(id);
//         result.innerHTML = "Stop";
//     }   
// };

// const quotes = [
//     {
//     quoteText: "Genius is one percent inspiration and ninety-nine percent perspiration.",
//     quoteAuthor: "Thomas Edison"
//     }, 
//     {
//     quoteText: "You can observe a lot just by watching.",
//     quoteAuthor: "Yogi Berra"
//     }, 
//     {
//     quoteText: "A house divided against itself cannot stand.",
//     quoteAuthor: "Abraham Lincoln"
//     }, 
//     {
//     quoteText: "Difficulties increase the nearer we get to the goal.",
//     quoteAuthor: "Johann Wolfgang von Goethe"
//     }, 
//     {
//     quoteText: "Fate is in your hands and no one elses",
//     quoteAuthor: "Byron Pulsifer"
//     }, 
//     {
//     quoteText: "Be the chief but never the lord.",
//     quoteAuthor: "Lao Tzu"
//     }, 
//     {
//     quoteText: "Nothing happens unless first we dream.",
//     quoteAuthor: "Carl Sandburg"
//     }, 
//     {
//     quoteText: "Well begun is half done.",
//     quoteAuthor: "Aristotle"
//     }, 
//     {
//     quoteText: "Life is a learning experience, only if you learn.",
//     quoteAuthor: "Yogi Berra"
//     }, 
//     {
//     quoteText: "Self-complacency is fatal to progress.",
//     quoteAuthor: "Margaret Sangster"
//     }, 
//     {
//     quoteText: "Peace comes from within. Do not seek it without.",
//     quoteAuthor: "Buddha"
//     },
//     {
//     quoteText: "What you give is what you get.",
//     quoteAuthor: "Byron Pulsifer"
//     }, 
//     {
//     quoteText: "We can only learn to love by loving.",
//     quoteAuthor: "Iris Murdoch"
//     }, 
//     {
//     quoteText: "Life is change. Growth is optional. Choose wisely.",
//     quoteAuthor: "Karen Clark"
//     }, 
//     {
//     quoteText: "You'll see it when you believe it.",
//     quoteAuthor: "Wayne Dyer"
//     }, 
//     {
//     quoteText: "Today is the tomorrow we worried about yesterday.",
//     quoteAuthor: ""
//     }, 
//     {
//     quoteText: "It's easier to see the mistakes on someone else's paper.",
//     quoteAuthor: ""
//     }, 
//     {
//     quoteText: "Every man dies. Not every man really lives.",
//     quoteAuthor: ""
//     }, 
//     {
//     quoteText: "To lead people walk behind them.",
//     quoteAuthor: "Lao Tzu"
//     }, 
//     {
//     quoteText: "Having nothing, nothing can he lose.",
//     quoteAuthor: "William Shakespeare"
//     }, 
//     {
//     quoteText: "Trouble is only opportunity in work clothes.",
//     quoteAuthor: "Henry J. Kaiser"
//     }, 
//     {
//     quoteText: "A rolling stone gathers no moss.",
//     quoteAuthor: "Publilius Syrus"
//     }, 
//     {
//     quoteText: "Ideas are the beginning points of all fortunes.",
//     quoteAuthor: "Napoleon Hill"
//     }, 
//     {
//     quoteText: "Everything in life is luck.",
//     quoteAuthor: "Donald Trump"
//     }, 
//     {
//     quoteText: "Doing nothing is better than being busy doing nothing.",
//     quoteAuthor: "Lao Tzu"
//     }, 
//     {
//     quoteText: "Trust yourself. You know more than you think you do.",
//     quoteAuthor: "Benjamin Spock"
//     }, 
//     {
//     quoteText: "Study the past, if you would divine the future.",
//     quoteAuthor: "Confucius"
//     }, 
//     {
//     quoteText: "The day is already blessed, find peace within it.",
//     quoteAuthor: ""
//     }, 
//     {
//     quoteText: "From error to error one discovers the entire truth.",
//     quoteAuthor: "Sigmund Freud"
//     }, 
//     {
//     quoteText: "Well done is better than well said.",
//     quoteAuthor: "Benjamin Franklin"
//     },
//     {
//     quoteText: "Bite off more than you can chew, then chew it.",
//     quoteAuthor: "Ella Williams"
//     }, 
//     {
//     quoteText: "Work out your own salvation. Do not depend on others.",
//     quoteAuthor: "Buddha"
//     }, 
//     {
//     quoteText: "One today is worth two tomorrows.",
//     quoteAuthor: "Benjamin Franklin"
//     }, 
//     {
//     quoteText: "Once you choose hope, anythings possible.",
//     quoteAuthor: "Christopher Reeve"
//     }, 
//     {
//     quoteText: "God always takes the simplest way.",
//     quoteAuthor: "Albert Einstein"
//     }, 
//     {
//     quoteText: "One fails forward toward success.",
//     quoteAuthor: "Charles Kettering"
//     }, 
//     {
//     quoteText: "From small beginnings come great things.",
//     quoteAuthor: ""
//     }, 
//     {
//     quoteText: "Learning is a treasure that will follow its owner everywhere",
//     quoteAuthor: "Chinese proverb"
//     }, 
//     {
//     quoteText: "Be as you wish to seem.",
//     quoteAuthor: "Socrates"
//     }, 
//     {
//     quoteText: "The world is always in movement.",
//     quoteAuthor: "V. Naipaul"
//     }, 
//     {
//     quoteText: "Never mistake activity for achievement.",
//     quoteAuthor: "John Wooden"
//     }, 
//     {
//     quoteText: "What worries you masters you.",
//     quoteAuthor: "Haddon Robinson"
//     }, 
//     {
//     quoteText: "One faces the future with ones past.",
//     quoteAuthor: "Pearl Buck"
//     }, 
//     {
//     quoteText: "Goals are the fuel in the furnace of achievement.",
//     quoteAuthor: "Brian Tracy"
//     }, 
//     {
//     quoteText: "Who sows virtue reaps honour.",
//     quoteAuthor: "Leonardo da Vinci"
//     }, 
//     {
//     quoteText: "Be kind whenever possible. It is always possible.",
//     quoteAuthor: "Dalai Lama"
//     }, 
//     {
//     quoteText: "Talk doesn't cook rice.",
//     quoteAuthor: "Chinese proverb"
//     }, 
//     {
//     quoteText: "He is able who thinks he is able.",
//     quoteAuthor: "Buddha"
//     }, {
//     quoteText: "Be as you wish to seem.",
//     quoteAuthor: "Socrates"
//     }, {
//     quoteText: "A goal without a plan is just a wish.",
//     quoteAuthor: "Larry Elder"
//     }, {
//     quoteText: "To succeed, we must first believe that we can.",
//     quoteAuthor: "Michael Korda"
//     }, {
//     quoteText: "Learn from yesterday, live for today, hope for tomorrow.",
//     quoteAuthor: "Albert Einstein"
//     }, {
//     quoteText: "A weed is no more than a flower in disguise.",
//     quoteAuthor: "James Lowell"
//     }, {
//     quoteText: "Do, or do not. There is no try.",
//     quoteAuthor: "Yoda"
//     }, {
//     quoteText: "All serious daring starts from within.",
//     quoteAuthor: "Harriet Beecher Stowe"
//     }, {
//     quoteText: "The best teacher is experience learned from failures.",
//     quoteAuthor: "Byron Pulsifer"
//     }, {
//     quoteText: "Think how hard physics would be if particles could think.",
//     quoteAuthor: "Murray Gell-Mann"
//     }, {
//     quoteText: "Love is the flower you've got to let grow.",
//     quoteAuthor: "John Lennon"
//     }, {
//     quoteText: "Don't wait. The time will never be just right.",
//     quoteAuthor: "Napoleon Hill"
//     }, {
//     quoteText: "One fails forward toward success.",
//     quoteAuthor: "Charles Kettering"
//     }, {
//     quoteText: "Time is the wisest counsellor of all.",
//     quoteAuthor: "Pericles"
//     }, {
//     quoteText: "You give before you get.",
//     quoteAuthor: "Napoleon Hill"
//     }, {
//     quoteText: "Wisdom begins in wonder.",
//     quoteAuthor: "Socrates"
//     }, {
//     quoteText: "Without courage, wisdom bears no fruit.",
//     quoteAuthor: "Baltasar Gracian"
//     }, {
//     quoteText: "Change in all things is sweet.",
//     quoteAuthor: "Aristotle"
//     }, {
//     quoteText: "What you fear is that which requires action to overcome.",
//     quoteAuthor: "Byron Pulsifer"
//     }
// ];
// const reload = document.getElementById("reload");
// const quote = document.getElementById("quote");
// const author= document.getElementById("author");
// reload.onclick = function () {
//     console.log("helloworld");
//     let randomIndex = Math.ceil(Math.random()*(quotes.length - 1));
//     console.log(randomIndex);
//     let result = quotes[randomIndex];
//     console.log(result);
//     quote.innerHTML = result.quoteText;
//     author.innerHTML = result.quoteAuthor;
// }

let timeSheetData = [
    {
        project:"Learn front-end",
        task: "Learn HTML" ,
        timeSpent:6,
    }, 
    {
        project:"Learn front-end",
        task: "Learn CSS",
        timeSpent:8,
    },
    {
        project:"Learn front-end",
        task: "Learn JS Variables and Data Types",
        timeSpent:6,
    },    {
        project:"Learn git",
        task: "Learn git basics",
        timeSpent:2,
    },
];
const tbody = document.getElementById("table-body");
const add = document.getElementById("add");
const project = document.getElementById("project");
const task = document.getElementById("task");
const timeSpent = document.getElementById("time-spent");
const update = document.getElementById("update");
let updateIndex = undefined;
console.log(tbody);

render(timeSheetData);

function render(arr) {
    tbody.innerHTML = "";
    arr.forEach(function(item,index){
        let row = `
        <tr>
            <td>${item.project}</td>
            <td>${item.task}</td>
            <td>${item.timeSpent}</td>
            <td id="${index}">
                <button class="delete">X</button>
                <button class="update">U</button>
            </td>
        </tr>
        `;
        // tbody.innerHTML += row;
        tbody.insertAdjacentHTML("beforeend",row);
    });
}
add.onclick = function () {
    let projectValue = project.value;
    let taskValue = task.value;
    let timeSpentValue = timeSpent.value;
    // console.log(projectValue, taskValue, timeSpendValue);
    let newproject = {
        project: projectValue,
        task: taskValue,
        timeSpent: timeSpentValue,
    };
    timeSheetData.push(newproject);
    render(timeSheetData);
    console.log(timeSheetData);
};
// // Su dung even object
tbody.onclick = function(e) {
    console.log(e.target);
    if(e.target.classList.contains("delete")) {
        // console.log("Helloworld");
        let index = e.target.parentElement.id;
        // console.log(index);
        timeSheetData.splice(index,1);
        render(timeSheetData);
    }
    if(e.target.classList.contains("update")) {
        let index = Number(e.target.classList.contains("update"));
        console.log(index);
        let item = timeSheetData[index];
        project.value = item.project;
        task.value = item.task;
        timeSpent.value = item.timeSpent;
        updateIndex = index;
        // Show nut update
        update.classList.remove("hidden");
    }
};

update.onclick = function() {
    if(updateIndex) {
        timeSheetData[updateIndex].project = project.value;
        timeSheetData[updateIndex].task = task.value;
        timeSheetData[updateIndex].timeSpent = timeSpent.value;
        render(timeSheetData);
        update.classList.add("hidden");
    }
};

// let request = fetch(`https://jsonplaceholder.typicode.com/todos`);
// console.log(request);
// request
// .then(function(response) {
//     // console.log(response.json);
//     return response.json;
// })
// .then(function(data) {
//     console.log(data);
// })
// .catch(function (error) {
//     console.log(error);
// });
