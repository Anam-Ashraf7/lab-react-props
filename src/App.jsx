import './App.css';

function App(props) {

  const data = props.imageData()

  return (
    <>
      <h1 className='title'>Functional Component</h1>
      <div className='flex'>
        {data.map(item => (
          <img key={item.id} src={item.img} alt="" />
        ))}
      </div>
    </>
  )
}

export default App;
