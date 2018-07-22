import React from 'react';

export default class Login extends React.Component {

  handleSubmit(e) {
    e.preventDefault();
    const value = e.target.elements[0].value;
    window.localStorage.setItem('myKey'+value, '{"title":"'+value+'","content": "", "slug": ""}');
    window.location = "/admin";
    // {"title":+value+,"content":"строго для взрослых","slug":"что такое слаг"}
    // 'myKey'+value, '{"title":"'+value+'","content": "", "slug": ""}'
}
  render() {
    return (
        <div className='container'>
            <div className='jumbotron'>
                <h1 className='display-3 text-center'>Add to list</h1>
            </div>
            <div className='row'>
                <form className='col-md-4' onSubmit={this.handleSubmit}>
                    <input type='text' className='form-control' />
                  	<button type='submit' className='btnlol btn btn-outline-primary'>Добавление</button>
                </form>
            </div>
        </div>
    )
  }
}

// export default AdminAdd;

