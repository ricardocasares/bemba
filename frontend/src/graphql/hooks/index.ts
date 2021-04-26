import useSWR from "swr";
import { client, everything } from "@/graphql";

export const useStations = ({
  where,
  limit,
  station = everything,
}: {
  where?: any;
  limit?: number;
  station?: any;
}) =>
  useSWR(JSON.stringify({ where, limit, station }), () =>
    client.chain.query.user().get({ ...everything })
  );

export const useStationsByUUID = (
  uuids: string[],
  limit?: number,
  station: any = everything
) => useSWR([uuids], () => client.chain.query.user().get({ ...everything }));
