import { Suspense, useContext } from 'react'
import './twitter.scss'
import { TwitterTimelineEmbed } from 'react-twitter-embed'
import { twitterDetails } from '@/portfolio'
import StyleContext from '@/contexts/StyleContext'
import type { StyleContextType } from '@/contexts/StyleContext'
import Loading from '../loading/Loading'

const renderLoader = () => <Loading />
const cantDisplayError =
  "<div className='centerContent'><h2>Can't load? Check privacy protection settings</h2></div>"

function timeOut() {
  setTimeout(() => {
    const twitterElement = document.getElementById('twitter')
    if (twitterElement && !twitterElement.innerHTML.includes('iframe')) {
      twitterElement.innerHTML = cantDisplayError
    }
  }, 10000)
}
const widthScreen = window.screen.width

const Twitter = () => {
  const { isDark } = useContext(StyleContext) as StyleContextType

  if (!twitterDetails.display) {
    return null
  }
  if (!twitterDetails.userName) {
    // eslint-disable-next-line no-console
    console.error('Twitter username for twitter section is missing')
  }
  if (twitterDetails.userName) {
    return (
      <Suspense fallback={renderLoader()}>
        <div className="tw-main-div" id="twitter">
          <div className="centerContent">
            <TwitterTimelineEmbed
              sourceType="profile"
              screenName={twitterDetails.userName}
              options={{ height: 400, width: { widthScreen } }}
              placeholder={renderLoader()}
              autoHeight={false}
              borderColor="#fff"
              key={isDark ? '1' : '2'}
              theme={isDark ? 'dark' : 'light'}
              noFooter
              onload={timeOut()}
            />
          </div>
        </div>
      </Suspense>
    )
  }
  return null
}
export default Twitter
