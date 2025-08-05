import React from 'react'
import './PopupModal.scss'
import { Button, Modal } from 'react-bootstrap'

interface PopupModalProps {
  title: string
  isOpen: boolean
  submit?: () => void
  onClose: () => void
  children: React.ReactNode
}

const PopupModal: React.FC<PopupModalProps> = ({ title, isOpen, onClose, children, submit }) => {
  if (!isOpen) return null
  
  return (
    <Modal show={isOpen} animation centered onHide={onClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
      <Modal.Footer>
        {/* {submit && (
          
        )} */}
        <Button className="submit-button" onClick={submit}>
            Submit
          </Button>
        <Button  onClick={onClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default PopupModal
