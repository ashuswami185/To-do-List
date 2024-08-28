$(document).ready(function () {

    // Adding a new task 
    $('#add-task-btn').click(function () {
        const taskText = $('#new-task-input').val();
        if (taskText.trim() !== "") {
            const newTask = `<li class="task-item">
                                <span class="task-text">${taskText}</span>
                                <div class="task-actions">
                                    <i class="fas fa-check complete-btn"></i>
                                    <i class="fas fa-trash delete-btn"></i>
                                </div>
                             </li>`;
            $('#task-list').append(newTask);

            // Animating the task 
            anime({
                targets: '.task-item',
                translateY: [-20, 0],
                opacity: [0, 1],
                duration: 500,
                easing: 'easeOutExpo'
            });

            $('#new-task-input').val(''); 
        }
    });

    // marking task as complete 
    $(document).on('click', '.complete-btn', function () {
        const taskItem = $(this).closest('.task-item');

        // moving task to completed section 
        taskItem.fadeOut(300, function () {
            taskItem.removeClass('task-item').addClass('completed-item');
            $('#completed-task-list').append(taskItem.fadeIn(300));
        });
    });

    //  deleted task 
    $(document).on('click', '.delete-btn', function () {
        const taskItem = $(this).closest('.task-item, .completed-item ');

        // animation of delted task ;
        anime({
            targets: taskItem[0],
            translateX: [0, -50],
            opacity: [1, 0],
            duration: 300,
            easing: 'easeInExpo',
            complete: function () {
                taskItem.remove();

            }
        });
    });
});
