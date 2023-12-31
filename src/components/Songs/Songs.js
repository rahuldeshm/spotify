import React, { useContext, useEffect } from "react";
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
      playlistId: ctx.active.id,
    },
  });
  const { setAllSongs } = ctx;
  useEffect(() => {
    if (data) setAllSongs(data.getSongs);
  }, [data, setAllSongs]);
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

  return <LoadedSongs data={data} id={ctx.active.title} />;
}

export default Songs;
