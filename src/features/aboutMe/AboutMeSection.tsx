// src/features/aboutMe/AboutMeSection.tsx

import { useEffect } from 'react'
import useAppDispatch from '@/app/hooks/useAppDispatch'
import useAppSelector from '@/app/hooks/useAppSelector'
import { fetchAboutMe } from './aboutMeSlice'
// Import RootState from your app's store, adjust the path as needed
import type { RootState } from '../../app/store'

const AboutMeSection = () => {
  const dispatch = useAppDispatch()
  const { data, status, error } = useAppSelector((state: RootState) => state.about)

  useEffect(() => {
    dispatch(fetchAboutMe())
  }, [dispatch])

  if (status === 'loading') return <p>Loading...</p>
  if (status === 'failed') return <p>Error: {error}</p>
  if (!data) return null

  return (
    <section className="max-w-4xl mx-auto px-4 py-12 text-center">
      <img
        src={data.profile_picture}
        alt={data.name}
        className="w-40 h-40 rounded-full mx-auto mb-6 object-cover shadow-lg"
      />
      <h1 className="text-3xl font-bold mb-2">{data.name}</h1>
      <h2 className="text-xl text-gray-600 mb-4">{data.headline}</h2>
      <p className="text-gray-700 leading-relaxed">{data.bio}</p>
    </section>
  )
}

export default AboutMeSection
