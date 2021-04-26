import useSWR from "swr";
import {
  client,
  everything,
  station_bool_exp,
  stationRequest,
} from "@/graphql";

export const useStations = ({
  where,
  limit,
  station = everything,
}: {
  where?: station_bool_exp;
  limit?: number;
  station?: stationRequest;
}) =>
  useSWR(JSON.stringify({ where, limit, station }), () =>
    client.chain.query.station({ where, limit }).get({
      name: true,
      stream: true,
      user: { name: true },
      country: { name: true },
    })
  );

export const useStationsByUUID = (
  uuids: string[],
  limit?: number,
  station: any = everything
) =>
  useSWR([uuids], () =>
    client.chain.query.user().get({ name: true, email: true })
  );
