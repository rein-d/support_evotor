// Функция для начала диагностики
function startDiagnosis(issueType) {
    const mainMenu = document.getElementById('mainMenu');
    const diagnosisSection = document.getElementById('diagnosisSection');
    const diagnosisTitle = document.getElementById('diagnosisTitle');
    const diagnosisContent = document.getElementById('diagnosisContent');

    // Скрываем главное меню и показываем раздел диагностики
    mainMenu.style.display = 'none';
    diagnosisSection.style.display = 'block';

    // Очищаем содержимое диагностики
    diagnosisContent.innerHTML = '';

    // Логика для разных типов проблем
    if (issueType === 'powerIssue') {
        diagnosisTitle.textContent = 'Проблема: Касса не включается';
        diagnosisContent.innerHTML = `
            <p>Подключено ли питание?</p>
            <button onclick="handlePowerIssue('noPower')">Нет</button>
            <button onclick="handlePowerIssue('yesPower')">Да</button>
        `;
    } else if (issueType === 'networkError') {
        diagnosisTitle.textContent = 'Проблема: Горит красное сообщение с ошибкой подключения к сети';
        diagnosisContent.innerHTML = `
            <p>Касса подключена к Wi-Fi?</p>
            <button onclick="handleNetworkError('noWifi')">Нет</button>
            <button onclick="handleNetworkError('yesWifi')">Да</button>
        `;
    }
}

// Обработка проблемы с питанием
function handlePowerIssue(answer) {
    const diagnosisContent = document.getElementById('diagnosisContent');

    if (answer === 'noPower') {
        diagnosisContent.innerHTML = `
            <p>Подключите кассу к рабочей розетке и попробуйте снова включить.</p>
            <button onclick="handlePowerIssue('didItHelp')">Помогло?</button>
        `;
    } else if (answer === 'yesPower') {
        diagnosisContent.innerHTML = `
            <p>Горит ли световой индикатор на устройстве?</p>
            <button onclick="handlePowerIssue('indicatorOn')">Да</button>
            <button onclick="handlePowerIssue('indicatorOff')">Нет</button>
        `;
    } else if (answer === 'didItHelp') {
        diagnosisContent.innerHTML = `
            <p>Проблема решена! Вернуться в главное меню?</p>
            <button onclick="resetToMainMenu()">Вернуться</button>
        `;
    } else if (answer === 'indicatorOn') {
        diagnosisContent.innerHTML = `
            <p>Проблема с экраном. Необходимо обратиться в сервисный центр.</p>
            <a href="https://evotor.ru/pokupka-servis/#service" target="_blank">Список сервисных центров</a>
            <button onclick="resetToMainMenu()">Вернуться</button>
        `;
    } else if (answer === 'indicatorOff') {
        diagnosisContent.innerHTML = `
            <p>Проблема с блоком питания. Необходимо обратиться в сервисный центр.</p>
            <a href="https://evotor.ru/pokupka-servis/#service" target="_blank">Список сервисных центров</a>
            <button onclick="resetToMainMenu()">Вернуться</button>
        `;
    }
}

// Обработка проблемы с сетью
function handleNetworkError(answer) {
    const diagnosisContent = document.getElementById('diagnosisContent');

    if (answer === 'noWifi') {
        diagnosisContent.innerHTML = `
            <p>Подключите кассу к активному интернет-соединению по Wi-Fi.</p>
            <button onclick="startDiagnosis('networkError')">Проверить снова</button>
        `;
    } else if (answer === 'yesWifi') {
        diagnosisContent.innerHTML = `
            <p>Откройте приложение "Настройки" на главном экране. Выберите пункт "Диагностика сети".</p>
            <p>Красное сообщение об ошибке перестало отображаться?</p>
            <button onclick="resetToMainMenu()">Да</button>
            <button onclick="handleNetworkError('noInternet')">Нет</button>
        `;
    } else if (answer === 'noInternet') {
        diagnosisContent.innerHTML = `
            <p>Текущее Wi-Fi соединение не имеет доступа к интернету. Попробуйте подключиться к другой сети.</p>
            <button onclick="startDiagnosis('networkError')">Проверить снова</button>
        `;
    }
}

// Возврат в главное меню
function resetToMainMenu() {
    const mainMenu = document.getElementById('mainMenu');
    const diagnosisSection = document.getElementById('diagnosisSection');

    mainMenu.style.display = 'block';
    diagnosisSection.style.display = 'none';
}