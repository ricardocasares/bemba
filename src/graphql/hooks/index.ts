import useSWR from "swr";
import {
  client,
  everything,
  StationRequest,
  StationSearchInput,
} from "@/graphql";

export function useStations(
  search: StationSearchInput,
  station: StationRequest = everything
) {
  const fetcher = () => client.query({ stations: [{ search }, station] });
  return useSWR(JSON.stringify({ search, station }), fetcher);
}

export function useStationsByUUID(
  uuids: string[],
  station: StationRequest = everything
) {
  const fetcher = (uuids: string[]) =>
    client.query({ stationsByUUID: [{ uuids }, station] });
  return useSWR([uuids], fetcher);
}
