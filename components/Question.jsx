const React = require('react');




function Question({ question }){
return ( 
    <div className='all' data-id={question.category_id} data-idi={question.id}>
        {question.content}
    <button className='next'> СЛЕДУЮЩИЙ ВОПРОС</button> 
    <button className='ball'> {question.difficulty} </button> 
    {console.log(question.difficulty)}
        </div>
 )
}

module.exports = Question