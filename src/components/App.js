import React, {Component}  from 'react';
import Form from './Form';
import ItemListe from './ItemListe';
import uuidV4 from 'uuid/v4';

class App extends Component {

    state = {
        articles : []
    }

     addArticle = (article) => {
        console.log(article,  'postez depuis le parent');
        article.id = uuidV4();
        let newArticle = [...this.state.articles , article];
        this.setState(  {
           articles : newArticle
        })
    }

    render(){
        return (
            <>
                <h3>Liste de courses</h3>
               <Form title={'Ajoutez un article'}  addArticle={this.addArticle}/>
               <ItemListe articles={this.state.articles} />
            </>
        )
    }
}; 

export default App;