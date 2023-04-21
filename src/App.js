import useFetch  from "./Component/fetchh";


function App() {
  let data=useFetch("https://reqres.in/api/users?page=2");
    console.log(data);
  return (
    <div className="App">
 

    </div>
  );
}

export default App;
