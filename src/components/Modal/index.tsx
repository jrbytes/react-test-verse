import { useState, useCallback, useEffect, useMemo } from 'react'
import { Dialog } from '@headlessui/react'
import { AnimatePresence, motion } from 'framer-motion'
import { AiFillCloseCircle } from 'react-icons/ai'

import { Button } from '../../components/Button'
import * as S from './styles'
import { Colors } from '../../types/Colors'

export interface ModalProps {
  openButtonText?: string
  colorButton?: `${Colors}`
  title: string
  children: React.ReactNode
  isOpenModal?: boolean
}

export function Modal({
  children,
  openButtonText,
  colorButton,
  title,
  isOpenModal,
}: ModalProps) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleIsOpen = useCallback(() => {
    setIsOpen(!isOpen)
  }, [isOpen])

  useEffect(() => {
    if (isOpenModal) {
      setIsOpen(true)
    }
  }, [isOpenModal])

  const dialogVariants = {
    hidden: {
      opacity: 0,
      transition: {
        duration: 0.2,
      },
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.2,
      },
    },
  }

  const animateResult = useMemo(() => (isOpen ? 'visible' : 'hidden'), [isOpen])

  return (
    <>
      {openButtonText && (
        <Button onClick={toggleIsOpen} color={colorButton}>
          {openButtonText}
        </Button>
      )}

      <AnimatePresence>
        {isOpen && (
          <Dialog open={isOpen} className={S.Wrapper} onClose={toggleIsOpen}>
            <motion.div
              className={S.MotionDiv}
              initial="hidden"
              animate={animateResult}
              exit="hidden"
              variants={dialogVariants}
            >
              <Dialog.Overlay className={S.Overlay} />
              <div className={S.ContentWrapper}>
                <Dialog.Title as="h3" className={S.ContentTitle}>
                  {title}
                </Dialog.Title>
                <div className={S.Content}>{children}</div>
                <button
                  onClick={toggleIsOpen}
                  className={S.ButtonClose}
                  aria-label="botão para fechar o modal"
                >
                  <AiFillCloseCircle />
                </button>
              </div>
            </motion.div>
          </Dialog>
        )}
      </AnimatePresence>
    </>
  )
}
