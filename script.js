document.getElementById('addTaskButton').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput'); // Поле ввода задачи
    const taskDate = document.getElementById('taskDate'); // Поле выбора даты
    const taskText = taskInput.value; // Получаем текст задачи
    const dateValue = taskDate.value; // Получаем значение даты

    // Проверка, чтобы оба поля не были пустыми
    if (taskText && dateValue) {
        const li = document.createElement('li'); // Создаем новый элемент списка
        li.textContent = `${taskText} (до ${dateValue})`; // Добавляем текст и дату

        // Создаем кнопку для удаления задачи
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Удалить';
        deleteButton.onclick = function() {
            li.remove(); // Удаляем элемент списка при нажатии
        };

        li.appendChild(deleteButton); // Добавляем кнопку в элемент списка
        
        // Добавляем возможность отметки задачи
        li.onclick = function() {
            li.classList.toggle('completed'); // Добавляем/убираем класс 'completed'
        };

        document.getElementById('taskList').appendChild(li); // Добавляем элемент списка в ul
        
        // Очистка полей ввода
        taskInput.value = ''; // Очистка поля ввода задачи
        taskDate.value = ''; // Очистка поля выбора даты
    } else {
        alert('Пожалуйста, заполните оба поля!'); // Сообщение об ошибке
    }
});
