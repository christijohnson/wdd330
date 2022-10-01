
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
];

    function buildList(assignments) {
        assignments.forEach(assignment => {
            let week = document.createElement('li');
            //week.textContent = assignment.label;

            let link = document.createElement('a');
            link.setAttribute('href', assignment.url);
            link.textContent = assignment.label;

            week.appendChild(link);

            document.querySelector('ol').appendChild(week);
        })
    }

    buildList(links);