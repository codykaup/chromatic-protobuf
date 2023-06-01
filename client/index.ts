import { BuildServiceClient, BuildRequest } from './build';
// @ts-ignore
import * as grpc from '@grpc/grpc-js';

async function main() {
  const client = new BuildServiceClient(
    'localhost:8080',
    grpc.credentials.createInsecure()
  );

  await manualRequest(client).then((res) => console.log(res.toObject()));
  await objectRequest(client).then((res) => console.log(res.toObject()));
  await fromObjectRequest(client).then((res) => console.log(res.toObject()));
}

async function manualRequest(client: BuildServiceClient) {
  const request = new BuildRequest();
  request.id = 1;
  request.captureCount = 10;
  request.traceHeader = 'some-trace-header';

  return client.CreateBuild(request);
}

async function objectRequest(client: BuildServiceClient) {
  const request = new BuildRequest({
    id: 2,
    captureCount: 10,
    traceHeader: 'some-trace-header',
  });

  return client.CreateBuild(request);
}

async function fromObjectRequest(client: BuildServiceClient) {
  const request = BuildRequest.fromObject({
    id: 3,
    captureCount: 10,
    traceHeader: 'some-trace-header',
  });

  return client.CreateBuild(request);
}

main();
