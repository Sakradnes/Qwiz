const React = require('react');
const Layout = require('./Layout');

const Question = require('./Question'); 
const Answer = require('./Answer');

function AllQuestion({ title , questions }){
return ( 
    <Layout title={title}>  
        <div className="cont" id='MainQuestion'>
            <div>ПРИВЕТСВУЕМ ТЕБЯ, ЗЕМЛЯНИН</div>
             <Question key={questions[0].id} question={questions[0]}/>
             <div className='free'></div>
             <Answer key={questions[0].id} question={questions[0]}/>
        </div> 
       

    </Layout>
 )
}

module.exports = AllQuestion