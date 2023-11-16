const React = require('react');
const Layout = require('./Layout');

const Question = require('./Question'); 

function AllQuestion({ title , questions }){
return ( 
 
    <Layout title={title}>  
        <div>
             {questions.map(question => <Question key={question.id} question={question}/>)}
        </div> 
    </Layout>
 )
}

module.exports = AllQuestion