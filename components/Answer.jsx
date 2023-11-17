const React = require('react');

module.exports=function Answer ({question}){
    return(
        <div className='container'>
          <p className='h2Auth'>Введите Ваш ответ</p>
            <input  className='inputAnswer form'  data-id={question.category_id} data-idi={question.id} placeholder='Ваш ответ'/>
            <div className='Compare'></div>
            <div className='Dif'></div>
        </div>
    )}