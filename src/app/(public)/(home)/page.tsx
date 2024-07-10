"use client"
import ReactPaginate from "react-paginate";
import { Box, Flex } from "@chakra-ui/react";
import { useState } from "react";
import { useQuery } from "react-query";
import { getProducts } from "@/service/product.service";
import Banner from "@/componentes/Banner";
import Card from "@/componentes/Card";

import "./paginate.css";

export default function Home() {
  const { data: Product } = useQuery("Product", getProducts);
  const [currentPage, setCurrentPage] = useState(0);

  if (!Product) {
    return null;
  }

  const itemsPerPage = 8;
  const offset = currentPage * itemsPerPage;
  const currentPageData = Product.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(Product.length / itemsPerPage);

  const handlePageClick = ({ selected }: { selected: number }) => {
    setCurrentPage(selected);
  };

  return (
    <>
      <Flex>
        <Banner src="/Banner-teste-3.png" />
      </Flex>

      <Flex as="main">
        <Flex flexWrap="wrap" alignItems="center" justifyContent="center">
          <Card products={currentPageData} />
        </Flex>
      </Flex>

      <Box mt="3rem" mb="3rem" display="flex" justifyContent="center">
        <ReactPaginate
          previousLabel={"Anterior"}
          nextLabel={"Próximo"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          activeClassName={"active"}
          previousClassName={"prev"}
          nextClassName={"next"}
        />
      </Box>
    </>
  );
}
