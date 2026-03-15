import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Card from "./components/Card"

function App() {

  return (
    <>
      <Navbar />
      <div className="cards">
        <Card title="card 1" description="Card 1 description" />
        <Card title="card 2" description="Card 2 description" />
        <Card title="card 3" description="Card 3 description" />
        <Card title="card 4" description="Card 4 description" />
        <Card title="card 5" description="Card 5 description" />
      </div>
      <Footer />
    </>
  )
}

export default App





// esmei ek hi dibba us krnge