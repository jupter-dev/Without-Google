const informations = [
    {tasks: 6, complete: 4, color: "red"},
    {tasks: 6, complete: 1, color: "green"},
    {tasks: 6, complete: 3, color: "blue"},
];

const barLocation = document.getElementById("progress-bars");

informations.forEach((bar,index)=>{
    const progress = calculateProgression(bar.tasks, bar.complete);
    barLocation.innerHTML += `
    <div class="progress-bar">
        <div style="background-color: ${bar.color}; width: ${progress}%;">
        ${progress.toFixed(0)}%
        </div>
    </div>
    `;
});

function calculateProgression(task, complete){
    if(task == 0 || complete == 0){
        return 0;
    }
    return (complete/task) * 100;
};