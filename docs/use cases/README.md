- ID:	v1.NOT_LOGGED.EX.001

<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>
@startuml
  
    left header
         <font color=000 size=10><b>ID:</b> v1.NOT_LOGGED.EX.001
         <font color=000 size=10><b>НАЗВА:</b> Відхилити запит на реєстрацію
         <font color=000 size=10><b>УЧАСНИКИ:</b> Користувач, Система 
         <font color=000 size=10><b>ПЕРЕДУМОВИ:</b>
         <font color=000 size=10>Користувач не зареєстрований у системі.
         <font color=000 size=10>Клієнт надіслав хибні дані реєстрації.
         <font color=000 size=10><b>РЕЗУЛЬТАТ:</b> Повідомлення про відхилення реєстрації
     end header
     
     |Система|
         start
         : Надає користувачу повідомлення 
         про відхилення реєстрації;
         
     |Користувач|
         : Отримує повідомлення про
         відхилення реєстрації;
         
     |Система|
         : Завершує взаємодію;
         stop;
         
@enduml
</center>
           
- ID:	v1.NOT_LOGGED.EX.002
           
<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>
@startuml
  
    left header
         <font color=000 size=10><b>ID:</b> v1.NOT_LOGGED.EX.002
         <font color=000 size=10><b>НАЗВА:</b> Відхилити спробу авторизації через помилку ідентифікації
         <font color=000 size=10><b>УЧАСНИКИ:</b> Користувач, Система 
         <font color=000 size=10><b>ПЕРЕДУМОВИ:</b>
         <font color=000 size=10>Користувач не авторизований у системі.
         <font color=000 size=10>Система не змогла ідентифікувати користувача.
         <font color=000 size=10><b>РЕЗУЛЬТАТ:</b> Повідомлення про помилку спроби авторизації
     end header
     
     |Система|
         start
         : Надає користувачу повідомлення про відхилення 
         авторизації через помилку ідентифікації;
         
     |Користувач|
         : Отримує повідомлення про відхилення 
         авторизації через помилку ідентифікації;
         
     |Система|
         : Завершує взаємодію;
         stop;
         
@enduml  
</center>

- ID:	v1.NOT_LOGGED.EX.003
         
<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>
@startuml
  
    left header
         <font color=000 size=10><b>ID:</b> v1.NOT_LOGGED.EX.003
         <font color=000 size=10><b>НАЗВА:</b> Відхилити спробу авторизації через помилку аутентифікації
         <font color=000 size=10><b>УЧАСНИКИ:</b> Користувач, Система 
         <font color=000 size=10><b>ПЕРЕДУМОВИ:</b>
         <font color=000 size=10>Клієнт не авторизований у системі.
         <font color=000 size=10>Система не змогла аутентифікувати користувача.
         <font color=000 size=10><b>РЕЗУЛЬТАТ:</b> Повідомлення про спроби авторизації
     end header
     
     |Система|
         start
         : Надає користувачу повідомлення про відхилення
         авторизації через помилку аутентифікації;
         
     |Користувач|
         : Отримує повідомлення про відхилення 
         авторизації через помлку аутентифікації;
         
     |Система|
         : Знижує ступінь довіри до користувача;
         
         : Завершує взаємодію;
         stop;
         
@enduml 
</center>
