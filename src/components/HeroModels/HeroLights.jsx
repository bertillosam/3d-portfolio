const HeroLights = () => {
  return (
    <>
    <ambientLight intensity={0.3} color="#5c5c6dff" />
    <directionalLight position={[5, 5, 5]} intensity={2} />
    </>
  )
}

export default HeroLights