import React, { Component } from "react";
import ReactTable from "react-table-6";
import api from "../../Api Client/Api";

import DeleteMovie from "./MoviesDelete";
import UpdateMovie from "./MoviesUpdate";

import styled from "styled-components";

import "react-table-6/react-table.css";

const Wrapper = styled.div`
  padding: 0 40px 40px 40px;
`;

class MoviesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      columns: [],
      isLoading: false,
    };
  }

  componentDidMount = async () => {
    this.setState({ isLoading: true });

    await api.getAllMovies().then((movies) => {
      this.setState({
        movies: movies.data.data,
        isLoading: false,
      });
    });
  };

  render() {
    const { movies, isLoading } = this.state;
    console.log("TCL: MoviesList -> render -> movies", movies);

    const columns = [
      {
        Header: "ID",
        accessor: "_id",
        filterable: true,
      },
      {
        Header: "Name",
        accessor: "name",
        filterable: true,
      },
      {
        Header: "Rating",
        accessor: "rating",
        filterable: true,
      },
      {
        Header: "Time",
        accessor: "time",
        Cell: (props) => <span>{props.value.join(" / ")}</span>,
      },
      {
        Header: "",
        accessor: "",
        Cell: function (props) {
          return (
            <span>
              <DeleteMovie id={props.original._id} />
            </span>
          );
        },
      },
      {
        Header: "",
        accessor: "",
        Cell: function (props) {
          return (
            <span>
              <UpdateMovie id={props.original._id} />
            </span>
          );
        },
      },
    ];

    let showTable = true;
    if (!movies.length) {
      showTable = false;
    }

    return (
      <Wrapper>
        {showTable && (
          <ReactTable
            data={movies}
            columns={columns}
            loading={isLoading}
            defaultPageSize={10}
            showPageSizeOptions={true}
            minRows={0}
          />
        )}
      </Wrapper>
    );
  }
}

export default MoviesList;