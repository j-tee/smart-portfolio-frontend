import React from 'react'
import './PopupModal.scss'

interface PopupModalProps {
  title: string
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
}

const PopupModal: React.FC<PopupModalProps> = ({ title, isOpen, onClose, children }) => {
  if (!isOpen) return null

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h2>{title}</h2>
        <div>{children}</div>
        <button className="close-button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  )
}

export default PopupModal
