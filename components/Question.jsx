const React = require('react');
const Layout = require('./Layout');





function Question({ title , question }){
return ( 
 
    <Layout title={title}> 
    <div className='all'>{question.content} 
        <div >
             <button className='next' data-id={question.category_id} data-idi={question.id}>СЛЕДУЮЩИЙ ВОПРОС</button>
        </div> 
        </div>
        <div className='free'></div>
    </Layout>
 )
}

module.exports = Question