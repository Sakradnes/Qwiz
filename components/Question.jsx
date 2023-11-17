const React = require('react');




function Question({ question, user }){
return ( 
    <div className='all' data-id={question.category_id} data-idi={question.id} data-udi={user.id} >
        {question.content}
    <button className='next'> СЛЕДУЮЩИЙ ВОПРОС</button> 
        </div>
 )
}

module.exports = Question