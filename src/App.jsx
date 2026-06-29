// import FruitsCard from "./components/FruitsCard";
import mainStyle from "./styles/App.module.css";
import ContentMainCard from "./components/ContentMainCard"

export default function App() {
  //render
  return (
    <>
      <div className={mainStyle.main}>
        <ContentMainCard/>
      </div>
    </>
  );
  
}

