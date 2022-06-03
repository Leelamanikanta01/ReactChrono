import {AiFillClockCircle} from 'react-icons/ai'

import {
  CourseTitleAndDescription,
  CourseTitle,
  DurationContainer,
  Duration,
  CourseDescription,
  CourseTagsList,
  CourseTagItem,
  CourseTag,
} from './styledComponents'

const CourseTimelineView = props => {
  const {courseDetails} = props
  const {title, description, tagsList, duration} = courseDetails

  return (
    <>
      <CourseTitleAndDescription>
        <CourseTitle>{title}</CourseTitle>
        <DurationContainer>
          <AiFillClockCircle color="#171f46" />
          <Duration>{duration}</Duration>
        </DurationContainer>
      </CourseTitleAndDescription>
      <CourseDescription>{description}</CourseDescription>
      <CourseTagsList>
        {tagsList.map(eachTag => (
          <CourseTagItem key={eachTag.id}>
            <CourseTag>{eachTag.name}</CourseTag>
          </CourseTagItem>
        ))}
      </CourseTagsList>
    </>
  )
}

export default CourseTimelineView
