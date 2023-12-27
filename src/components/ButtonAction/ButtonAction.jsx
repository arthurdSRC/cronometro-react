import './ButtonAction.scss'
export const ButtonAction = ({ action, icon }) => {
  return (
    <button className='btn-action' onClick={action}>
      {icon}
    </button>
  )
}
