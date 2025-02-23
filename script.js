// Функция для начала диагностики
function startDiagnosis(issueType) {
    const mainMenu = document.getElementById('diagnostics');
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
    } else if (issueType === 'printerError') {
        diagnosisTitle.textContent = 'Проблема cо встроенным принтером чеков';
        diagnosisContent.innerHTML = `
            <p>Вставлена ли бумага для принтера чеков?</p>
            <button onclick="handlePrinterError('noPaper')">Нет</button>
            <button onclick="handlePrinterError('yesPaper')">Да</button>
        `;
    } else if (issueType === 'scannerError') {
        diagnosisTitle.textContent = 'Проблема cо сканером штрих-кодов';
        diagnosisContent.innerHTML = `
            <p>При нажатии кнопки сканера и наведении на штрих-код терминал издает звуковой сигнал?</p>
            <button onclick="handleScannerError('noScan')">Нет</button>
            <button onclick="handleScannerError('noDiagnos')">Да</button>
        `;
    }
}

function handleScannerError(answer) {
    const diagnosisContent = document.getElementById('diagnosisContent')
    if (answer === 'noScan') {
        diagnosisContent.innerHTML = `
        <p>Откройте приложение "Настройки". Выберете пункт "Диагностика сканера штрих-кода".</p>
        <p>После завершения повторите считывание штрих-кода. Проблема устранена?</p>
            <button onclick="handleScannerError('noDiagnos')">Нет</button>
            <button onclick="resetToMainMenu()">Да</button>
        `;
    } else if (answer === 'noDiagnos') {
        diagnosisContent.innerHTML = `
        <p>Протрите датчик блока сканера салфеткой из микрофибры.</p>
        <p>Повторите считывание штрих-кода. Проблема устранена?</p>
            <button onclick="handleScannerError('noClean')">Нет</button>
            <button onclick="resetToMainMenu()">Да</button>
        `;
    } else if (answer === 'noClean') {
        diagnosisContent.innerHTML = `
        <p>Возможно сканируемый штрих-код имеет дефекты.</p>
        <p>Попробуйте отсканировать другой штрих-код.</p>
            <button onclick="handleScannerError('noBadCode')">Все равно не считывается</button>
            <button onclick="resetToMainMenu()">Вернуться</button>
        `;
    } else if (answer === 'noBadCode') {
        diagnosisContent.innerHTML = `
        <p>Просьба с данной неисправностью обратиться в сервисный центр.</p>
            <a href="https://evotor.ru/pokupka-servis/#service" target="_blank">Список сервисных центров</a>
            <button onclick="resetToMainMenu()">Вернуться</button>
        `;
    }
}

function handlePrinterError(answer) {
    const diagnosisContent = document.getElementById('diagnosisContent')
    if (answer === 'yesPaper') {
        diagnosisContent.innerHTML = `
        <p>Крышка отсека бумаги закрыта и горит зеленый индикатор?</p>
            <button onclick="handlePrinterError('noOpenBox')">Нет</button>
            <button onclick="handlePrinterError('yesOpenBox')">Да</button>
        `;
    } else if (answer === 'noOpenBox') {
        diagnosisContent.innerHTML = `
        <p>Попробуйте открыть отсек, заново положить бумагу для принтера в разы отсека и аккуратно закрыть до щелчка.</p>
        <p>Повторите печать чека. Проблема устранена?</p>
            <button onclick="handlePrinterError('noOpenBox')">Нет</button>
            <button onclick="handlePrinterError('yesOpenBox')">Да</button>
        `;
    } else if (answer === 'yesOpenBox') {
        diagnosisContent.innerHTML = `
        <p>Откройте приложение на главном экране "Настройки". Выберете пункт "Диагностика принтера".</p>
        <p>Принтер распечатал тестовый чек для диагностики?</p>
            <button onclick="handlePrinterError('noProblemSolved')">Нет</button>
            <button onclick="handlePrinterError('yesTestReceipt')">Да</button>
        `;
    } else if (answer === 'yesTestReceipt') {
        diagnosisContent.innerHTML = `
        <p>Изображение и текст имеют дефекты?</p>
            <button onclick="handlePrinterError('noImageIssues')">Нет</button>
            <button onclick="handlePrinterError('noProblemSolved')">Да</button>
        `;
    } else if (answer === 'noImageIssues') {
        diagnosisContent.innerHTML = `
        <p>Неисправность принтера устранена?</p>
            <button onclick="handlePrinterError('noProblemSolved')">Нет</button>
            <button onclick="resetToMainMenu()">Да</button>
        `;
    } else if (answer === 'noProblemSolved') {
        diagnosisContent.innerHTML = `
            <p>Просьба с данной неисправностью обратиться в сервисный центр.</p>
            <a href="https://evotor.ru/pokupka-servis/#service" target="_blank">Список сервисных центров</a>
            <button onclick="resetToMainMenu()">Вернуться</button>
        `;
    }
}

// Обработка проблемы с питанием
function handlePowerIssue(answer) {
    const diagnosisContent = document.getElementById('diagnosisContent');

    if (answer === 'noPower') {
        diagnosisContent.innerHTML = `
            <p>Подключите кассу к рабочей розетке и попробуйте снова включить.</p>
            <p>Касса включилась?</p>
            <button onclick="resetToMainMenu()">Да</button>
            <button onclick="handlePowerIssue('yesPower')">Нет</button>
        `;
    } else if (answer === 'yesPower') {
        diagnosisContent.innerHTML = `
            <p>Горит ли световой индикатор на устройстве?</p>
            <button onclick="handlePowerIssue('indicatorOff')">Нет</button>
            <button onclick="handlePowerIssue('indicatorOn')">Да</button>
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
            <p>Wi-fi имеет доступ к интернету?</p>
            <button onclick="handleNetworkError('yesWifi')">Да</button>
            <button onclick="handleNetworkError('noInternet')">Нет</button>
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
            <p>Текущее Wi-Fi соединение не имеет доступа к интернету. Попробуйте подключиться к другой wi-fi сети.</p>
            <p>Красное сообщение об ошибке перестало отображаться?</p>
            <button onclick="resetToMainMenu()">Да</button>
            <button onclick="handleNetworkError('wifiError')">Нет</button>
        `;
    } else if (answer === 'wifiError') {
        diagnosisContent.innerHTML = `
            <p>Проблема с wi-fi модулем. Необходимо обратиться в сервисный центр.</p>
            <a href="https://evotor.ru/pokupka-servis/#service" target="_blank">Список сервисных центров</a>
            <button onclick="resetToMainMenu()">Вернуться</button>
        `;
    }

}

// Возврат в главное меню
function resetToMainMenu() {
    const mainMenu = document.getElementById('diagnostics');
    const diagnosisSection = document.getElementById('diagnosisSection');

    mainMenu.style.display = 'block';
    diagnosisSection.style.display = 'none';
}

// Функция для показа выбранного раздела
function showSection(sectionId) {
    // Скрываем все разделы
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    // Показываем выбранный раздел
    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.style.display = 'block';
    }
}

// Функция для показа/скрытия инструкции
function showInstruction(instructionId) {
    const instruction = document.getElementById(instructionId);
    if (instruction.style.display === 'none' || instruction.style.display === '') {
        instruction.style.display = 'block'; // Показываем инструкцию
    } else {
        instruction.style.display = 'none'; // Скрываем инструкцию
    }
}