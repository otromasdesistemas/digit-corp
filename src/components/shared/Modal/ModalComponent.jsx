import './styles.scss';

export const ModalComponent = ({onClose, children}) => {
  return (
    <div className='modal-overlay'>
      <div className="modal">
        <button className="modal-close" onClick={onClose}>X</button>
        {children}
      </div>
    </div>
  )
}
