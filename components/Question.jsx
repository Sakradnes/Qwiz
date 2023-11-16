const React = require('react');
const Layout = require('./Layout');





function Question({ title , question }){
return ( 
 
    <Layout title={title}>  
        <div>
             {question.content}
        </div> 
    </Layout>
 )
}

module.exports = Question