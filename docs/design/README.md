# Проєктування бази даних

В рамках проекту розробляється: 
## Модель бізнес-об'єктів 

@startuml
entity User #eeffff
entity User.Name 
entity Email
entity Password
entity Salt
entity Authorization_Token

entity Organization #eeffff
entity Organization.Name
entity Organization.Creation_date
entity Creator #aaaeee
entity Organization.Description #aaaeee
entity Picture #aaaeee 
entity Address #aaaeee
entity Poll

entity PollType.Name
entity PollType.Description #aaaeee

entity BlackListedUser #eeffff
entity BL_User
entity BL_Poll 

entity WhiteListedUser #eeffff
entity WL_User
entity WL_Poll 

entity Poll #eeffff
entity Poll.Title
entity Poll.Description
Entity Poll.CreationDate
entity End_Date
entity IsWhiteList
entity IsBlackList
entity IsPrivate
entity Link
entity Poll.Type #eeffff


entity QuestionType #eeffff
entity QuestionType.Name
entity QuestionType.Description

entity AnswerOption #eeffff
entity Text
entity Index

entity Question #eeffff
entity Question.Title
entity Question.Description
entity Question.Type


entity Answer #eeffff
entity Content

entity PollResult #eeffff
entity Date
entity Respondent


entity QuestionFeedback #eeffff
entity QF_Comment
entity QF_Question

entity PollFeedback #eeffff
entity GeneralComment
entity Rating #aaaeee
entity MaxRating #aaaeee
entity Reviewer
entity PF_Poll



User.Name --* User
Email -r-* User
Password --* User
Salt -l-* User
Authorization_Token -u-* User
Poll "0,*"--*"0,*" User
Organization "0,*"--*"1,*" User
PollFeedback "0,*"--*"1" User

Organization.Name -l-* Organization
Organization.Creation_date -u-* Organization
Creator *-d-* Organization
Organization.Description --* Organization
Picture -d-* Organization
Address -r-* Organization
Poll "0,*"--*"1" Organization

PollType.Name -u-* Poll.Type
PollType.Description --* Poll.Type

BlackListedUser -u-* BL_User
BlackListedUser --* BL_Poll
BlackListedUser "1"--"0,*" User
BlackListedUser "1"--"0,*" Organization
WhiteListedUser -u-* WL_User
WhiteListedUser --* WL_Poll
WhiteListedUser "1"--"0,*" User
WhiteListedUser "1"--"0,*" Organization

Poll.Title -u-* Poll
Poll.Description -u-* Poll
Poll.CreationDate --* Poll
End_Date --* Poll
IsWhiteList --* Poll
IsBlackList -l-* Poll
IsPrivate -r-* Poll
Link -u-* Poll
Poll.Type -d-* Poll
Question "1"--*"1,*" Poll

QuestionType.Name -u-* QuestionType 
QuestionType.Description -d-* QuestionType
QuestionType -- Question
QuestionType -- Answer

Text --* AnswerOption
Index --* AnswerOption

AnswerOption --* Question
Question --* Question.Type
Question.Title --* Question
Question.Description -l-* Question
AnswerFeedback "0,*"--*"1,*" Question

Answer --* Content
Answer --* Question

Date --* PollResult
Comment --* PollResult
Respondent --* PollResult
Answer "1,*"--*"1" PollResult

QF_Comment --* QuestionFeedback
QuestionFeedback *--* QF_Question

GeneralComment -l-* PollFeedback
Rating --* PollFeedback
MaxRating --* PollFeedback
Reviewer -u-* PollFeedback
PF_Poll -u-* PollFeedback
QuestionFeedback "0,*"-u-*"1,*" PollFeedback

@enduml

## ER-модель

@startuml

entity User {
    Name 
    Email
    Password
    Salt
    Authorization_Token
}

entity Organization {
    Name
    Description
    Icon 
    Address
}


entity Survey {
    Title
    Description
    IsPrivate
}

entity Answer {
    customAlt: text
    createdAt: Date
}

entity Alternative {
 Text
 Description
 Index
}

entity Question {
    Title
    Description
    minAltCount: int
    maxAltCount: int
}

entity ActionLog {
    type: text 
    at: Date
}

entity SelectedAlternative {
}

ActionLog "0,*"-->"1,1" User : actor
ActionLog "0,*"-->"0,1" User :recipient
ActionLog "0,*"-->"0,1" Survey
ActionLog "0,*"-->"0,1" Organization


Alternative "0,*" -u-> "1,1" Question

SelectedAlternative "0,*" -u-> "1,1" Answer
SelectedAlternative "0,*" -u-> "1,1" Alternative
Survey "1,1"<--"0,*" Question

Answer "0,*" -> "1,1" Question
Answer "0,*" -u-> "1,1" User

@enduml
  
## Реляційна схема

![eer](https://user-images.githubusercontent.com/31734600/144898655-802598be-ae4f-47d1-8a1e-8f0684b164e2.png)
