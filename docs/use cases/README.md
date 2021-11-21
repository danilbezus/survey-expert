- ID:	v1.NOT_LOGGED.001 
  <center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>
@startuml

    left header
         <font color=000 size=10><b>ID:</b> v1.NOT_LOGGED.001
         <font color=000 size=10><b>НАЗВА:</b> Зареєструватись у системі
         <font color=000 size=10><b>УЧАСНИКИ:</b> Користувач, Система 
         <font color=000 size=10><b>ПЕРЕДУМОВИ:</b>
         <font color=000 size=10>Користувач не зареєстрований у системі.
         <font color=000 size=10><b>РЕЗУЛЬТАТ:</b> Новий обліковий запис
         <font color=000 size=10><b>ВИКЛЮЧНІ СИТУАЦІЇ:</b> 
         <font color=000 size=10>v1.NOT_LOGGED.EX.001
     end header
     
     |Користувач|
         start
         : Натискає кнопку "Реєстрація" ;
         : Передає реєстраційні данні:
         Логін, пароль та пошта;
         
     |Система|
         : Перевіряє переданні реєстраційні данні;
         
         note right #ff0000
         <b>Можлива</b>
         <b>v1.NOT_LOGGED.EX.001</b>
         end note
         
         : створює обліковий запис за переданими
         реєстраційними даними;
         
         : надає користувачу інформацію про
         створення облікового запису;
         
     |Користувач|
         stop;
@enduml
</center>

- ID:	v1.NOT_LOGGED.002
    <center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>
@startuml

    left header
         <font color=000 size=10><b>ID:</b> v1.NOT_LOGGED.002
         <font color=000 size=10><b>НАЗВА:</b> Авторизуватись у системі
         <font color=000 size=10><b>УЧАСНИКИ:</b> Користувач, Система 
         <font color=000 size=10><b>ПЕРЕДУМОВИ:</b>
         <font color=000 size=10>Користувач зареєстрований у системі.
         <font color=000 size=10>Користувач не авторизований у системі.
         <font color=000 size=10><b>РЕЗУЛЬТАТ:</b>Сеанс роботи
         <font color=000 size=10><b>ВИКЛЮЧНІ СИТУАЦІЇ:</b> 
         <font color=000 size=10>v1.NOT_LOGGED.EX.002
         <font color=000 size=10>v1.NOT_LOGGED.EX.003
     end header
     
     |Користувач|
         start
         : Натискає кнопку "Вхід" ;
         : Передає авторизаційні дані:
         Логін та пароль;
         
     |Система|
         : ідентифікує користувача;
         
         note right #ff0000
         <b>Можлива</b>
         <b>v1.NOT_LOGGED.EX.002</b>
         end note
         
         : авторизує користувача, та
         надає користувачу авторизацію у системі;
         
         
     |Користувач|
         stop;
@enduml
 </center>

- ID:	v1.USER.001
 <center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>
   @startuml

    left header
         <font color=000 size=10><b>ID:</b> v1.USER.001
         <font color=000 size=10><b>НАЗВА:</b> 	Отримати дані для проходження опитування
         <font color=000 size=10><b>УЧАСНИКИ:</b> Користувач, Система 
         <font color=000 size=10><b>ПЕРЕДУМОВИ:</b>
         <font color=000 size=10>Користувач авторизований у системі.
         <font color=000 size=10>Користувач має доступ до запитаного опитування.
         <font color=000 size=10><b>РЕЗУЛЬТАТ:</b>Дані для проходження опитування
         <font color=000 size=10><b>ВИКЛЮЧНІ СИТУАЦІЇ:</b> 
         <font color=000 size=10>v1.NOT_LOGGED.EX.004
         <font color=000 size=10>v1.COMMON.EX.001
         <font color=000 size=10>v1.COMMON.EX.002
     end header
     
     |Користувач|
         start
         : Натискає кнопку "Пройти опитування" ;

     |Система|
         : ідентифікує користувача;
         
         note right #ff0000
         <b>Можлива</b>
         <b>v1.NOT_LOGGED.EX.004</b>
         end note
         
         :знаходить дані для проходження опитування;
         
         note right #ff0000
         <b>Можлива</b>
         <b>v1.COMMON.EX.001</b>
         end note
         
         :авторизує користувача для отримання даних;
         
         note right #ff0000
         <b>Можлива</b>
         <b>v1.COMMON.EX.002</b>
         end note
         
         :надає користувачу дані для проходження опитування;

     |Користувач|
     
     :отримує дані для проходження опитування.;
         stop;
@enduml
   </center>

- ID:	v1.USER.002
 <center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>
   @startuml

    left header
         <font color=000 size=10><b>ID:</b> v1.USER.002
         <font color=000 size=10><b>НАЗВА:</b>Отримати дані для проходження опитування
         <font color=000 size=10><b>УЧАСНИКИ:</b> Користувач, Система 
         <font color=000 size=10><b>ПЕРЕДУМОВИ:</b>
         <font color=000 size=10>Користувач авторизований у системі.
         <font color=000 size=10>Користувач має доступ до запитаного опитування.
         <font color=000 size=10>Користувач коректно пройшов опитування.
         <font color=000 size=10><b>РЕЗУЛЬТАТ:</b>Повідомлення про зарахування результатів опитування користувача
         <font color=000 size=10><b>ВИКЛЮЧНІ СИТУАЦІЇ:</b> 
         <font color=000 size=10>v1.NOT_LOGGED.EX.004
         <font color=000 size=10>v1.COMMON.EX.001
         <font color=000 size=10>v1.COMMON.EX.002
         <font color=000 size=10>v1.COMMON.EX.003
     end header
     
     |Користувач|
         start
         : Натискає кнопку "Завершити опитування" ;

     |Система|
         : ідентифікує користувача;
         
         note right #ff0000
         <b>Можлива</b>
         <b>v1.NOT_LOGGED.EX.004</b>
         end note
         
         :перевіряє правильність даних про проходження опитування;
         
         note right #ff0000
         <b>Можлива</b>
         <b>v1.COMMON.EX.003</b>
         end note
         
         :надає користувачу повідомлення про зарахування результатів опитування;

     |Користувач|
         stop;
@enduml
   </center>
