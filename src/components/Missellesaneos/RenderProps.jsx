import React, { useEffect } from 'react'
import { ChatState } from '../../context/ChatProvider';
import { Toast } from '@chakra-ui/react';
import axios from 'axios';

const RenderProps = ({ render }) => {
    const { chats, setChats,user } = ChatState();
    const fetchChats = async () => {
        try {
            const config = {
                headers: {
                    Authorization: `Bearer ${user.token}`
                }
            }
            const { data } = await axios.get(`${process.env.REACT_APP_BACKEND_ENDPOINT}/api/chats`, config);
            if (data) {
                setChats(data);
            }
        } catch (error) {
            console.log(error)
            Toast({
                title: "Error Occured",
                status: "error",
                duration: 5000,
                isClosable: true,
                position: "top-left",
            });
        }
    };
    useEffect(() => {
        fetchChats();
    }, [])
    return render(chats);
}

export default RenderProps
