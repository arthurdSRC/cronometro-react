import "./Display.scss"

export const Display = ({ horas, minutos, segundos }) => {
  return (
    <div className="display">
      <span>00:00:35</span>
    </div>
  )
}

// {horas < 10 ? "0" + horas : horas}:{minutos < 10 ? "0" + minutos : minutos}:{segundos < 10 ? "0" + segundos : segundos}