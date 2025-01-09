import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";

const SearchBox = () => {
  const [keyword, setKeyword] = useState("");
  const dispatch = useDispatch();
  const searchByName = (event) => {
    event.preventDefault();
    dispatch({ type: "SEARCH_BY_UESRNAME", payload: { keyword } });
  };
  return (
    <Form onsubmit={searchByName} className="search-from">
      <Row>
        <Col lg={10}>
          <Form.Control
            type="text"
            placeholder="이름을 입력하세요"
            onChange={(event) => setKeyword(event.target.value)}
          />
        </Col>
        <Col lg={2}>
          <Button type="submit">찾기</Button>
        </Col>
      </Row>
    </Form>
  );
};

export default SearchBox;
