const listaDeTarefas = [];
alert("Liste para mim 3 tarefas suas vamos lá:");
listaDeTarefas[0] = prompt("Tarefa 1:")
listaDeTarefas[1] = prompt("Tarefa 2:")
listaDeTarefas[2] = prompt("Tarefa 3:")



console.log("SUAS TAREFAS SÃO");
console.log(listaDeTarefas[0]);
console.log(listaDeTarefas[1]);
console.log(listaDeTarefas[2]);


const novaTarefa = prompt("Digite o índice de uma tarefa já realizada entre 0,1,2:");
listaDeTarefas.splice(novaTarefa,1)

console.log("SUAS TAREFAS ATUALIZADAS SÃO");
console.log(listaDeTarefas);












 