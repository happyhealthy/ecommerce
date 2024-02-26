import { Button, Table, Tag } from "antd";
import { Avatar, List, Radio, Space, message } from "antd";
import { useEffect } from "react";
import { addItem } from "../components/shoppingCart/shoppingCartSlice";
import { useDispatch, useSelector } from "react-redux";
export const ProductPage = () => {
  const shoppingCart = useSelector((state) => state.shoppingCart.items);
  const dispatch = useDispatch();
  const [messageApi, contextHolder] = message.useMessage();

  let dataSource = Array.from({ length: 10 }).map((_, index) => {
    return {
      id: index,
      name: `Product ${index}`,
      price: index,
      description: "very good",
      image: "/001.jpg",
    };
  });

  let clickAdd = (item) => {
    dispatch(addItem(item));
    messageApi.success("Added to cart!");
  };

  return (
    <div>
      {contextHolder}
      <h1>Product Page</h1> <br></br>
      {/* <Table dataSource={dataSource} columns={columns} />; */}
      <List
        className="m-4"
        itemLayout="vertical"
        pagination={{
          position: "both",
          align: "end",
          pageSize: 2,
        }}
        dataSource={dataSource}
        renderItem={(item, index) => (
          <List.Item
            key={index}
            extra={<img width={272} alt="logo" src={item.image} />}
          >
            <List.Item.Meta
              avatar={<Avatar src={item.image} />}
              title={item.name}
            />
            <div>
              {item.description}
              <br />${item.price}
            </div>
            <div className="flex flex-row gap-4">
              <Button onClick={() => clickAdd(item)} type="primary">
                Add to cart
              </Button>
              <Button danger> - </Button>
            </div>
          </List.Item>
        )}
      />
    </div>
  );
};
