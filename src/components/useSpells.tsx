import { QueryClient, useQuery } from "react-query";
import axios from "axios";
import { SPELLS_URL } from "../api.config";

export const KEY = "Fetch Spells";

const fetchSpells = () => axios.get(SPELLS_URL);

export const preFetchSpells = (queryClient: QueryClient) =>
  queryClient.prefetchQuery(KEY, fetchSpells);

export default function useSpells() {
  return useQuery<any>(KEY, fetchSpells, {
    select: ({ data }) => data,
  });
}
