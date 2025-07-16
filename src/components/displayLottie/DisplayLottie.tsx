import React, { Suspense } from 'react'
import Lottie from 'lottie-react'
import Loading from '@/containers/loading/Loading'

interface DisplayLottieProps {
  animationData: object
}

const DisplayLottie: React.FC<DisplayLottieProps> = ({ animationData }) => {
  return (
    <Suspense fallback={<Loading />}>
      <Lottie animationData={animationData} loop autoplay />
    </Suspense>
  )
}

export default DisplayLottie
