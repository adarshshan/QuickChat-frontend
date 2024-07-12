import React, { useEffect, useState } from 'react'
import { ChatState } from '../context/ChatProvider';
import { Box } from '@chakra-ui/react';
import SideDrawer from '../components/Missellesaneos/SideDrawer';
import Mychats from '../components/Mychats';
import ChatBox from '../components/ChatBox';

const ChatPage = () => {
    const [fetchAgain, setFetchAgain] = useState();
    const [isData, setIsdata] = useState(false);
    const { user } = ChatState();
    useEffect(() => {
        if (user) setIsdata(true);
    }, [isData])
    return (
        <div style={{ width: "100%" }}>
            {isData && <SideDrawer />}
            <Box display="flex" justifyContent="space-between" w="100%" h="91.5vh" p="10px">
                {isData && <Mychats fetchAgain={fetchAgain} />}
                {isData && <ChatBox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />}
            </Box>
        </div>
    )
}

export default ChatPage
