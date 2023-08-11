$(document).ready(function() {
    $('#formulario').submit(function(e) {
        e.preventDefault();
        const novaTarefa = $('#tarefa').val().trim();
        
        if (novaTarefa !== '') {
            const li = $('<li></li>').text(novaTarefa);
            $('#lista-tarefas').append(li);
            $('#tarefa').val('');
        }
    });

    $('#lista-tarefas').on('click', 'li', function() {
        $(this).toggleClass('completed');
    });
});