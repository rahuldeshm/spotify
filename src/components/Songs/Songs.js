import React, { useContext } from "react";
import { gql, useQuery } from "@apollo/client";
import DataContext from "../store/data-context";
import { MutatingDots } from "react-loader-spinner";
import Error from "../Ui/Error";
import LoadedSongs from "./LoadedSongs";

const SONGS_QUERY = gql`
  query ExampleQuery($playlistId: Int!) {
    getSongs(playlistId: $playlistId) {
      url
      _id
      artist
      duration
      photo
      title
    }
  }
`;

function Songs() {
  const ctx = useContext(DataContext);
  const { loading, err, data } = useQuery(SONGS_QUERY, {
    variables: {
      playlistId: ctx.active,
    },
  });
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
  if (err) {
    return <Error />;
  }
  if (data) {
    console.log(data);
    return <LoadedSongs data={data} id={ctx.active} />;
  }
}

export default Songs;
