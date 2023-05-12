import { createContext } from "react";
import PropTypes from "prop-types";
import GetData from "../services/GetData";
import ApiService from "../services/ApiService";

const source = {
  api: new ApiService(),
  mock: new GetData(),
}

export const SourceContext = createContext();

export default function SourceProvider({ children }) 
{
  return (
    <SourceContext.Provider value={{ source: source.api }}>
      {children}
    </SourceContext.Provider>
  )
};

SourceProvider.propTypes = 
{
  children: PropTypes.object,
};