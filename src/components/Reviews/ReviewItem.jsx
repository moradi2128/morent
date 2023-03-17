import { ArrowDownIcon } from '@heroicons/react/24/outline'
import { Avatar, useMediaQuery } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import ButtonUi from 'src/subComponents/ButtonUi'
import IconUi from 'src/subComponents/IconUi'
import RatingUi from 'src/subComponents/RatingUi'
import styled from 'styled-components'

const ReviewItem = (props) => {
    const [showComment, setShowComment] = useState(false)
    const { id,
        comment,
        postId,
        rating,
        date,
        user } = props.content
    return (
        <Wrapper>
            {/* === Header === */}
            <Avatar {...user.avatar} sx={{ width: 45, height: 45 }} />
            <div>
                <UserDecription>
                    <Container>
                        <UserName>
                            {user.username}
                        </UserName>
                        <Post>
                            {date}
                        </Post>
                    </Container>
                    <Container>
                        <Post>
                            {user.post}
                        </Post>
                        <RatingUi readOnly value={rating} />
                    </Container>
                </UserDecription>
                <CommentConatiner>
                    <Comment showComment={showComment} onClick={() => setShowComment(!showComment)}>
                        {comment}
                    </Comment>
                    <CommentBtn showComment={showComment} onClick={() => setShowComment(!showComment)}>{showComment ? "مخفی کردن" : "نمایش بیشتر"}</CommentBtn>
                </CommentConatiner>
            </div>
        </Wrapper>
    )
}

export default ReviewItem
const Wrapper = styled.div`
margin-bottom:20px;
display: flex;
/* align-items: baseline; */
gap:1rem;
`

// === body ===
const UserName = styled.h2`
margin-bottom: 5px;
font-weight: 600;
font-size: 14px;
line-height: 24px;
@media (min-width:768px){
    font-size: 16px;
}
`
const Post = styled.p`
font-weight: 500;
font-size: 10px;
line-height: 15px;
color:${props => props.theme.text.secondary};
@media (min-width:768px){
    font-size: 14px;
}
`
const Container = styled.div`
display: flex;
align-items: center;
justify-content:space-between;
`
const UserDecription = styled.div`
display: flex;
flex-direction: column;
width: 100%;
gap:5px;
margin-bottom:16px;
`
// === Body ===
const Comment = styled.p`
cursor: pointer;
position: relative;
display: -webkit-box;
-webkit-line-clamp:${props => props.showComment ? "unset" : 4} ;
-webkit-box-orient: vertical;
overflow: hidden;
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 26px;
text-align: justify;
transition: all 0.3s ease;
color:${props => props.theme.text.secondary};

/* & button {
    padding: 3px !important;
    font-size: 10px !important;
    font-weight: 400 !important;
    position: absolute;
    bottom: 0;
    left: 0;
} */
&:after {
content: "";
width: ${props => props.showComment ? "unset" : "120%"};
height: 30px;
background: linear-gradient(90deg, #ffffff 10%, transparent);
position: absolute;
bottom: 0;
left: 0;
transition: all 0.3s ease;
}
`
const CommentConatiner = styled.div`
    position: relative;
    display: flex;
flex-direction: column;
margin-bottom:2rem;
`
const CommentBtn = styled.div`
cursor: pointer;
    position: absolute;
    /* bottom: 6px; */
    bottom:${props => props.showComment ? "-16px" : "6px"};
    left: 0;
    font-size: 10px;
    color: gray;
    font-weight: 600;
    border-bottom: 1px solid gray;
`