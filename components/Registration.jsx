const React = require('react');
const Layout = require('./Layout');

module.exports=function Registration ({title}){
    return(
        <Layout title={title}>
        <div className='container'>
          <h2 className='h2Auth'>мой дорогой друг, Зарегистрируйся</h2>
          <form action='/' method='POST' className='form'>
            <input name='name' className='inputAuth' placeholder='Введите своё имя'/><br/>
            <button type='submit' className='buttonAuth'>СОХРАНИТЬ</button>
          </form>
        </div>
        </Layout>
    )}
