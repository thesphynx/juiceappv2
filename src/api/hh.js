import * as axios from 'axios'

// Тестовый обьект настройки запроса
let options = {
    params: {
        text: 'продавец',
        only_with_salary: true,
        area: '131',
        per_page: '100'
    }
};




//Высчитывает среднюю минимальную зарплату для данной вакансии.
export function getMediumSalary(options) {
    axios.get('https://api.hh.ru/vacancies', options).then(response => {
        let stringCheck = options.params.text.toUpperCase();
        let result = response.data.items
        let totalSalary = 0;
        let counter = 0;
        for (let i = 0; i < result.length; i++) {
            let item = result[i];
            let salaryFrom = item.salary.from;
            let itemName = item.name.toUpperCase()
                //Проверяем соответствие названия
            if (itemName.indexOf(stringCheck) != -1) {
                // Проверка зарплаты за смену ( средняя 15 смен ), увеличиваем результат и счетчик
                if (salaryFrom < 5000) {
                    totalSalary = totalSalary + (salaryFrom * 15);
                    counter++
                } else {
                    totalSalary = totalSalary + salaryFrom;
                    counter++
                }
            }
        };
        let counteredTotal = Math.floor(totalSalary / counter);
        console.log('Результаты по вакансии - ' + options.params.text + ' в городе Симферополь')
        console.log('Найдено совпадений - ' + counter)
        console.log('Cредняя зарплата ' + stringCheck.toLowerCase() + 'а = ' + counteredTotal + ' рублей');
        return counteredTotal;
    });
}