import { Box, Skeleton, SkeletonText } from '@chakra-ui/react'
import React from 'react'

const Skelten = () => {
    return (
        <>
            <div style={{ width: '100%' }}>
                <Box padding='6' boxShadow='lg' w={'100%'} h={'100%'} bg='white'>
                    <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='10' />
                    <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='10' />
                    <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='10' />
                    <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='10' />
                    <Skeleton />
                </Box>
            </div>
        </>
    )
}

export default Skelten
