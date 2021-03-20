import useSWR from "swr";
import {
  client,
  everything,
  StationRequest,
  StationSearchInput,
} from "@/graphql";

export const useStations = (
  search: StationSearchInput,
  station: StationRequest = everything
) =>
  useSWR(JSON.stringify({ search, station }), () =>
    client.query({ stations: [{ search }, station] })
  );

export const useStationsByUUID = (
  uuids: string[],
  station: StationRequest = everything
) =>
  useSWR([uuids], (uuids: string[]) =>
    client.query({ stationsByUUID: [{ uuids }, station] })
  );
