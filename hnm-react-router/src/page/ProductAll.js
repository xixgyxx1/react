import React, { useEffect, useState } from "react";
import ProductCard from "../component/ProductCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useSearchParams } from "react-router-dom";

const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  const [query, setQuery] = useSearchParams();
  const [searchInput, setSearchInput] = useState(query.get("q") || ""); // 초기값 설정

  const getProducts = async () => {
    try {
      let response = await fetch(`http://localhost:4000/products`);
      let data = await response.json();
      let searchQuery = query.get("q") || "";

      // 검색어로 데이터 필터링
      const filteredData = data.filter((product) =>
        product.title.includes(searchQuery)
      );

      console.log("Filtered data:", filteredData); // 필터링된 데이터 확인
      setProductList(filteredData);
    } catch (error) {
      console.error("Error fetching products:", error);
      setProductList([]); // 에러 발생 시 빈 배열로 설정
    }
  };

  const handleSearch = () => {
    setQuery({ q: searchInput }); // 쿼리 파라미터 업데이트
  };

  useEffect(() => {
    console.log("Current search query:", query.get("q"));
    getProducts();
  }, [query]);

  return (
    <Container>
      <Row>
        {productList.length > 0 ? (
          productList.map((menu) => (
            <Col md={3} sm={12} key={menu.id}>
              <ProductCard item={menu} />
            </Col>
          ))
        ) : (
          <p>No products found.</p>
        )}
      </Row>
    </Container>
  );
};
export default ProductAll;
