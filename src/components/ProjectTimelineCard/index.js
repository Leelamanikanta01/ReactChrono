import {AiFillCalendar} from 'react-icons/ai'

import {
  ProjectCardContainer,
  ProjectImage,
  ProjectTitleAndDurationContainer,
  ProjectTitle,
  DurationContainer,
  Duration,
  ProjectDescription,
  VisitLink,
} from './styledComponents'

const ProjectTimelineView = props => {
  const {projectDetails} = props
  const {
    imageUrl,
    ProjectTitle,
    description,
    projectUrl,
    duration,
  } = projectDetails

  return (
    <ProjectCardContainer>
      <ProjectImage src={imageUrl} alt="Project" />
      <ProjectTitleAndDurationContainer>
        <ProjectTitle>{ProjectTitle}</ProjectTitle>
        <DurationContainer>
          <AiFillCalendar color="#171f46" />
          <Duration>{duration}</Duration>
        </DurationContainer>
      </ProjectTitleAndDurationContainer>
      <ProjectDescription>{description}</ProjectDescription>
      <VisitLink href={projectUrl}>Visit</VisitLink>
    </ProjectCardContainer>
  )
}

export default ProjectTimelineView
