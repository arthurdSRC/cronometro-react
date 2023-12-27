import { ButtonAction } from "../ButtonAction/ButtonAction"
import { Display } from "../Display/Display"
import { FaPause } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import { MdOutlineRestartAlt } from "react-icons/md";

import "./Cronometro.scss"

export const Cronometro = () => {
  return (
    <div className="container">
      <h1>Cronômetro</h1>
      <Display />
      <div className="flex">
        <ButtonAction icon={<FaPause size={25} color="#fff" />} />
        <ButtonAction icon={<FaPlay size={25} color="#fff" />} />
        <ButtonAction icon={<MdOutlineRestartAlt size={30} color="#fff" />} />
      </div>

    </div>
  )
}
