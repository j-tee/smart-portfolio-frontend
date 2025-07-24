import React from 'react'
import './PopupModal.scss'
import { Modal } from 'react-bootstrap'

interface PopupModalProps {
  title: string
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
}

const PopupModal: React.FC<PopupModalProps> = ({ title, isOpen, onClose, children }) => {
  if (!isOpen) return null
  
  return (
    <Modal show={isOpen} animation centered onHide={onClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
      <Modal.Footer>
        <button className="close-button" onClick={onClose}>
          Close
        </button>
      </Modal.Footer>
    </Modal>
  )
}

export default PopupModal
