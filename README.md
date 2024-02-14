# Домашнее задание по курсу «Технологии разработки веб-приложений»
## Вариант: ТРВП-009

Разработать клиент-серверное приложение, реализующее функциональные требования (CRUD-операции), заданные в пределах указанной предметной области, с соблюдением следующих технических требований:
- Клиентская сторона приложения должна быть разработана с использованием языка разметки HTML, таблиц стилей CSS и языка программирования JavaScript. Разрешено использовать любую библиотеку/фреймворк для построения пользовательского веб-интерфейса. 
- Серверная сторона приложения должна быть разработана с использованием языка программирования JavaScript и платформы Node.js. Разрешено использовать любую библиотеку/фреймворк для создания сервера. 
- Взаимодействие между клиентом и сервером должно осуществляться через спроектированный REST-like API. 
- Данные на серверной стороне должны храниться в базе данных. Разрешено использовать любую БД и СУБД, к которой возможно подключиться из JavaScript кода. 
- Вместо JavaScript разрешено использовать TypeScript.

Приложение представляет собой раздел личного кабинета сотрудника склада, отвечающий за формирование заказов. В разделе указывается список заказов с возможностью добавления заказа в список, удаления его из списка и редактирования информации о нем. 

**Информация о заказе**: 
- ФИО заказчика (строка), 
- ID (строка, нередактируемый атрибут), 
- дата заказа (объект даты).

Дата заказа не может быть меньше текущей даты, все заказы с истекшей датой в начале работы приложения удаляются. 
Для каждого заказа указывается список позиций в заказе, в который можно добавлять позиции, удалять их из списка, а также переводить позицию с одного заказа на другой.

**Параметры позиции заказа**: 
- товар (выбор из списка), 
- количество единиц товара (целое число), 
- ID (строка, нередактируемый атрибут),
- Заказ (строка).

Номенклатура товаров на складе и их количество задаются изначально. 
При добавлении/изменении параметров позиции заказа необходимо проверить, есть ли товар в нужном количестве на складе, в случае нехватки товара должно отобразиться уведомление-предупреждение о невозможности выполнения данной операции.
В приложении должна быть реализована возможность переключения текущей даты на день вперед, при переключении все заказы на текущий день отгружаются со склада и удаляются из списка заказов, следом остатки товаров увеличиваются на случайные величины (моделирование прихода партий товаров).
