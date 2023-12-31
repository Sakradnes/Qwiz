const React = require('react');
const Layout = require('./Layout');

const Question = require('./Question'); 
const Answer = require('./Answer');

function AllQuestion({ title , questions , user}){
return ( 
    <Layout title={title}>  

        <div className="container" id='MainQuestion'>
           { user && <div className='h2Auth'>ПРИВЕТСВУЕМ ТЕБЯ, {user.name}</div>}
             <Question key={questions[0].id} question={questions[0]} user={user}/>
             <div className='free'></div>
             <Answer key={questions[0].id} question={questions[0]} user={user}/>
        </div>
    </Layout>
 )
}

module.exports = AllQuestion