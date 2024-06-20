"use client";

import React, { useState, Fragment, useReducer, useEffect } from "react";
import {
  HStack,
  Flex,
  Select,
  Avatar,
  Heading,
  Spinner,
  Checkbox,
  Icon,
  Spacer,
  Tabs,
  TabList,
  Tab,
  TabIndicator,
  TabPanels,
  TabPanel,
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Text,
} from "@chakra-ui/react";
// import { useLimitPerPage } from "@/hooks/useLimitPage";
import { useAppSelector, useAppDispatch } from "@/hooks/rtkHooks";
import { nanoid } from "nanoid";
import ContainerWrapper from "@/components/ContainerWrapper";
import {
  ColumnOrderState,
  useReactTable,
  getCoreRowModel,
  flexRender,
  SortingState,
  getSortedRowModel,
  RowSelectionState,
} from "@tanstack/react-table";
import { BsFillGridFill } from "react-icons/bs";
import { useStyles } from "./style";
import { ColumsFN } from "./table";
import { AiFillCheckCircle } from "react-icons/ai";
import Lottie from "lottie-react";
import emptyState from "@/assets/json/emptyState.json";
import loadingJson from "@/assets/json/loadingJson.json";
import { AnyAaaaRecord } from "dns";
import { COLORS } from "@/constants/theme";
import { AunctionData, AunctionDataProps } from "@/constants/dummyJson";

