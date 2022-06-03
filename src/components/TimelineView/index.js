import {Chrono} from 'react-chrono'

import ProjectTimelineCard from '../ProjectTimelineCard'
import CourseTimelineCard from '../CourseTimelineCard'

import {
  TimelineCardContainer,
  ResponsiveContainer,
  HeaderContainer,
  Header,
  CCBPHeading,
} from './styledComponents'

const TimelineView = props => {
  const {timelineItemsList} = props

  const renderTimelineCard = item => {
    if (id.categoryId === 'PROJECT') {
      return <ProjectTimelineCard key={item.id} projectDetails={item} />
    }
    return <CourseTimelineCard key={item.id} courseDetails={item} />
  }

  return (
    <TimelineCardContainer>
      <ResponsiveContainer>
        <HeaderContainer>
          <Header>
            MY JOURNEY OF
            <br />
          </Header>
          <CCBPHeading>CCBP 4.0</CCBPHeading>
        </HeaderContainer>
        <Chrono
          theme={{
            secondary: 'white',
          }}
          item={timelineList}
          mode="VERTICAL_ALTERNATING"
        >
          {timelineItemsList.map(eachItem => renderTimelineCard(eachItem))}
        </Chrono>
      </ResponsiveContainer>
    </TimelineCardContainer>
  )
}
export default TimelineView
