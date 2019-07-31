import React, { useState } from 'react';
import { Icon } from 'semantic-ui-react';
import styled from 'styled-components';

function ListCard(props) {
  const [count, setCount] = useState(0);

  return (
    <ListCardWrapper>
      <IssueWrapper>
        <ProjectImage>
          {props.data.picture}
        </ProjectImage>
        <ProjectDescription>
          <ProjectTitle>{props.data.issue_name}</ProjectTitle>
          <p>Categories:  {props.data.category}</p>
          <address>Location:  {props.data.zipCode}</address>
          <p>Description:  {props.data.description}</p>
          <UpvoteCount>
            <Icon name="arrow up" />
            <button className="upvote-btn" onClick={ () => setCount(count + 1)}>{count} upvotes</button>
          </UpvoteCount>
        </ProjectDescription>
      </IssueWrapper>
      
    </ListCardWrapper>
  )
}

const ListCardWrapper = styled.section`
  padding: 30px 0px;
  border-bottom: 1px solid black;
`

const IssueWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`

const ProjectImage = styled.div`
  text-align: center;
`

const ProjectDescription = styled.div`
  margin-left: 200px;
  width: 50%;
`

const ProjectTitle = styled.p`
  margin: 0px;
  font-weight: bold;
`

const ProjectLocation = styled.address`
  margin: 0px;
`

const UpvoteCount = styled.div`
  margin-left: 200px;
  padding-top: 30px;
`

export default ListCard;