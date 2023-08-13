import React, { useContext, useEffect } from "react";
import { MutatingDots } from "react-loader-spinner";
import { gql, useQuery } from "@apollo/client";
import Error from "../Ui/Error";
import DataContext from "../store/data-context";
import classes from "./CategoryItem.module.css";
import { Row } from "react-bootstrap";

const GET_PLAYLISTS = gql`
  query ExampleQuery {
    getPlaylists {
      id
      title
    }
  }
`;

function CategoryItem() {
  const { loading, error, data } = useQuery(GET_PLAYLISTS);
  useEffect(() => {
    if (data) {
      ctx.setCat(data.getPlaylists);
    }
  }, [data]);
  const ctx = useContext(DataContext);
  if (loading)
    return (
      <div className="spinner">
        <MutatingDots
          height="100"
          width="100"
          color="salmon"
          secondaryColor="yellow"
          radius="15"
          ariaLabel="mutating-dots-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
    );
  if (error) return <Error message={error.message} />;

  return (
    <Row>
      {data.getPlaylists.map((e) => {
        const isact = ctx.active === e.id ? classes.active : classes.unactive;
        return (
          <h5
            onClick={() => ctx.setActiveC(e.id)}
            className={isact}
            key={`${e.id}cat`}
          >
            {e.title}
          </h5>
        );
      })}
    </Row>
  );
}

export default CategoryItem;
