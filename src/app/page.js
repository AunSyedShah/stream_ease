export default function Home() {
  const plants = [
    {
      "plant_name":"Neem",
      "category":"Tree"
    },
    {
      "plant_name":"Neem",
      "category":"Tree"
    },
    {
      "plant_name":"Neem",
      "category":"Tree"
    },
    {
      "plant_name":"Neem",
      "category":"Tree"
    },
  ]
  return (
    <div>
      <h1 className='text-blue-400'>Aun Syed Shah</h1>
      {
        plants.map(
          function(plant){
            return <h1>{plant.plant_name}</h1>
          }
        )
      }
    </div>
  )
}
