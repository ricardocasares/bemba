import useSWR from "swr";
import {
  client,
  everything,
  station_bool_exp,
  stationRequest,
} from "@/graphql";
import { station_order_by } from "@/genql";

export const useStations = ({
  where,
  limit = 10,
  order_by = [{ votes: "desc" }],
  station = everything,
}: {
  where?: station_bool_exp;
  limit?: number;
  order_by?: station_order_by[];
  station?: stationRequest;
}) =>
  useSWR(JSON.stringify({ where, limit, station, order_by }), () =>
    client.chain.query.station({ where, limit, order_by }).get(station)
  );

export const useStationsByUUID = ({
  uuids,
  limit = 100,
  order_by = [{ votes: "desc" }],
  station = everything,
}: {
  uuids: string[];
  where?: station_bool_exp;
  limit?: number;
  order_by?: station_order_by[];
  station?: stationRequest;
}) =>
  useSWR([uuids], () =>
    client.chain.query
      .station({ where: { id: { _in: uuids } }, order_by, limit })
      .get(station)
  );