const Aunction: React.FC = () => {
  const dispatch = useAppDispatch();

  const rerender = useReducer(() => ({}), {})[1];

  const { root, iconsSize, expBox, tableCon, lottieRoot } = useStyles();

  const [columnVisibility, setColumnVisibility] = useState({});
  const [columnOrder, setColumnOrder] = useState<ColumnOrderState>([]);
  const [rowSelection, setRowSelection] = useState<RowSelectionState>({});
  const [data, setData] = useState<AunctionDataProps[]>([]);
  const [sorting, setSorting] = useState<SortingState>([]);
  const [pagPage, setPagPage] = useState<number>(1);
  const [pagLimit, setPagLimit] = useState<number>(10);
  const [pagination, setPagination] = useState<{
    nextPage: number | null;
    prevPage: number | null;
    total: number;
  }>({
    nextPage: null,
    prevPage: null,
    total: 0,
  });
  // const [sortBy, setSortBy] = useState<SortByUsersAdmin | null>(null);
  const [sortBy, setSortBy] = useState<AnyAaaaRecord | null>(null);
  const [activeTabIndex, setActiveTabIndex] = useState<number>(0);

  const table = useReactTable({
    data: AunctionData,
    columns: ColumsFN(),
    onSortingChange: setSorting,
    state: {
      sorting,
      columnVisibility,
      columnOrder,
      rowSelection,
    },
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    onColumnVisibilityChange: setColumnVisibility,
    onColumnOrderChange: setColumnOrder,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  const bidsboardTabs: any[] = [
    { tabTitle: "Aunctions", total: 0, Icon: BsFillGridFill },
    { tabTitle: "My Bids", total: 0, Icon: AiFillCheckCircle },
  ];

  // function to handle next page click
  const handleNextPage = () => {
    if (pagination?.nextPage) {
      setPagPage(pagination?.nextPage);
    }
  };

  // function to handle previous page click
  const handlePreviousPage = () => {
    if (pagination?.prevPage) {
      setPagPage(pagination?.prevPage);
    }
  };

  const selectedItems = table
    .getSelectedRowModel()
    .flatRows?.map((row) => row?.original);

  // Function to convert data to CSV format
  function convertToCSV(data: any) {
    const header = Object.keys(data[0]).join(",");
    const csv = data
      ?.map((item: any) => Object.values(item).join(","))
      .join("\n");
    return `${header}\n${csv}`;
  }

  return (
    <Flex
      gap={5}
      {...root}
      h="100%"
      p="20px"
      py="8%"
      borderRadius="12px"
      flexDir="column"
    >
      <ContainerWrapper>
        <Flex flexDir="column">
          <Heading fontSize="30px" fontWeight={400} textTransform="uppercase">
            Auctions
          </Heading>
          <Text
            fontSize="14px"
            mt="8px"
            fontWeight={400}
            color={COLORS.descFontColor}
          >
            Bid Your Price. Input The next Highest Price. You can Win this!!
          </Text>
        </Flex>

        <Tabs
          mt="20px"
          isLazy
          variant="none"
          // onChange={(i) => {
          //   setActiveTabIndex(i);
          //   if (i === 0) {
          //     setSortBy(SortByUsersAdmin.AIRDROPPOINTS);
          //   } else if (i === 1) {
          //     setSortBy(SortByUsersAdmin.AIRDROPPOINTS);
          //   } else if (i === 2) {
          //     setSortBy(SortByUsersAdmin.CREATEDAT);
          //   } else if (i === 3) {
          //     setSortBy(SortByUsersAdmin.UPDATEDAT);
          //   }
          // }}
        >
          <TabList bgColor="#E3E4E6" p={3} maxW="230px" borderRadius="10px">
            {bidsboardTabs?.map((e, i) => (
              <Tab
                key={nanoid()}
                fontSize="14px"
                color={COLORS.descFontColor}
                fontWeight={400}
                _selected={{
                  bgColor: `${COLORS.actionBGBtn}`,
                  py: "10px",
                  px: "20px",
                  height: "45px",
                  borderRadius: "10px",
                  fontWeight: "400",
                  color: "white",
                }}
              >
                <HStack fontSize={"14px"}>
                  <Text>{e.tabTitle}</Text>
                  {/* {activeTabIndex === i && */}
                  {/* // (user_leaderboard_loading ? ( */}
                  {/* // <Spinner speed="1.5s" size={"sm"} /> */}
                  {/* // ) : ( */}
                  {/* <Text color="black">{data?.length}</Text> */}
                  {/* ))} */}
                </HStack>
              </Tab>
            ))}

            <Spacer />
          </TabList>

          <TabPanels>
            {bidsboardTabs?.map((_) => (
              <TabPanel px="0px" key={nanoid()}>
                {/* {user_leaderboard_loading && (
                <Flex justifySelf={"flex-end"} w="50px" h="50px" pt="20px">
                  <Lottie animationData={loadingJson} />
                </Flex>
              )} */}

                <TableContainer {...tableCon} style={{ zIndex: 1 }}>
                  <Table>
                    <Thead color="black">
                      {table?.getHeaderGroups()?.map((headerGroup) => (
                        <Tr key={nanoid()}>
                          <Th textTransform={"initial"} px="0px">
                            {/* <Checkbox
                              _checked={{
                                "& .chakra-checkbox__control": {
                                  background: "black",
                                  borderColor: "black",
                                  borderRadius: 5,
                                },
                              }}
                              isChecked={table.getIsAllRowsSelected()}
                              onChange={table.getToggleAllRowsSelectedHandler()}
                            /> */}
                          </Th>
                          {headerGroup.headers?.map((header) => (
                            <Th
                              textTransform={"initial"}
                              px="0px"
                              key={nanoid()}
                            >
                              {header.isPlaceholder
                                ? null
                                : flexRender(
                                    header.column.columnDef.header,
                                    header.getContext()
                                  )}
                            </Th>
                          ))}
                        </Tr>
                      ))}
                    </Thead>
                    <Tbody color="#606060" fontSize={"14px"}>
                      {table?.getRowModel()?.rows?.map((row) => (
                        <Tr key={nanoid()} _hover={{ bg: "none" }}>
                          <Td px="0px">
                            {/* <Checkbox
                              _checked={{
                                "& .chakra-checkbox__control": {
                                  background: "black",
                                  borderColor: "black",
                                  borderRadius: 5,
                                },
                              }}
                              isChecked={row.getIsSelected()}
                              onChange={row.getToggleSelectedHandler()}
                            /> */}
                          </Td>
                          {row.getVisibleCells()?.map((cell) => (
                            <Td key={nanoid()} px="0px">
                              {flexRender(
                                cell.column.columnDef.cell,
                                cell.getContext()
                              )}
                            </Td>
                          ))}
                          {/* <Td px="0px" color={appTheme.textColor3}>
                          <OrderOptionsPopover row={row} pipelineData={""} />
                        </Td> */}
                        </Tr>
                      ))}
                    </Tbody>
                  </Table>
                  {/* 
                {data?.length < 1 && (
                  <Flex style={lottieRoot} flexDir="column" py="50px">
                    <Lottie
                      animationData={
                        user_leaderboard_loading ? loadingJson : emptyState
                      }
                      loop={false}
                      style={{ height: user_leaderboard_loading ? 30 : 400 }}
                      width={300}
                    />
                  </Flex>
                )} */}
                </TableContainer>
              </TabPanel>
            ))}
          </TabPanels>
        </Tabs>
      </ContainerWrapper>
    </Flex>
  );
};

export default Aunction;
