import FruitsCard from "./components/FruitsCard";

export default function App() {
  //render
  return (
    <>
      <div style={{
        width:"100vw",
        height:"100vh",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
      }}>
        <FruitsCard/>
      </div>
    </>
  );
  
}

