import CardMario from "./components/CardMArio/CardMario";
import CarouselMario from "./components/CarouselMario/CarouselMario";
import GrillaCards from "./components/GrillaCards/GrillaCards";
import BarraNavegacion from "./components/Navbar/BarraNavegacion";

const App = () => {
  return (
    <div className="bg-dark">
      <header>
        <BarraNavegacion />
      </header>
      <main>
        <CarouselMario />
        <CardMario /> 
        <GrillaCards/>
      </main>
    </div>
  );
};

export default App;
