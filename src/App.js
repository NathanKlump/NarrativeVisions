import './App.css';
import FlipPage from 'react-flip-page';

function App() {
  return (
    <div className="App" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
      <FlipPage 
        orientation="horizontal" 
        uncutPages={true} 
        treshold={30} 
        maxAngle={60} 
        maskOpacity={0.4} 
        perspective="130em"
        pageBackground="#f5f5f5"
        height={600}
        width={800}
        style={{borderRadius: '5px', boxShadow: '0 0 10px rgba(0,0,0,0.5)'}}
      >
        <article>
          <h1>Lorem Ipsum Dolor</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </article>
        <article>
          <h1>Sit Amet Consectetur</h1>
          <p>Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p>
        </article>
        <article>
          <h1>Adipiscing Elit Sed</h1>
          <p>Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.</p>
        </article>
      </FlipPage>
    </div>
  );
}

export default App;
