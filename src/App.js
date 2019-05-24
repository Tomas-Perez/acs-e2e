import React from 'react';
import Form from './Form';
import './App.css'

const App = () => (
  <div className='app'>
    <header>
      <h1>Welcome to my Blog!</h1>
    </header>
    <div className='content'>
      <h1>This a totally normal blog</h1>
      <h2>Look, I'm a smaller header</h2>
      <p>
        Sed non consectetur salami. Pancetta frankfurter boudin turducken bresaola dolore bacon irure minim pork chop
        nulla do. Bresaola adipisicing velit sint beef. Ham hock do rump flank pastrami id exercitation laborum beef
        nostrud cow.
      </p>
      <p>
        <img style={{float: 'right'}} src='https://media.giphy.com/media/KOVlHmbBA09XO/giphy.gif' width='480'
             height='230' alt='hello there'/>
        Ut adipisicing pork porchetta. Pork aute qui bresaola turducken andouille, deserunt do. Brisket sed tongue strip
        steak labore do deserunt ham buffalo hamburger. Esse laborum qui drumstick et in voluptate doner short ribs pork
        loin tail buffalo eu id. Officia et est, biltong fugiat enim short ribs. Prosciutto ball tip sint proident,
        chuck short ribs ham hock meatball ea filet mignon jerky ut strip steak in in.
        <br/>
        <br/>
        Nunc pulvinar lacus id purus ultrices id sagittis neque convallis. Nunc vel libero orci. Vivamus at dolor a nibh
        aliquet luctus. Duis imperdiet mi id lorem pellentesque tempus. Ut quis felis posuere tellus feugiat ultrices.
        Praesent id tortor non tellus viverra placerat. Vivamus euismod nisi a leo interdum molestie ornare tellus
        consectetur.
        <br/>
        <br/>
        Nullam cursus varius tellus, id laoreet magna hendrerit at. Nulla sit amet purus at nunc blandit ultricies eu a
        urna. Proin euismod porttitor neque id ultricies. Proin faucibus convallis elit. Maecenas rhoncus arcu at arcu.
        Proin libero. Proin adipiscing. In quis lorem vitae elit consectetuer pretium. Nullam ligula urna, adipiscing
        nec, iaculis ut, elementum non, turpis. Fusce pulvinar.
      </p>
      <h2>Oh boy another header</h2>
      <p>
        Sed ullamcorper morbi tincidunt ornare massa eget. Convallis posuere morbi leo urna molestie at elementum eu
        facilisis. In ante metus dictum at tempor commodo. Sit amet consectetur adipiscing elit pellentesque habitant
        morbi. Condimentum mattis pellentesque id nibh tortor id aliquet lectus proin. Suspendisse ultrices gravida
        dictum fusce ut. Ac turpis egestas integer eget aliquet. Pellentesque eu tincidunt tortor aliquam nulla
        facilisi. Tincidunt vitae semper quis lectus nulla at. Mauris ultrices eros in cursus turpis. Commodo odio
        aenean sed adipiscing. Mauris sit amet massa vitae. Enim nec dui nunc mattis enim ut tellus elementum. Dictum at
        tempor commodo ullamcorper. At lectus urna duis convallis convallis. Adipiscing diam donec adipiscing tristique
        risus nec feugiat.
      </p>
      <p>
        Integer vitae justo eget magna fermentum. Egestas dui id ornare arcu odio ut sem. Et ultrices neque ornare
        aenean. Enim sit amet venenatis urna cursus eget nunc. Tellus pellentesque eu tincidunt tortor aliquam nulla.
        Volutpat odio facilisis mauris sit amet. Amet justo donec enim diam vulputate ut pharetra sit.
      </p>
    </div>
    <div className='sidebar'>
      <h3>Join us</h3>
      <Form/>
      <div>
        <p>
          Spicy jalapeno bacon ipsum dolor amet pork belly meatball mollit jerky, ut hamburger et venison pork loin beef
          ribs beef adipisicing. Ipsum cupim filet mignon, ground round eu tenderloin turducken flank alcatra ut fatback
          shank turkey veniam. T-bone ex proident, pork loin meatloaf mollit tongue. Reprehenderit velit filet mignon
          shank, strip steak salami pork. Reprehenderit pastrami cupidatat, short loin chicken capicola elit porchetta
          flank id exercitation kevin pork belly.
        </p>
        <p>
          Elit ut frankfurter ea. Shankle pancetta rump et mollit. Est dolor shankle voluptate, burgdoggen enim
          reprehenderit nulla brisket. Aute culpa ea hamburger in shoulder. Ea ut consectetur in kielbasa porchetta.
        </p>
      </div>
    </div>
  </div>
);

export default App;
