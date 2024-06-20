// import React, { Fragment } from "react";
// import {
//   Box,
//   Flex,
//   HStack,
//   VStack,
//   Text,
//   Avatar,
//   Spacer,
// } from "@chakra-ui/react";
// import { useStyles } from "./style";
// import { ColumsFN } from "./table";
// import { nanoid } from "@reduxjs/toolkit";
// import { useState, useEffect,  } from "react";
// import {
//   ColumnOrderState,
//   useReactTable,
//   getCoreRowModel,
//   flexRender,
//   SortingState,
//   getSortedRowModel,
//   RowSelectionState,
// } from "@tanstack/react-table";

// const Aunctions = () => {

// //   const {
// //     root,
// //     iconsSize,
// //     expBox,
// //     searchInpStyle,
// //     tabIndicator,
// //     popoverStyle,
// //     addFiltBox,
// //     tabRoot,
// //     tableCon,
// //     lottieRoot,
// //   } = useStyles();

//   return (
//     <Box>
//       <VStack spacing={4} w="100%">
//         <HStack
//           w="100%"
//           p={3}
//           bg="#F6F6F6"
//           borderRadius="10px"
//           boxShadow="sm"
//           alignItems="center"
//           color="black"
//         >
//           <Text fontSize="14px" fontWeight="600" w="25%">
//             Image
//           </Text>
//           <Text
//             fontSize="14px"
//             fontWeight="600"
//             w="10%"
//             display={{ base: "none", md: "flex" }}
//           >
//             List Number
//           </Text>
//           <Text fontSize="14px" fontWeight="600" textAlign="right" flex="1">
//             Property Description
//           </Text>

//           <Text fontSize="14px" fontWeight="600" textAlign="right" flex="1">
//             Bid
//           </Text>
//         </HStack>

//         {/* {user_leaderboard_loading ? (
//           <Spinner speed="1.5s" size={"sm"} />
//         ) : ( */}
//         {/* {drop(leaderboardData, 3)?.map((entry, index) => ( */}
//         <Fragment key={nanoid()}>
//           <HStack
//             // key={entry.rank}
//             w="100%"
//             bg="grey"
//             borderRadius="10px"
//             p="10px"
//             py="20px"
//             boxShadow="sm"
//             alignItems="center"
//             px="20px"
//           >
//             <Text fontSize="lg" fontWeight="bold" w="10%">
//               {/* #{index + 4} */}#
//             </Text>

//             <HStack>
//               <Avatar src="" size="md" name="Blessing" />
//               <Text fontSize="16px" fontWeight="500">
//                 Blessing
//               </Text>
//             </HStack>
//             <Spacer />
//             <Text fontSize="md" color="black" fontWeight={"bold"}>
//               hfhfh pts
//             </Text>
//           </HStack>
//         </Fragment>
//         {/* ))} */}
//         {/* )} */}
//       </VStack>
//     </Box>
//   );
// };

// export default Aunctions;
