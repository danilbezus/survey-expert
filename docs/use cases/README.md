- ID:	v1.NOT_LOGGED.EX.004
<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>
@startuml
  
    left header
         <font color=000 size=10><b>ID:</b> v1.NOT_LOGGED.EX.004
         <font color=000 size=10><b>НАЗВА:</b> Відхілити доступ для неавторизованого користувача
         <font color=000 size=10><b>УЧАСНИКИ:</b> Користувач, Система 
         <font color=000 size=10><b>ПЕРЕДУМОВИ:</b>
         <font color=000 size=10>Користувач не авторизований у системі.
         <font color=000 size=10>Система відхилила запит неавторизованого користувача.
         <font color=000 size=10><b>РЕЗУЛЬТАТ:</b> Повідомлення про відхиленя доступу для неавторизованого користувача.
     end header
     |Система|
         start
         : Надає користувачу повідомлення
         про відхиленя доступу 
         для неавторизованого користувача.;
     |Користувач|
         : Отримує повідомлення про 
         відхиленя доступу для 
         неавторизованого користувача.;
     |Система|
         : Завершує взаємодію;
         stop;
@enduml
</center>

- ID:	v1.COMMON.EX.001
<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>
@startuml
  
    left header
         <font color=000 size=10><b>ID:</b> v1.COMMON.EX.001
         <font color=000 size=10><b>НАЗВА:</b> Повідомити про відсутність запитаних даних
         <font color=000 size=10><b>УЧАСНИКИ:</b> Користувач, Система 
         <font color=000 size=10><b>ПЕРЕДУМОВИ:</b>
         <font color=000 size=10>Користувач авторизований у системі.
         <font color=000 size=10>Користувач запитав дані, що відсутні у системі.
         <font color=000 size=10><b>РЕЗУЛЬТАТ:</b> Повідомлення про відсутність запитаних даних.
     end header
     |Система|
         start
         : Надає користувачу повідомлення 
         про відсутність запитаних даних.;
     |Користувач|
         : Отримує повідомлення 
         про відсутність запитаних даних.;
     |Система|
         : Завершує взаємодію;
         stop;
@enduml
</center>

- ID:	v1.COMMON.EX.002
<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>
@startuml
  
    left header
         <font color=000 size=10><b>ID:</b> v1.COMMON.EX.002
         <font color=000 size=10><b>НАЗВА:</b> Відхилити доступ користувача до даних
         <font color=000 size=10><b>УЧАСНИКИ:</b> Користувач, Система 
         <font color=000 size=10><b>ПЕРЕДУМОВИ:</b> Система відхилила запит користувача до даних.
         <font color=000 size=10><b>РЕЗУЛЬТАТ:</b> Повідомлення про відхилення доступу до даних.
     end header
     |Система|
         start
         : Надає користувачу повідомлення 
         про відхилення доступу до даних.;
     |Користувач| 
         : Отримує повідомлення 
         про відхилення доступу до даних.;
     |Система|
         : Завершує взаємодію;
         stop;
@enduml
</center>

- ID:	v1.COMMON.EX.003
<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>
@startuml
  
    left header
         <font color=000 size=10><b>ID:</b> v1.COMMON.EX.003
         <font color=000 size=10><b>НАЗВА:</b> Відхилити хибні дані
         <font color=000 size=10><b>УЧАСНИКИ:</b> Користувач, Система 
         <font color=000 size=10><b>ПЕРЕДУМОВИ:</b> 
         <font color=000 size=10>Користувач авторизований у системі.
         <font color=000 size=10>Користувач надіслав у систему хибні дані.
         <font color=000 size=10><b>РЕЗУЛЬТАТ:</b> Повідомлення про відхилення хибних даних.
     end header
     |Система|
         start
         : Надає користувачу повідомлення 
         про відхилення хибних даних.;
     |Користувач|
         : Отримує повідомлення 
         про відхилення хибних даних.;
     |Система|
         : Завершує взаємодію;
         stop;
@enduml
</center>
