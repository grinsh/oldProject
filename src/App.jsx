import { useState } from 'react';
import './App.css';

function App() {




  return <>
    <header>
      <h1>  2 Dakot</h1>
      {/* <input placeholder='הכנס שם  מוצר.... '    value={searchValue}  onChange={(event)=>{ setSearchValue(event.target.value)  }}/> */}
    
    </header>
    <div className="products-list">
      {
        // רנדור מערך - משתמשים במאפ כדי להפוך כל ערך במערך לתצוגה
        products.map(p => <div className="product">
          <h4>{p.name}</h4>
          <p>{p.price}  ש''ח</p>
          <button   >הוסף לסל</button>
          <button onClick={() => { deleteItem(p.id) }}>הסר</button>
        </div>
        )
      }


    </div>
    <form>
      <h2>הוספת מוצר</h2>
      {/* כמקלידים באינפוט = onchange = תכניס את הטקסט החדש מהאינפוט לתוך המשתנה  */}
      <input onChange={(event) => { setNameValue(event.target.value) }} value={nameValue} />
      <input onChange={(event) => { setPriceValue(parseInt(event.target.value)) }} value={priceValue} />
      <button type="button" onClick={() => { addProduct() }} >הוסף</button>
    </form>
    <div className='cart'>
      <h2>עגלה</h2>
      <ul>
        <li>פריט</li>
        <li>פריט</li>
        <li>פריט</li>
        <li>פריט</li>
      </ul>
    </div>
  </>

}

export default App;
