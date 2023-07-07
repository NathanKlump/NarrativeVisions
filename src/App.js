import 'tailwindcss/tailwind.css';
import FlipPage from 'react-flip-page';

const Page = ({ leftContent, rightContent }) => (
  <article className="flex">
    <div className="w-1/2 p-4">
      {leftContent?.title && 
      <h1 className="font-bold text-2xl">{leftContent.title}</h1>
      }
      {leftContent?.content && 
      <p>{leftContent.content}</p>}
    </div>
    <div className="w-1/2 p-4">
      {rightContent?.title && 
      <h1 className="font-bold text-2xl">{rightContent.title}</h1>
      }
      {rightContent?.content && 
      <p>{rightContent.content}</p>
      }
    </div>
  </article>
);


function App() {
  return (
    <div className="App flex justify-center items-center h-screen">
      <FlipPage 
        orientation="horizontal" 
        uncutPages={true} 
        treshold={30} 
        maxAngle={60} 
        maskOpacity={0.4} 
        perspective="130em"
        pageBackground="#f5f5f5"
        height={800}
        width={1100}
        className="rounded shadow"
      >
        <Page 
          leftContent={{ 
            title: "Lorem Ipsum Dolor", 
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          }}
          rightContent={{
            title: "Sit Amet Consectetur", 
            content: "Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem."
          }}
        />
        <Page 
          leftContent={{
            title: "Adipiscing Elit Sed", 
            content: "Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium."
          }}
        />
      </FlipPage>
    </div>
  );
}

export default App;
