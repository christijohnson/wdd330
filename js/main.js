
const links = [
    {
        label: "Week 1 notes",
        url: "week1/index.html"
    },
    {
        label: "Week 2 notes",
        url: "week2/index.html"
    },
    {
        label: "Week 3 notes",
        url: "week3/index.html"
    },
    {
        label: "Week 4 notes",
        url: "week4/index.html"
    },
    {
        label: "Week 5 notes",
        url: "week5/index.html"
    },
    {
        label: "Week 6 ToDo App",
        url: "week6/index.html"
    },
    {
        label: "Week 7 notes",
        url: "week7/index.html"
    },
    {
        label: "Week 8 notes",
        url: "week8/index.html"
    },
    {
        label: "Week 9 notes",
        url: "week9/index.html"
    },
    {
        label: "Week 10 notes",
        url: "week10/index.html"
    },
    {
        label: "Week 11 notes",
        url: "week11/index.html"
    },
];
    count = 0;
    function buildList(assignments) {
        assignments.forEach(assignment => {
            count = count + 1;
            let week = document.createElement('li');
            //week.textContent = assignment.label;

            let link = document.createElement('a');
            link.setAttribute('href', assignment.url);
            link.textContent = assignment.label;

            week.appendChild(link);
            
            if (count <= 7){
                document.getElementById('block1').appendChild(week);
            } else {
                document.getElementById('block2').appendChild(week);
            }
        })
    }

    buildList(links);