const React = require('react');
const Layout = require('./Layout');

module.exports=function Registration ({title}){
    return(
        <Layout title={title}>
        <div className='container'>
          <h2 className='h2Auth'>Зарегистрируйся</h2>
          <form action='/' method='POST' className='form'>
            <input name='name' className='inputAuth' placeholder='имя'/>
            <button type='submit' className='buttonAuth'>сохранить</button>
          </form>
        </div>
        </Layout>
    )}
