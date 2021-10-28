import React, { useContext } from "react";
import {
  AppBar,
  IconButton,
  Toolbar,
  useAutocomplete,
} from "@mui/material";
import { Box } from "@mui/system";
import SearchIcon from "@mui/icons-material/Search";
import MovieIcon from "@mui/icons-material/Movie";
import "./style.scss";
import {MoviesContext,MoviesInfo} from "../MoviesContext";
import {Link,useHistory} from "react-router-dom";

export function Header() {
  const context = useContext(MoviesContext);
  const his = useHistory();
  const {
    getRootProps,
    getInputLabelProps,
    getInputProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
  } = useAutocomplete({
    id: 'use-autocomplete-demo',
    options: context,
    getOptionLabel: (option) => {
      if(Array.isArray(option.name))
        return option.name[0];
      return option.name;
    },
    filterOptions: (options,{ inputValue })=>
      options.filter(value => {
        if(Array.isArray(value.name))
          return value.name.map(v => v.toLowerCase().includes(inputValue.toLowerCase())).includes(true);
        return value.name.toLowerCase().includes(inputValue.toLowerCase());
      })
  });
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={()=>{his.push("/")}}
            sx={{ mr: 2 }}
          >
            <MovieIcon/>
          </IconButton>
	  <div className="SearchBox">
		<IconButton
		size="medium"
		edge="start"
		color="primary"
		aria-label="menu"
		>
		<SearchIcon/>
		</IconButton>
		<input {...getInputProps()} className="SearchInput" />
    {groupedOptions.length > 0 ? (
    <ul {...getListboxProps()} className="suggest">
      {(groupedOptions as MoviesInfo).map((option, index) => (
          <Link key={index} to={`/${option.id}`} style={{textDecoration:"none",color:"inherit"}}>
            <li key={index} className="item" {...getOptionProps({ option, index })}>
                {Array.isArray(option.name)?option.name.join(" | "):option.name}
            </li>
          </Link>
      ))}
    </ul>
  ) : null}
	  </div>
        </Toolbar>
      </AppBar>
      
    </Box>
  );
}
