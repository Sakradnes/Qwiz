const React = require('react');
const Layout = require('./Layout');

const Question = require('./Question'); 
const Answer = require('./Answer');

function AllQuestion({ title , questions , user}){
return ( 
    <Layout title={title}>  

        <div className="cont" id='MainQuestion'>
           { user && <div>ПРИВЕТСВУЕМ ТЕБЯ, {user.name}</div>}
             <Question key={questions[0].id} question={questions[0]} user={user}/>
             <div className='free'></div>
             <Answer key={questions[0].id} question={questions[0]} user={user}/>
        </div> 
    </Layout>
 )
}

module.exports = AllQuestion