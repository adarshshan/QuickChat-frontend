import { Box } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { ChatState } from '../context/ChatProvider'
import SingleChat from './SingleChat';
import { useNavigate } from 'react-router-dom';

const ChatBox = ({ fetchAgain, setFetchAgain }) => {
    const { selectedChat, setUser } = ChatState();

    const navigate = useNavigate();

    useEffect(() => {
        const userInfo = JSON.parse(localStorage.getItem("userInfo"));
        setUser(userInfo);

        if (!userInfo) navigate("/");
    }, []);

    return (
        <Box display={{ base: selectedChat ? 'flex' : 'none', md: "flex" }}
            alignItems="center"
            flexDir="column"
            p={3}
            bg="white"
            w={{ base: "100%", md: "68%" }}
            borderRadius="lg"
            borderWidth="1px">
            <SingleChat fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />

        </Box >
    )
}

export default ChatBox
