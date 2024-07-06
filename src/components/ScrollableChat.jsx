import React from 'react'
import ScrollableFeed from 'react-scrollable-feed';
import { ChatState } from '../context/ChatProvider';
import { isLastMessage, isSameSender, isSameSenderMargin, isSameUser } from '../config/chatLogics';
import { Avatar, Tooltip } from '@chakra-ui/react';

const ScrollableChat = ({ messages }) => {
    console.log(messages); console.log('from scrollable chat');
    console.log(Array.isArray(messages))
    const { user } = ChatState()
    return (
        <ScrollableFeed>
            {messages && messages.length && messages.map((m, i) => (
                <div key={i} style={{ display: 'flex' }}>
                    {(isSameSender(messages, m, i, user._id) || isLastMessage(messages, i, user._id)) && (
                        <Tooltip label={m.sender.name} placement='bottom-start' hasArrow>
                            <Avatar
                                mt='7px'
                                mr={1}
                                size='sm'
                                cursor='pointer'
                                name={m.sender.name}
                                src={m.sender.pic} />
                        </Tooltip>
                    )}
                    <span style={{
                        backgroundColor: `${m.sender?._id === user._id ? '#BEE3F8' : '#B9F5D0'}`,
                        borderRadius: "20px",
                        padding: "5px 15px",
                        maxWidth: "75%",
                        marginLeft: isSameSenderMargin(messages, m, i, user._id),
                        // marginLeft: 33,
                        marginTop: isSameUser(messages, m, i, user._id) ? 3 : 10,
                        // marginTop: 3,
                    }}>
                        {m.content}
                    </span>
                </div>
            ))}
        </ScrollableFeed>
    )
}

export default ScrollableChat
