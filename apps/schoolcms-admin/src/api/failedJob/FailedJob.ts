export type FailedJob = {
  connection: string;
  exception: string;
  failedAt: Date;
  id: bigint;
  payload: string;
  queue: string;
  uuid: string;
};
